import { expect, test } from '../fixtures/eshop';
import data from '../data/profile.json';
import { expectPersisted, openProfile, profileFields, profileForm, seedProfile, submitProfile } from './profile';

test('TC-A04-007 cập nhật họ tên, giữ số và địa chỉ', async ({ page, request, customer }) => {
  await seedProfile(request, customer);
  await openProfile(page, customer);
  await profileFields(page).name.fill(data.updatedName);
  expect.soft(await submitProfile(page)).toBe('Cập nhật thành công!');
  await expectPersisted(page, { ...data.baseline, name: data.updatedName });
});

test('TC-A04-008 cập nhật địa chỉ, giữ tên và số', async ({ page, request, customer }) => {
  await seedProfile(request, customer);
  await openProfile(page, customer);
  await profileFields(page).address.fill(data.updatedAddress);
  expect.soft(await submitProfile(page)).toBe('Cập nhật thành công!');
  await expectPersisted(page, { ...data.baseline, name: customer.name, address: data.updatedAddress });
});

test('TC-A04-009 email chỉ đọc và giữ nguyên sau tải lại', async ({ page, customer }) => {
  await openProfile(page, customer);
  const email = profileFields(page).email;
  await expect(email).toHaveValue(customer.email);
  await expect(email).not.toBeEditable();
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(email).toHaveValue(customer.email);
});

test('TC-A04-015 khách không có form cập nhật hồ sơ', async ({ page }) => {
  await page.goto('/profile');
  await expect(page.getByText('Vui lòng đăng nhập', { exact: true })).toBeVisible();
  await expect(profileForm(page)).toHaveCount(0);
});

test('TC-A04-016 sửa hồ sơ A không đổi hồ sơ B trong phiên riêng', async ({
  page, request, browser, customer, createCustomer,
}) => {
  const other = await createCustomer();
  await seedProfile(request, customer);
  await seedProfile(request, other);
  await openProfile(page, customer);
  await profileFields(page).name.fill(data.updatedName);
  expect.soft(await submitProfile(page)).toBe('Cập nhật thành công!');
  await expectPersisted(page, { ...data.baseline, name: data.updatedName });

  const otherContext = await browser.newContext({ baseURL: new URL(page.url()).origin });
  try {
    const otherPage = await otherContext.newPage();
    await openProfile(otherPage, other);
    const fields = profileFields(otherPage);
    await expect(fields.name).toHaveValue(other.name);
    await expect(fields.phone).toHaveValue(data.baseline.phone);
    await expect(fields.address).toHaveValue(data.baseline.address);
  } finally {
    await otherContext.close();
  }
});
