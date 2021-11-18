import { expect } from 'chai';
import sinon from 'sinon';
import { user } from '../../database/models/user.js';
import { verify } from '../../lib/passport/passport.js';

describe('User db passport tests', () => {
  const done = (val, value) => {
    return value;
  };
  afterEach(() => {
    sinon.restore();
  });
  it('Should return non-existed user', async () => {
    sinon.stub(user, 'selectFirst').resolves(false);
    const check = await verify('', done);
    expect(check).to.be.false;
  });

  it('Should return existed user', async () => {
    const fakeUser = { id: 1 };
    sinon.stub(user, 'selectFirst').resolves(fakeUser);

    const check = await verify('', done);
    expect(check).to.be.deep.equal({ id: 1 });
  });
});
