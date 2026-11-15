import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, renameSync, rmdirSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const config = JSON.parse(readFileSync(new URL('./sut-paths.json', import.meta.url), 'utf8'));
const source = path.join(root, config.sourceDirectory);
const runtime = path.join(root, config.runtimeDirectory);

function run(command, args, cwd) {
  const result = spawnSync(command, args, { cwd, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command} ${args[0]} failed in ${cwd}`);
}

try {
  run('git', ['-C', source, 'cat-file', '-e', `${config.revision}^{commit}`], root);
  mkdirSync(path.dirname(runtime), { recursive: true });
  if (!existsSync(runtime)) {
    const staging = mkdtempSync(path.join(path.dirname(runtime), 'extract-'));
    try {
      const archive = path.join(staging, 'source.tar');
      const files = path.join(staging, 'files');
      mkdirSync(files);
      run('git', ['-C', source, 'archive', '--format=tar', `--output=${archive}`, config.revision], root);
      run('tar', ['-xf', archive, '-C', files], root);
      renameSync(files, runtime);
      unlinkSync(archive);
      rmdirSync(staging);
    } catch (error) {
      console.error(`Temporary extraction directory: ${staging}`);
      throw error;
    }
  }

  for (const service of ['backend', 'frontend-web', 'frontend-admin']) {
    run(process.execPath, [process.env.npm_execpath, 'ci', '--no-audit', '--no-fund'], path.join(runtime, service));
  }
  console.log(`EShop ${config.revision.slice(0, 7)} prepared at ${runtime}`);
} catch (error) {
  console.error(String(error));
  console.error('For a new clone, run git submodule update --init and then npm run sut:prepare.');
  process.exitCode = 1;
}
