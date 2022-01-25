import sinon from 'sinon';
import { expect } from 'chai';
import { myKnex } from '../../database/knexfile.js';
import { user } from '../../database/models/user.js';

describe('User model test', () => {
  afterEach(() => {
    sinon.verifyAndRestore();
  });
  it('Test users method selectFirst', async () => {
    const mResponse = { id: 1 };
    const selectStub = sinon.stub().returnsThis();
    const whereStub = sinon.stub().returnsThis();
    const firstStub = sinon.stub().returnsThis();
    const thenStub = sinon.stub().resolves(mResponse);

    sinon.stub(myKnex, 'from').callsFake(() => {
      return {
        select: selectStub,
        where: whereStub,
        first: firstStub,
        then: thenStub,
      };
    });
    const actual = await user.selectFirst();
    expect(actual).to.be.deep.eq(mResponse);
  });
  it('Test users method save', async () => {
    const mResponse = [1];
    const insertStub = sinon.stub().returnsThis();
    const whereStub = sinon.stub().returnsThis();
    const updateStub = sinon.stub().returnsThis();
    const thenStub = sinon.stub().resolves(mResponse);
    sinon.stub(myKnex, 'from').callsFake(() => {
      return {
        insert: insertStub,
        where: whereStub,
        update: updateStub,
        then: thenStub,
      };
    });
    const actual = await user.save({ id: 1 });
    expect(actual).to.be.deep.eq(mResponse);
  });
});
