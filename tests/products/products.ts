import type { Page } from '@playwright/test';
import { expect } from '../fixtures/eshop';
import sut from '../../scripts/sut-paths.json';

export async function openProducts(page: Page) {
  await expect(page.getByRole('heading', { name: 'EShop Admin', exact: true })).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: /^Sản phẩm$/ }).click();
  await expect(page.getByRole('heading', { name: 'Quản lý Sản phẩm', exact: true })).toBeVisible();
  await expect(page.getByRole('combobox').locator('option').first()).toBeAttached();
}

export async function signInAdmin(page: Page, admin: { email: string; password: string }) {
  await page.goto(sut.adminURL, { waitUntil: 'domcontentloaded' });
  await page.getByPlaceholder('Email', { exact: true }).fill(admin.email);
  await page.getByPlaceholder('Password', { exact: true }).fill(admin.password);
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await openProducts(page);
}

export const productRow = (page: Page, name: string) =>
  page.getByRole('row').filter({ has: page.getByRole('cell', { name, exact: true }) });

export function productForm(page: Page) {
  const form = page.locator('form').filter({ has: page.getByPlaceholder('Tên sản phẩm') });
  return {
    form,
    name: form.getByPlaceholder('Tên sản phẩm'),
    price: form.getByPlaceholder('Giá tiền'),
    category: form.getByRole('combobox'),
    save: form.getByRole('button', { name: 'Lưu sản phẩm', exact: true }),
  };
}

export async function inventory(page: Page) {
  const cells = await page.locator('table tbody tr').evaluateAll(rows => rows.map(row => ({
    name: row.children[1].textContent?.trim() ?? '',
    price: row.children[2].textContent?.trim() ?? '',
  })));
  return cells.map(({ name, price }) => JSON.stringify([name, price])).sort();
}

export async function reloadProducts(page: Page) {
  await page.reload({ waitUntil: 'domcontentloaded' });
  await openProducts(page);
}
