import { expect, test } from '../fixtures/eshop';
import { signIn } from '../fixtures/web';
import data from '../data/checkout.json';
import { addLine, cartRow, expectSummary, money, openCart, openCheckout } from './checkout';

test.use({ locale: 'en-US' });

test('TC-B08-014 hiển thị đủ hai sản phẩm khác tên cùng giá', async ({ page, customer, createProduct }) => {
  const a = { ...await createProduct(data.primaryPrice), quantity: data.singleQuantity, price: data.primaryPrice };
  const b = { ...await createProduct(data.primaryPrice), quantity: data.singleQuantity, price: data.primaryPrice };
  await signIn(page, customer);
  await addLine(page, a);
  await addLine(page, b);
  await openCheckout(page);
  await expectSummary(page, [a, b], data.samePriceTotal);
});

test('TC-B08-015 loại dòng đã xóa khi tính tổng', async ({ page, customer, createProduct }) => {
  const a = { ...await createProduct(data.primaryPrice), quantity: data.singleQuantity, price: data.primaryPrice };
  const b = { ...await createProduct(data.secondaryPrice), quantity: data.singleQuantity, price: data.secondaryPrice };
  await signIn(page, customer);
  await addLine(page, a);
  await addLine(page, b);
  await openCart(page);
  await cartRow(page, b.name).getByRole('button', { name: 'Xóa', exact: true }).click();
  await expect(cartRow(page, b.name)).toHaveCount(0);
  await openCheckout(page);
  await expectSummary(page, [a], data.primaryPrice);
});

test('TC-B08-016 tính lại tổng khi xóa và thêm lại với số lượng mới', async ({ page, customer, createProduct }) => {
  const a = { ...await createProduct(data.primaryPrice), quantity: data.primaryQuantity, price: data.primaryPrice };
  await signIn(page, customer);
  await addLine(page, a);
  await openCheckout(page);
  await expectSummary(page, [a], data.samePriceTotal);
  await openCart(page);
  await cartRow(page, a.name).getByRole('button', { name: 'Xóa', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Giỏ hàng của bạn đang trống' })).toBeVisible();
  const replacement = { ...a, quantity: data.secondaryQuantity };
  await addLine(page, replacement);
  await openCheckout(page);
  await expectSummary(page, [replacement], data.replacementTotal);
});

test('TC-B08-017 giữ đúng tổng khi đảo thứ tự thêm hai sản phẩm', async ({ page, customer, createProduct, context }) => {
  const a = { ...await createProduct(data.primaryPrice), quantity: data.primaryQuantity, price: data.primaryPrice };
  const b = { ...await createProduct(data.secondaryPrice), quantity: data.secondaryQuantity, price: data.secondaryPrice };
  await signIn(page, customer);
  await addLine(page, a);
  await addLine(page, b);
  await openCheckout(page);
  await expectSummary(page, [a, b], data.multiTotal);

  // A new page has its own in-memory cart, even with the same account.
  const reversed = await context.newPage();
  try {
    await reversed.goto('/');
    await expect(reversed.getByRole('button', { name: 'Thoát' })).toBeVisible();
    await addLine(reversed, b);
    await addLine(reversed, a);
    await openCheckout(reversed);
    await expectSummary(reversed, [b, a], data.multiTotal);
  } finally {
    await reversed.close();
  }
});

test('TC-B08-020 tính đủ số lượng khi thêm cùng sản phẩm hai lần', async ({ page, customer, createProduct }) => {
  const line = { ...await createProduct(data.primaryPrice), quantity: data.singleQuantity, price: data.primaryPrice };
  await signIn(page, customer);
  await addLine(page, line);
  await addLine(page, line);
  await openCheckout(page);

  const list = page.getByRole('heading', { name: 'Sản phẩm:', exact: true }).locator('..').getByRole('list');
  const rows = await list.getByRole('listitem').allTextContents();
  const quantities = rows.map(row => Number(row.match(/ x (\d+) — /)?.[1]));
  expect(rows.length).toBeGreaterThan(0);
  expect(rows.every(row => row.startsWith(`${line.name} x `))).toBe(true);
  expect(quantities.reduce((sum, count) => sum + count, 0)).toBe(data.primaryQuantity);
  await expect(page.getByText(`Tổng thanh toán: ${money(data.samePriceTotal)}`, { exact: true })).toBeVisible();
});
