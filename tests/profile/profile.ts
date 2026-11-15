import type { APIRequestContext, Page } from '@playwright/test';
import { expect, type Customer } from '../fixtures/eshop';
import { signIn } from '../fixtures/web';
import sut from '../../scripts/sut-paths.json';
import data from '../data/profile.json';

export const profileForm = (page: Page) => page.locator('main form');

export function profileFields(page: Page) {
  const form = profileForm(page);
  return {
    email: form.getByRole('textbox').nth(0),
    name: form.getByRole('textbox').nth(1),
    phone: form.getByPlaceholder('VD: 0912345678', { exact: true }),
    address: form.getByPlaceholder('Nhập địa chỉ của bạn', { exact: true }),
  };
}

export async function seedProfile(request: APIRequestContext, customer: Customer) {
  const login = await request.post(`${sut.backendURL}/api/login`, {
    data: { email: customer.email, password: customer.password },
  });
  await expect(login).toBeOK();
  const { token } = await login.json();
  const seed = await request.put(`${sut.backendURL}/api/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
    data: { name: customer.name, phone: data.baseline.phone, shipping_address: data.baseline.address },
  });
  await expect(seed).toBeOK();
}

export async function openProfile(page: Page, customer: Customer) {
  await signIn(page, customer);
  await page.getByRole('link', { name: `Chào, ${customer.name}`, exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Hồ sơ của bạn' })).toBeVisible();
  await expect(profileFields(page).email).toHaveValue(customer.email);
}

export async function submitProfile(page: Page) {
  // Dismiss the alert and wait for its outcome before reloading the profile.
  const dialog = page.waitForEvent('dialog', { timeout: 5_000 }).then(async alert => {
    const message = alert.message();
    await alert.dismiss();
    return message;
  });
  const [message] = await Promise.all([dialog, page.getByRole('button', { name: 'Cập nhật', exact: true }).click()]);
  return message;
}

export async function expectPersisted(page: Page, expected: { name: string; phone: string; address: string }) {
  await page.reload({ waitUntil: 'domcontentloaded' });
  const fields = profileFields(page);
  await expect.soft(fields.name, 'Tên đã lưu').toHaveValue(expected.name);
  await expect.soft(fields.phone, 'Số điện thoại đã lưu').toHaveValue(expected.phone);
  await expect.soft(fields.address, 'Địa chỉ đã lưu').toHaveValue(expected.address);
}
