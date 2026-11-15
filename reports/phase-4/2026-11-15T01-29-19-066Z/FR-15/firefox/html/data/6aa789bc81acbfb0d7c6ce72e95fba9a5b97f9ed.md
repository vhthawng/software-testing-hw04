# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: products\create.spec.ts >> TC-C15-007 từ chối giá 0
- Location: tests\products\create.spec.ts:7:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 0
+ Received  + 1

  Array [
    "[\"Bàn phím cơ Keychron Q1\",\"4000000 ₫\"]",
+   "[\"HW04 Zero Price\",\"0 ₫\"]",
    "[\"MacBook Pro M3\",\"45000000 ₫\"]",
    "[\"Samsung Galaxy S24 Ultra\",\"28000000 ₫\"]",
    "[\"Tai nghe AirPods Pro 2\",\"6000000 ₫\"]",
    "[\"iPhone 15 Pro Max\",\"30000000 ₫\"]",
  ]
```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic [ref=f1e4]:
    - heading "EShop Admin" [level=1] [ref=f1e5]
    - list [ref=f1e6]:
      - listitem [ref=f1e7] [cursor=pointer]: Dashboard
      - listitem [ref=f1e8] [cursor=pointer]: Danh mục
      - listitem [ref=f1e9] [cursor=pointer]: Sản phẩm
      - listitem [ref=f1e10] [cursor=pointer]: Mã Giảm Giá
      - listitem [ref=f1e11] [cursor=pointer]: Đơn hàng
      - listitem [ref=f1e12] [cursor=pointer]: Người dùng
      - listitem [ref=f1e13] [cursor=pointer]: Đăng xuất
  - generic [ref=f1e15]:
    - heading "Quản lý Sản phẩm" [level=2] [ref=f1e16]
    - generic [ref=f1e17]:
      - generic [ref=f1e18]:
        - heading "📂 Import sản phẩm từ CSV" [level=3] [ref=f1e19]
        - link "Tải file mẫu (template.csv)" [ref=f1e20] [cursor=pointer]:
          - /url: data:text/csv;charset=utf-8,…
      - generic [ref=f1e21]:
        - button "Choose File" [ref=f1e22]
        - button "Import 0 sản phẩm" [disabled] [ref=f1e23]
    - generic [ref=f1e24]:
      - heading "Thêm sản phẩm mới" [level=3] [ref=f1e25]
      - generic [ref=f1e26]:
        - textbox "Tên sản phẩm" [ref=f1e27]
        - spinbutton "Giá tiền" [ref=f1e28]
        - textbox "URL Ảnh" [ref=f1e29]
        - textbox "Mô tả" [ref=f1e30]
        - combobox [ref=f1e31]:
          - option "Điện thoại" [selected]
          - option "Laptop"
          - option "Phụ kiện"
      - button "Lưu sản phẩm" [ref=f1e32] [cursor=pointer]
    - table [ref=f1e33]:
      - rowgroup [ref=f1e34]:
        - row [ref=f1e35]:
          - columnheader "Ảnh" [ref=f1e36]
          - columnheader "Tên SP" [ref=f1e37]
          - columnheader "Giá" [ref=f1e38]
          - columnheader "Hành động" [ref=f1e39]
      - rowgroup [ref=f1e40]:
        - row [ref=f1e41]:
          - cell [ref=f1e42]:
            - img "iPhone 15 Pro Max" [ref=f1e43]
          - cell "iPhone 15 Pro Max" [ref=f1e44]
          - cell "30000000 ₫" [ref=f1e45]
          - cell [ref=f1e46]:
            - button "Sửa" [ref=f1e47] [cursor=pointer]
            - button "Xóa" [ref=f1e48] [cursor=pointer]
        - row [ref=f1e49]:
          - cell [ref=f1e50]:
            - img "Samsung Galaxy S24 Ultra" [ref=f1e51]
          - cell "Samsung Galaxy S24 Ultra" [ref=f1e52]
          - cell "28000000 ₫" [ref=f1e53]
          - cell [ref=f1e54]:
            - button "Sửa" [ref=f1e55] [cursor=pointer]
            - button "Xóa" [ref=f1e56] [cursor=pointer]
        - row [ref=f1e57]:
          - cell [ref=f1e58]:
            - img "MacBook Pro M3" [ref=f1e59]
          - cell "MacBook Pro M3" [ref=f1e60]
          - cell "45000000 ₫" [ref=f1e61]
          - cell [ref=f1e62]:
            - button "Sửa" [ref=f1e63] [cursor=pointer]
            - button "Xóa" [ref=f1e64] [cursor=pointer]
        - row [ref=f1e65]:
          - cell [ref=f1e66]:
            - img "Tai nghe AirPods Pro 2" [ref=f1e67]
          - cell "Tai nghe AirPods Pro 2" [ref=f1e68]
          - cell "6000000 ₫" [ref=f1e69]
          - cell [ref=f1e70]:
            - button "Sửa" [ref=f1e71] [cursor=pointer]
            - button "Xóa" [ref=f1e72] [cursor=pointer]
        - row [ref=f1e73]:
          - cell [ref=f1e74]:
            - img "Bàn phím cơ Keychron Q1" [ref=f1e75]
          - cell "Bàn phím cơ Keychron Q1" [ref=f1e76]
          - cell "4000000 ₫" [ref=f1e77]
          - cell [ref=f1e78]:
            - button "Sửa" [ref=f1e79] [cursor=pointer]
            - button "Xóa" [ref=f1e80] [cursor=pointer]
        - row [ref=f1e81]:
          - cell [ref=f1e82]:
            - img "HW04 Zero Price" [ref=f1e83]
          - cell "HW04 Zero Price" [ref=f1e84]
          - cell "0 ₫" [ref=f1e85]
          - cell [ref=f1e86]:
            - button "Sửa" [ref=f1e87] [cursor=pointer]
            - button "Xóa" [ref=f1e88] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect, test } from '../fixtures/eshop';
  2  | import data from '../data/products.json';
  3  | import sut from '../../scripts/sut-paths.json';
  4  | import { inventory, productForm, productRow, reloadProducts, signInAdmin } from './products';
  5  | 
  6  | for (const sample of data.create) {
  7  |   test(`${sample.id} ${sample.title}`, async ({ page, admin, request }) => {
  8  |     await signInAdmin(page, admin);
  9  |     const before = await inventory(page);
  10 |     expect(before.length).toBeGreaterThan(0);
  11 |     const fields = productForm(page);
  12 |     const name = sample.name.repeat(sample.length ?? 1);
  13 |     const category = sample.category ?? data.defaultCategory;
  14 |     await fields.name.fill(name);
  15 |     await fields.price.fill(sample.price);
  16 |     await fields.category.selectOption({ label: category });
  17 |     const enteredName = await fields.name.inputValue();
  18 |     let createdId: number | undefined;
  19 |     try {
  20 |       const valid = await fields.form.evaluate(form => (form as HTMLFormElement).checkValidity());
  21 |       if (valid) {
  22 |         // In this pinned UI, submissions that pass native validation send a POST.
  23 |         const [result] = await Promise.all([
  24 |           page.waitForResponse(response =>
  25 |             new URL(response.url()).pathname === '/api/products' && response.request().method() === 'POST'),
  26 |           fields.save.click(),
  27 |         ]);
  28 |         if (result.ok()) {
  29 |           const body = await result.json();
  30 |           expect(Number.isInteger(body.id) && body.id > 0).toBe(true);
  31 |           createdId = body.id;
  32 |         }
  33 |       } else {
  34 |         await fields.save.click();
  35 |       }
  36 | 
  37 |       await reloadProducts(page);
  38 |       if (sample.accept) {
  39 |         const row = productRow(page, name);
  40 |         await expect(row).toHaveCount(1);
  41 |         await expect(row.getByRole('cell', { name: `${sample.price} ₫`, exact: true })).toBeVisible();
  42 |         await row.getByRole('button', { name: 'Sửa', exact: true }).click();
  43 |         await expect(fields.category.locator('option:checked')).toHaveText(category);
  44 |       } else if (sample.length && enteredName.length < sample.length && createdId !== undefined) {
  45 |         test.info().annotations.push({
  46 |           type: 'input-length',
  47 |           description: `UI accepted ${enteredName.length} of ${sample.length} characters`,
  48 |         });
  49 |         await expect(productRow(page, name)).toHaveCount(0);
  50 |         await expect(productRow(page, enteredName)).toHaveCount(1);
  51 |       } else {
> 52 |         expect(await inventory(page)).toEqual(before);
     |                                       ^ Error: expect(received).toEqual(expected) // deep equality
  53 |       }
  54 |     } finally {
  55 |       if (createdId !== undefined) {
  56 |         const login = await request.post(`${sut.backendURL}/api/login`, { data: admin });
  57 |         await expect(login).toBeOK();
  58 |         const { token } = await login.json();
  59 |         const cleanup = await request.delete(`${sut.backendURL}/api/products/${createdId}`, {
  60 |           headers: { Authorization: `Bearer ${token}` },
  61 |         });
  62 |         await expect(cleanup).toBeOK();
  63 |       }
  64 |     }
  65 |   });
  66 | }
  67 | 
```