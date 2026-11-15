import { randomUUID } from 'node:crypto';
import { expect, test as base } from '@playwright/test';
import sut from '../../scripts/sut-paths.json';
import data from '../data/smoke.json';

type Credentials = { email: string; password: string };
export type Customer = Credentials & { name: string };
export type Product = { id: number; name: string };
type Category = { id: number; name: string };

export const test = base.extend<{
  customer: Customer;
  admin: Credentials;
  product: Product;
  productPrice: number;
  createCustomer: () => Promise<Customer>;
  createProduct: (price: number) => Promise<Product>;
}>({
  productPrice: [data.product.price, { option: true }],
  createCustomer: async ({ request }, use) => {
    await use(async () => {
      const customer = {
        name: data.accountName,
        email: `hw04-${randomUUID()}@example.test`,
        password: randomUUID(),
      };
      const registration = await request.post(`${sut.backendURL}/api/register`, { data: customer });
      await expect(registration, 'Create a local test customer').toBeOK();
      return customer;
    });
  },
  customer: async ({ createCustomer }, use) => { await use(await createCustomer()); },
  admin: async ({}, use) => {
    await use(data.admin);
  },
  createProduct: async ({ admin, request }, use) => {
    const login = await request.post(`${sut.backendURL}/api/login`, { data: admin });
    await expect(login, 'Sign in as the seeded demo admin').toBeOK();
    const { token } = await login.json();
    const headers = { Authorization: `Bearer ${token}` };

    const categories = await request.get(`${sut.backendURL}/api/categories`);
    await expect(categories).toBeOK();
    const availableCategories: Category[] = await categories.json();
    const category = availableCategories.find(({ name }) => name === data.product.categoryName);
    if (!category) throw new Error(`Missing seeded category ${data.product.categoryName}`);

    const ids: number[] = [];
    try {
      await use(async price => {
        const name = `${data.product.namePrefix} ${randomUUID()}`;
        const creation = await request.post(`${sut.backendURL}/api/products`, {
          headers,
          data: { name, price, category_id: category.id },
        });
        await expect(creation, 'Create a local test product').toBeOK();
        const { id } = await creation.json();
        if (!Number.isInteger(id) || id <= 0) throw new Error('Missing test product ID');
        ids.push(id);
        return { id, name };
      });
    } finally {
      for (const id of ids) {
        const deletion = await request.delete(`${sut.backendURL}/api/products/${id}`, { headers });
        if (deletion.status() !== 404) {
          await expect(deletion, 'Remove the test product by ID').toBeOK();
        }
      }
    }
  },
  product: async ({ createProduct, productPrice }, use) => { await use(await createProduct(productPrice)); },
});

export { expect };
