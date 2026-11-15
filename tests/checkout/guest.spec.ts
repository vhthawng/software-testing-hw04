import { expect, test } from '../fixtures/eshop';

test('TC-B08-018 chặn khách truy cập trực tiếp trang thanh toán', async ({ page }) => {
  await page.goto('/checkout');
  const login = page.getByRole('button', { name: 'Sign In', exact: true });
  const confirm = page.getByRole('button', { name: 'Xác Nhận Thanh Toán', exact: true });
  await expect(login.or(confirm)).toBeVisible();
  if (await confirm.isVisible()) {
    // The pinned checkout renders the button and delegates authentication to the server.
    page.once('dialog', dialog => dialog.dismiss());
    const [response] = await Promise.all([
      page.waitForResponse(result =>
        new URL(result.url()).pathname === '/api/checkout' && result.request().method() === 'POST'),
      confirm.click(),
    ]);
    expect([401, 403]).toContain(response.status());
  } else {
    await expect(page).toHaveURL(/\/login$/);
  }
  await expect(page.getByRole('heading', { name: 'Thanh toán thành công!' })).toHaveCount(0);
});
