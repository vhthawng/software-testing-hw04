# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\pilot.spec.ts >> TC-B08-004 tổng tiền do giỏ hàng tính và không cho nhập trực tiếp
- Location: tests\checkout\pilot.spec.ts:72:5

# Error details

```
Error: expect(locator).not.toBeEditable() failed

Locator:  locator('label').filter({ hasText: /^Tổng tiền thanh toán \(VND\):$/ }).locator('..').locator('input:not([type="hidden"]), textarea, [contenteditable]').first()
Expected: not editable
Received: editable
Timeout:  5000ms

Call log:
  - Expect "not toBeEditable" with timeout 5000ms
  - waiting for locator('label').filter({ hasText: /^Tổng tiền thanh toán \(VND\):$/ }).locator('..').locator('input:not([type="hidden"]), textarea, [contenteditable]').first()
    14 × locator resolved to <input type="number" value="200000" class="border p-2 rounded text-red-600 font-bold"/>
       - unexpected value "editable"

```

```yaml
- spinbutton: "200000"
```

# Test source

```ts
  1  | import type { Page } from '@playwright/test';
  2  | import data from '../data/checkout-pilot.json';
  3  | import { expect, test } from '../fixtures/eshop';
  4  | 
  5  | test.use({ locale: 'en-US', productPrice: data.unitPrice });
  6  | 
  7  | async function signIn(page: Page, customer: { email: string; password: string; name: string }) {
  8  |   await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
  9  |   // EShop's login form has two text inputs with unassociated labels.
  10 |   const loginFields = page.locator('form').getByRole('textbox');
  11 |   await expect(loginFields).toHaveCount(2);
  12 |   await loginFields.nth(0).fill(customer.email);
  13 |   await loginFields.nth(1).fill(customer.password);
  14 |   await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  15 |   await expect(page.getByRole('link', { name: `Chào, ${customer.name}`, exact: true })).toBeVisible();
  16 | }
  17 | 
  18 | async function addSingleLine(page: Page, product: { id: number; name: string }) {
  19 |   await page.goto(`/product/${product.id}`, { waitUntil: 'domcontentloaded' });
  20 |   await expect(page.getByRole('heading', { name: product.name, exact: true })).toBeVisible();
  21 |   await page.getByRole('spinbutton').fill(String(data.quantity));
  22 | 
  23 |   const add = page.getByRole('button', { name: 'Thêm vào giỏ hàng', exact: true });
  24 |   const added = page.getByRole('button', { name: 'Đã thêm', exact: true });
  25 |   await add.click();
  26 |   // This pinned SUT ignores the first click on the product detail page.
  27 |   if (!(await added.isVisible())) await add.click();
  28 |   await expect(added).toBeVisible();
  29 | 
  30 |   await page.getByRole('link', { name: 'Giỏ hàng', exact: true }).click();
  31 |   const row = page.getByRole('row').filter({
  32 |     has: page.getByRole('cell', { name: product.name, exact: true }),
  33 |   });
  34 |   await expect(row).toHaveCount(1);
  35 |   await expect(row.getByRole('cell', { name: String(data.quantity), exact: true })).toBeVisible();
  36 | }
  37 | 
  38 | const checkoutButton = (page: Page) =>
  39 |   page.getByRole('button', { name: 'Tiến hành thanh toán', exact: true });
  40 | 
  41 | const checkoutHeading = (page: Page) =>
  42 |   page.getByRole('heading', { name: 'Xác Nhận Đơn Hàng', exact: true });
  43 | 
  44 | const totalText = `Tổng thanh toán: ${data.expectedTotal.toLocaleString('en-US')} ₫`;
  45 | 
  46 | test('TC-B08-001 hiển thị đúng sản phẩm, số lượng và tổng tiền', async ({ page, customer, product }) => {
  47 |   await page.goto('/');
  48 |   await signIn(page, customer);
  49 |   await addSingleLine(page, product);
  50 |   await checkoutButton(page).click();
  51 |   await expect(checkoutHeading(page)).toBeVisible();
  52 | 
  53 |   const summary = page.getByRole('list').filter({
  54 |     has: page.getByRole('listitem').filter({ hasText: product.name }),
  55 |   });
  56 |   const subtotal = data.expectedTotal.toLocaleString('en-US');
  57 |   await expect(summary.getByRole('listitem')).toHaveText(
  58 |     [`${product.name} x ${data.quantity} — ${subtotal} ₫`],
  59 |   );
  60 |   await expect(page.getByText(totalText, { exact: true })).toBeVisible();
  61 | });
  62 | 
  63 | test('TC-B08-003 chặn khách chưa đăng nhập khi vào thanh toán từ giỏ', async ({ page, product }) => {
  64 |   await addSingleLine(page, product);
  65 |   await expect(page.getByRole('link', { name: 'Đăng nhập', exact: true })).toBeVisible();
  66 |   await checkoutButton(page).click();
  67 |   await expect(page).toHaveURL(/\/login$/);
  68 |   await expect(page.getByRole('button', { name: 'Sign In', exact: true })).toBeVisible();
  69 |   await expect(checkoutHeading(page)).toHaveCount(0);
  70 | });
  71 | 
  72 | test('TC-B08-004 tổng tiền do giỏ hàng tính và không cho nhập trực tiếp', async ({ page, customer, product }) => {
  73 |   await page.goto('/');
  74 |   await signIn(page, customer);
  75 |   await addSingleLine(page, product);
  76 |   await checkoutButton(page).click();
  77 |   await expect(checkoutHeading(page)).toBeVisible();
  78 |   await expect(page.getByText(totalText, { exact: true })).toBeVisible();
  79 | 
  80 |   // The pinned markup places the unassociated label and its field in the same group.
  81 |   const totalGroup = page.locator('label')
  82 |     .filter({ hasText: /^Tổng tiền thanh toán \(VND\):$/ })
  83 |     .locator('..');
  84 |   await expect(totalGroup).toHaveCount(1);
  85 |   const totalFields = totalGroup.locator('input:not([type="hidden"]), textarea, [contenteditable]');
  86 |   for (const field of await totalFields.all()) {
> 87 |     await expect(field).not.toBeEditable();
     |                             ^ Error: expect(locator).not.toBeEditable() failed
  88 |   }
  89 | });
  90 | 
```