import { expect, test } from '../fixtures/eshop';
import data from '../data/products.json';
import sut from '../../scripts/sut-paths.json';
import { inventory, productForm, productRow, reloadProducts, signInAdmin } from './products';

for (const sample of data.create) {
  test(`${sample.id} ${sample.title}`, async ({ page, admin, request }) => {
    await signInAdmin(page, admin);
    const before = await inventory(page);
    expect(before.length).toBeGreaterThan(0);
    const fields = productForm(page);
    const name = sample.name.repeat(sample.length ?? 1);
    const category = sample.category ?? data.defaultCategory;
    await fields.name.fill(name);
    await fields.price.fill(sample.price);
    await fields.category.selectOption({ label: category });
    const enteredName = await fields.name.inputValue();
    let createdId: number | undefined;
    try {
      const valid = await fields.form.evaluate(form => (form as HTMLFormElement).checkValidity());
      if (valid) {
        // In this pinned UI, submissions that pass native validation send a POST.
        const [result] = await Promise.all([
          page.waitForResponse(response =>
            new URL(response.url()).pathname === '/api/products' && response.request().method() === 'POST'),
          fields.save.click(),
        ]);
        if (result.ok()) {
          const body = await result.json();
          expect(Number.isInteger(body.id) && body.id > 0).toBe(true);
          createdId = body.id;
        }
      } else {
        await fields.save.click();
      }

      await reloadProducts(page);
      if (sample.accept) {
        const row = productRow(page, name);
        await expect(row).toHaveCount(1);
        await expect(row.getByRole('cell', { name: `${sample.price} ₫`, exact: true })).toBeVisible();
        await row.getByRole('button', { name: 'Sửa', exact: true }).click();
        await expect(fields.category.locator('option:checked')).toHaveText(category);
      } else if (sample.length && enteredName.length < sample.length && createdId !== undefined) {
        test.info().annotations.push({
          type: 'input-length',
          description: `UI accepted ${enteredName.length} of ${sample.length} characters`,
        });
        await expect(productRow(page, name)).toHaveCount(0);
        await expect(productRow(page, enteredName)).toHaveCount(1);
      } else {
        expect(await inventory(page)).toEqual(before);
      }
    } finally {
      if (createdId !== undefined) {
        const login = await request.post(`${sut.backendURL}/api/login`, { data: admin });
        await expect(login).toBeOK();
        const { token } = await login.json();
        const cleanup = await request.delete(`${sut.backendURL}/api/products/${createdId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        await expect(cleanup).toBeOK();
      }
    }
  });
}
