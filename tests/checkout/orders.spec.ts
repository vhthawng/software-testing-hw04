import type { Page } from '@playwright/test';
import { expect, test } from '../fixtures/eshop';
import { signIn } from '../fixtures/web';
import data from '../data/checkout.json';
import { addLine, expectSummary, money, openCart, openCheckout } from './checkout';

test.use({ locale: 'en-US' });

async function placeOrder(page: Page) {
  const response = page.waitForResponse(result =>
    new URL(result.url()).pathname === '/api/checkout' && result.request().method() === 'POST');
  await page.getByRole('button', { name: 'Xác Nhận Thanh Toán', exact: true }).click();
  const result = await response;
  expect(result.ok()).toBe(true);
  const { orderId } = await result.json();
  expect(orderId).toBeGreaterThan(0);
  await expect(page.getByRole('heading', { name: 'Thanh toán thành công!' })).toBeVisible();
  return orderId as number;
}

async function expectOrder(page: Page, orderId: number, total: number) {
  await page.getByRole('link', { name: /^Chào,/ }).click();
  const order = page.getByRole('row').filter({
    has: page.getByRole('cell', { name: `#${orderId}`, exact: true }),
  });
  await expect(order).toHaveCount(1);
  await expect(order.getByRole('cell', { name: money(total), exact: true })).toBeVisible();
}

test('TC-B08-002 đặt nhiều sản phẩm và xóa giỏ sau thành công', async ({ page, customer, createProduct }) => {
  const a = { ...await createProduct(data.primaryPrice), quantity: data.primaryQuantity, price: data.primaryPrice };
  const b = { ...await createProduct(data.secondaryPrice), quantity: data.secondaryQuantity, price: data.secondaryPrice };
  await signIn(page, customer);
  await addLine(page, a);
  await addLine(page, b);
  await openCheckout(page);
  await expectSummary(page, [a, b], data.multiTotal);
  const orderId = await placeOrder(page);
  await openCart(page);
  if (await page.getByRole('heading', { name: 'Giỏ Hàng', exact: true }).isVisible()) {
    await test.info().attach('Giỏ còn sản phẩm sau khi đặt đơn', { body: await page.screenshot(), contentType: 'image/png' });
  }
  await expect.soft(page.getByRole('heading', { name: 'Giỏ hàng của bạn đang trống' })).toBeVisible();
  await expectOrder(page, orderId, data.multiTotal);
});

test('TC-B08-013 đặt được một sản phẩm số lượng một', async ({ page, customer, createProduct }) => {
  const line = { ...await createProduct(data.primaryPrice), quantity: data.singleQuantity, price: data.primaryPrice };
  await signIn(page, customer);
  await addLine(page, line);
  await openCheckout(page);
  await expectSummary(page, [line], data.primaryPrice);
  await expectOrder(page, await placeOrder(page), data.primaryPrice);
  await expect(page.getByRole('row').filter({
    has: page.getByRole('cell', { name: /^#\d+$/ }),
  })).toHaveCount(1);
});

test('TC-B08-019 giữ đơn vừa tạo sau khi đăng nhập lại', async ({ page, customer, createProduct }) => {
  const line = { ...await createProduct(data.primaryPrice), quantity: data.singleQuantity, price: data.primaryPrice };
  await signIn(page, customer);
  await addLine(page, line);
  await openCheckout(page);
  const orderId = await placeOrder(page);
  await expectOrder(page, orderId, data.primaryPrice);
  await page.getByRole('button', { name: 'Thoát', exact: true }).click();
  await signIn(page, customer);
  await expectOrder(page, orderId, data.primaryPrice);
});
