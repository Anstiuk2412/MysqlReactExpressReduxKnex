import { expect } from 'chai';
import sinon from 'sinon';
import { user } from '../../database/models/user.js';
import { verify } from '../../lib/passport/passport.js';

describe('user db tests', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should return non-existed user', async () => {
    sinon.stub(user, 'selectFirst').resolves(false);
    const done = (val, value) => {
      return value;
    };
    const check = await verify('', done);
    expect(check).to.be.false;
  });

  it('should return existed user', async () => {
    const fakeUser = { id: 1 };
    sinon.stub(user, 'selectFirst').resolves(fakeUser);
    const done = (val, value) => {
      return value;
    };
    const check = await verify('', done);
    expect(check).to.be.deep.equal({ id: 1 });
  });
});
