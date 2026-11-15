import { expect, test } from '../fixtures/eshop';
import data from '../data/profile.json';
import { expectPersisted, openProfile, profileFields, seedProfile, submitProfile } from './profile';

for (const { id, phone, title } of data.rejected) {
  test(`${id} ${title}`, async ({ page, request, customer }) => {
    await seedProfile(request, customer);
    await openProfile(page, customer);
    await expect(profileFields(page).phone).toHaveValue(data.baseline.phone);
    await profileFields(page).phone.fill(phone);
    // The dialog signals completion in this SUT. The stored snapshot is the acceptance criterion.
    expect.soft(await submitProfile(page)).not.toBe('Cập nhật thành công!');
    await expectPersisted(page, { ...data.baseline, name: customer.name });
  });
}
