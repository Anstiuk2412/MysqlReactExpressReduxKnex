import { user } from '../../database/models/user.js';
import sinon from 'sinon';
import { expect } from 'chai';

describe('User model test', () => {
  it('Test user method selectFirst', async () => {
    const fakeUser = { id: 1 };
    sinon.stub(user, 'selectFirst').resolves(fakeUser);
    const res = await user.selectFirst();
    expect(res).to.be.deep.equal({ id: 1 });
    sinon.assert.calledOnce(user.selectFirst);
  });
  it('Test user method selectFirst', async () => {
    const fakeUser = { id: 1 };
    sinon.stub(user, 'save').resolves(fakeUser);
    const res = await user.save();
    expect(res).to.be.deep.equal({ id: 1 });
    sinon.assert.calledOnce(user.save);
  });
});
