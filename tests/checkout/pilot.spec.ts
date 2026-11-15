import type { Page } from '@playwright/test';
import data from '../data/checkout-pilot.json';
import { expect, test } from '../fixtures/eshop';

test.use({ locale: 'en-US', productPrice: data.unitPrice });

async function signIn(page: Page, customer: { email: string; password: string; name: string }) {
  await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
  // EShop's login form has two text inputs with unassociated labels.
  const loginFields = page.locator('form').getByRole('textbox');
  await expect(loginFields).toHaveCount(2);
  await loginFields.nth(0).fill(customer.email);
  await loginFields.nth(1).fill(customer.password);
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await expect(page.getByRole('link', { name: `Chào, ${customer.name}`, exact: true })).toBeVisible();
}

async function addSingleLine(page: Page, product: { id: number; name: string }) {
  await page.goto(`/product/${product.id}`, { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { name: product.name, exact: true })).toBeVisible();
  await page.getByRole('spinbutton').fill(String(data.quantity));

  const add = page.getByRole('button', { name: 'Thêm vào giỏ hàng', exact: true });
  const added = page.getByRole('button', { name: 'Đã thêm', exact: true });
  await add.click();
  // This pinned SUT ignores the first click on the product detail page.
  if (!(await added.isVisible())) await add.click();
  await expect(added).toBeVisible();

  await page.getByRole('link', { name: 'Giỏ hàng', exact: true }).click();
  const row = page.getByRole('row').filter({
    has: page.getByRole('cell', { name: product.name, exact: true }),
  });
  await expect(row).toHaveCount(1);
  await expect(row.getByRole('cell', { name: String(data.quantity), exact: true })).toBeVisible();
}

const checkoutButton = (page: Page) =>
  page.getByRole('button', { name: 'Tiến hành thanh toán', exact: true });

const checkoutHeading = (page: Page) =>
  page.getByRole('heading', { name: 'Xác Nhận Đơn Hàng', exact: true });

const totalText = `Tổng thanh toán: ${data.expectedTotal.toLocaleString('en-US')} ₫`;

test('TC-B08-001 hiển thị đúng sản phẩm, số lượng và tổng tiền', async ({ page, customer, product }) => {
  await page.goto('/');
  await signIn(page, customer);
  await addSingleLine(page, product);
  await checkoutButton(page).click();
  await expect(checkoutHeading(page)).toBeVisible();

  const summary = page.getByRole('list').filter({
    has: page.getByRole('listitem').filter({ hasText: product.name }),
  });
  const subtotal = data.expectedTotal.toLocaleString('en-US');
  await expect(summary.getByRole('listitem')).toHaveText(
    [`${product.name} x ${data.quantity} — ${subtotal} ₫`],
  );
  await expect(page.getByText(totalText, { exact: true })).toBeVisible();
});

test('TC-B08-003 chặn khách chưa đăng nhập khi vào thanh toán từ giỏ', async ({ page, product }) => {
  await addSingleLine(page, product);
  await expect(page.getByRole('link', { name: 'Đăng nhập', exact: true })).toBeVisible();
  await checkoutButton(page).click();
  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByRole('button', { name: 'Sign In', exact: true })).toBeVisible();
  await expect(checkoutHeading(page)).toHaveCount(0);
});

test('TC-B08-004 tổng tiền do giỏ hàng tính và không cho nhập trực tiếp', async ({ page, customer, product }) => {
  await page.goto('/');
  await signIn(page, customer);
  await addSingleLine(page, product);
  await checkoutButton(page).click();
  await expect(checkoutHeading(page)).toBeVisible();
  await expect(page.getByText(totalText, { exact: true })).toBeVisible();

  // The pinned markup places the unassociated label and its field in the same group.
  const totalGroup = page.locator('label')
    .filter({ hasText: /^Tổng tiền thanh toán \(VND\):$/ })
    .locator('..');
  await expect(totalGroup).toHaveCount(1);
  const totalFields = totalGroup.locator('input:not([type="hidden"]), textarea, [contenteditable]');
  for (const field of await totalFields.all()) {
    await expect(field).not.toBeEditable();
  }
});
