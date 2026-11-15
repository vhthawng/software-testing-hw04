import sut from '../../scripts/sut-paths.json';
import { expect, test } from '../fixtures/eshop';

test('EShop serves the Web and Admin using the local test data', async ({
  page,
  browser,
  customer,
  admin,
  product,
}) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { name: 'Danh sách sản phẩm' })).toBeVisible();
  await expect(page.getByRole('heading', { name: product.name, exact: true })).toBeVisible();

  await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
  // The login labels are unassociated and both fields use input[type=text].
  const loginFields = page.locator('form').getByRole('textbox');
  await expect(loginFields).toHaveCount(2);
  await loginFields.nth(0).fill(customer.email);
  await loginFields.nth(1).fill(customer.password);
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await expect(page.getByRole('link', { name: `Chào, ${customer.name}`, exact: true })).toBeVisible();

  const adminContext = await browser.newContext();
  try {
    const adminPage = await adminContext.newPage();
    await adminPage.goto(sut.adminURL, { waitUntil: 'domcontentloaded' });
    await adminPage.getByPlaceholder('Email', { exact: true }).fill(admin.email);
    await adminPage.getByPlaceholder('Password', { exact: true }).fill(admin.password);
    await adminPage.getByRole('button', { name: 'Login', exact: true }).click();
    await expect(adminPage.getByRole('heading', { name: 'EShop Admin' })).toBeVisible();
    await adminPage.getByRole('listitem').filter({ hasText: /^Sản phẩm$/ }).click();
    await expect(adminPage.getByRole('row').filter({ hasText: product.name })).toHaveCount(1);
  } finally {
    await adminContext.close();
  }
});
