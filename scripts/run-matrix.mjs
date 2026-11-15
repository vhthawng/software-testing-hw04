import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: { 'student-id': { type: 'string' }, operator: { type: 'string' } },
});
const studentId = values['student-id'];
if (!/^\d{8}$/.test(studentId ?? '')) {
  console.error('Usage: npm run test:matrix -- --student-id 23120355 [--operator Codex]');
  process.exit(2);
}

const root = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(import.meta.url);
const cli = path.join(path.dirname(require.resolve('@playwright/test/package.json')), 'cli.js');
const features = { 'FR-04': 'tests/profile', 'FR-08': 'tests/checkout', 'FR-15': 'tests/products' };
const browsers = ['chrome', 'edge', 'firefox'];
const startedAt = new Date().toISOString();
const output = path.join(root, '.hw04', 'matrix', startedAt.replace(/[:.]/g, '-'));
mkdirSync(output, { recursive: true });
const summary = { studentId, operator: values.operator ?? null, startedAt, runs: [] };
console.log(`Matrix output: ${output}`);

for (const [feature, testDirectory] of Object.entries(features)) {
  for (const browser of browsers) {
    const timestamp = new Date().toISOString();
    const folder = path.join(output, feature, browser);
    mkdirSync(folder, { recursive: true });
    const reportFile = path.join(folder, 'html', 'index.html');
    const jsonFile = path.join(folder, 'results.json');
    const reportTitle = `Run by: ${studentId} | ${timestamp} | ${feature} | ${browser}`;
    const title = values.operator ? `${reportTitle} | Operator: ${values.operator}` : reportTitle;
    const processResult = spawnSync(process.execPath, [
      cli, 'test', testDirectory, `--project=${browser}`, '--reporter=list,html,json',
      `--output=${path.join(folder, 'artifacts')}`,
    ], {
      cwd: root,
      stdio: 'inherit',
      env: {
        ...process.env,
        PLAYWRIGHT_HTML_TITLE: title,
        PLAYWRIGHT_HTML_OUTPUT_DIR: path.dirname(reportFile),
        PLAYWRIGHT_HTML_OPEN: 'never',
        PLAYWRIGHT_JSON_OUTPUT_FILE: jsonFile,
      },
    });

    const report = existsSync(jsonFile) ? JSON.parse(readFileSync(jsonFile, 'utf8')) : null;
    const stats = report?.stats;
    const executed = (stats?.expected ?? 0) + (stats?.unexpected ?? 0) + (stats?.flaky ?? 0);
    const complete = executed === 12 && !report?.errors?.length && existsSync(reportFile);
    summary.runs.push({
      feature, browser, timestamp, title, exitCode: processResult.status,
      complete, executed, passed: stats?.expected ?? 0, failed: stats?.unexpected ?? 0,
      flaky: stats?.flaky ?? 0, skipped: stats?.skipped ?? 0,
      html: path.relative(output, reportFile), json: path.relative(output, jsonFile),
      error: processResult.error?.message,
    });
    writeFileSync(path.join(output, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`);
    console.log(`${feature} ${browser}: ${executed}/12 executed, ${stats?.unexpected ?? 0} failed`);
  }
}

console.log(`Matrix summary: ${path.join(output, 'summary.json')}`);
process.exitCode = summary.runs.some(run => !run.complete) ? 2
  : Number(summary.runs.some(run => run.failed || run.flaky || run.exitCode !== 0));
