import { comparePass, createHash, createToken } from '../../lib/auth/auth.js';
import assert from 'assert';

describe('Password comparison function works correctly', () => {
  it("The password comparison function returns true if the encrypted password is equal to the user's password", async () => {
    const hashedPassword = await createHash('123');
    const requestValue = await comparePass('123', hashedPassword);
    assert.equal(requestValue, true);
  });
  it("The password comparison function returns false if the encrypted password isn't equal to the user's password", async () => {
    const hashedPassword = await createHash('12');
    const requestValue = await comparePass('123', hashedPassword);
    assert.equal(requestValue, false);
  });
});

describe('Create hash function works correctly', () => {
  it('Create hash function returns type string', async () => {
    const requestValue = await createHash('password123');
    assert.equal(typeof requestValue === 'string', true);
  });
  it('Function create a hash without input returns an error', async () => {
    await assert.rejects(async () => await createHash());
  });
});

describe('Create token function works correctly', () => {
  it('Create token function returns type object', () => {
    const requestValue = createToken({ id: 1245135 });
    assert.equal(typeof requestValue === 'string', true);
  });
  it('Function create token without input returns an error', async () => {
    await assert.rejects(async () => await createToken());
  });
});
