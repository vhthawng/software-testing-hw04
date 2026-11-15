import { expect, test } from '../fixtures/eshop';
import data from '../data/profile.json';
import { expectPersisted, openProfile, profileFields, seedProfile, submitProfile } from './profile';

for (const { id, phone, title } of data.accepted) {
  test(`${id} ${title}`, async ({ page, request, customer }) => {
    await seedProfile(request, customer);
    await openProfile(page, customer);
    await profileFields(page).phone.fill(phone);
    expect.soft(await submitProfile(page)).toBe('Cập nhật thành công!');
    await expectPersisted(page, { ...data.baseline, name: customer.name, phone });
  });
}
