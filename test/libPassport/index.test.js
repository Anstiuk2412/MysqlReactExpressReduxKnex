import { expect } from 'chai';
import sinon from 'sinon';
import { verify } from '../../lib/passport/passport.js';
import { myKnex } from '../../database/knexfile.js';

describe('User db passport tests', () => {
  const done = (val, value) => {
    return value;
  };
  afterEach(() => {
    sinon.verifyAndRestore();
  });
  it('Should return user', async () => {
    const payload = {
      id: 1,
    };
    const selectStub = sinon.stub().returnsThis();
    const whereStub = sinon.stub().returnsThis();
    const firstStub = sinon.stub().returnsThis();
    const thenStub = sinon.stub().resolves({ id: 1 });

    sinon.stub(myKnex, 'from').callsFake(() => {
      return {
        select: selectStub,
        where: whereStub,
        first: firstStub,
        then: thenStub,
      };
    });
    const check = await verify(payload, done);
    expect(check).to.be.deep.equal({ user_id: 1 });
  });

  it('Should return non-existed user', async () => {
    const selectStub = sinon.stub().returnsThis();
    const whereStub = sinon.stub().returnsThis();
    const firstStub = sinon.stub().returnsThis();
    const thenStub = sinon.stub().resolves();

    sinon.stub(myKnex, 'from').callsFake(() => {
      return {
        select: selectStub,
        where: whereStub,
        first: firstStub,
        then: thenStub,
      };
    });
    const check = await verify('', done);
    expect(check).to.be.false;
  });
});
