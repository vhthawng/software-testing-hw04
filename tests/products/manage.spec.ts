import { expect, test } from '../fixtures/eshop';
import data from '../data/products.json';
import { inventory, productForm, productRow, reloadProducts, signInAdmin } from './products';

test('TC-C15-012 chỉ đổi tên sản phẩm đích, giữ các sản phẩm khác', async ({ page, admin, createProduct }) => {
  const target = await createProduct(data.standardPrice);
  await createProduct(data.comparisonPrice);
  await signInAdmin(page, admin);

  const before = await inventory(page);
  const targetRow = productRow(page, target.name);
  const fields = productForm(page);
  await targetRow.getByRole('button', { name: 'Sửa', exact: true }).click();
  await expect(fields.category.locator('option:checked')).toHaveText(data.otherCategory);
  await fields.name.fill(data.updatedName);
  const [response] = await Promise.all([
    page.waitForResponse(result =>
      new URL(result.url()).pathname === `/api/products/${target.id}` && result.request().method() === 'PUT'),
    fields.save.click(),
  ]);
  expect(response.ok()).toBe(true);
  await expect(productRow(page, target.name)).toHaveCount(0);
  await expect(productRow(page, data.updatedName).first()).toBeVisible();
  const after = before.map(row =>
    JSON.parse(row)[0] === target.name
      ? JSON.stringify([data.updatedName, `${data.standardPrice} ₫`])
      : row).sort();
  expect.soft(await inventory(page), 'Danh sách ngay sau khi sửa').toEqual(after);

  await reloadProducts(page);
  expect(await inventory(page), 'Danh sách sau khi tải lại').toEqual(after);
  await productRow(page, data.updatedName).getByRole('button', { name: 'Sửa', exact: true }).click();
  await expect(fields.price).toHaveValue(String(data.standardPrice));
  await expect(fields.category.locator('option:checked')).toHaveText(data.otherCategory);
});

test('TC-C15-016 chỉ xóa sản phẩm thử, giữ nguyên các dòng khác', async ({ page, admin, createProduct }) => {
  const target = await createProduct(data.standardPrice);
  await createProduct(data.comparisonPrice);
  await signInAdmin(page, admin);
  const before = await inventory(page);
  const row = productRow(page, target.name);
  const expected = before.filter(item => JSON.parse(item)[0] !== target.name);
  await expect(row).toHaveCount(1);
  await row.getByRole('button', { name: 'Xóa', exact: true }).click();
  await expect(row).toHaveCount(0);
  expect.soft(await inventory(page), 'Danh sách ngay sau khi xóa').toEqual(expected);
  await reloadProducts(page);
  expect(await inventory(page)).toEqual(expected);
});
