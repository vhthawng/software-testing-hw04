import type { Page } from '@playwright/test';
import { expect, type Customer } from './eshop';

export async function signIn(page: Page, customer: Customer) {
  await page.goto('/login', { waitUntil: 'domcontentloaded' });
  // Both text fields in the pinned login form have unassociated labels.
  const fields = page.locator('form').getByRole('textbox');
  await expect(fields).toHaveCount(2);
  await fields.nth(0).fill(customer.email);
  await fields.nth(1).fill(customer.password);
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await expect(page.getByRole('link', { name: `Chào, ${customer.name}`, exact: true })).toBeVisible();
}
