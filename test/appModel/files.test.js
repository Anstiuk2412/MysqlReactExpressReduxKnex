import sinon from 'sinon';
import { expect } from 'chai';
import { myKnex } from '../../database/knexfile.js';
import { files } from '../../database/models/file.js';

describe('File model test', () => {
  afterEach(() => {
    sinon.verifyAndRestore();
  });
  it('Test files method selectFirst', async () => {
    const mResponse = { id: 1 };
    const selectStub = sinon.stub().returnsThis();
    const whereStub = sinon.stub().returnsThis();
    const thenStub = sinon.stub().resolves(mResponse);

    sinon.stub(myKnex, 'from').callsFake(() => {
      return {
        select: selectStub,
        where: whereStub,
        then: thenStub,
      };
    });
    const actual = await files.selectAll();
    expect(actual).to.be.deep.eq(mResponse);
  });
});
