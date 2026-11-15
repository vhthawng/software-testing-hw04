import type { Page } from '@playwright/test';
import { expect, type Product } from '../fixtures/eshop';

export type CartLine = Product & { quantity: number; price: number };

export const money = (amount: number) => `${amount.toLocaleString('en-US')} ₫`;

export async function addLine(page: Page, line: CartLine) {
  await page.getByRole('link', { name: 'EShop', exact: true }).click();
  const card = page.getByRole('heading', { name: line.name, exact: true }).locator('..');
  await card.getByRole('link', { name: 'Xem chi tiết', exact: true }).click();
  await expect(page.getByRole('heading', { name: line.name, exact: true })).toBeVisible();
  await page.getByRole('spinbutton').fill(String(line.quantity));
  const add = page.getByRole('button', { name: 'Thêm vào giỏ hàng', exact: true });
  const added = page.getByRole('button', { name: 'Đã thêm', exact: true });
  await add.click();
  // Work around the pinned product-detail behavior while setting up a checkout case.
  if (!(await added.isVisible())) await add.click();
  await expect(added).toBeVisible();
}

export const openCart = (page: Page) =>
  page.getByRole('link', { name: 'Giỏ hàng', exact: true }).click();

export const cartRow = (page: Page, name: string) =>
  page.getByRole('row').filter({ has: page.getByRole('cell', { name, exact: true }) });

export async function openCheckout(page: Page) {
  await openCart(page);
  await page.getByRole('button', { name: 'Tiến hành thanh toán', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Xác Nhận Đơn Hàng' })).toBeVisible();
}

export async function expectSummary(page: Page, lines: CartLine[], total: number) {
  const list = page.getByRole('heading', { name: 'Sản phẩm:', exact: true }).locator('..').getByRole('list');
  const expected = lines.map(({ name, quantity, price }) =>
    `${name} x ${quantity} — ${money(price * quantity)}`).sort();
  await expect.poll(async () => (await list.getByRole('listitem').allTextContents()).sort()).toEqual(expected);
  await expect(page.getByText(`Tổng thanh toán: ${money(total)}`, { exact: true })).toBeVisible();
}
