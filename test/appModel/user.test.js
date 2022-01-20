import sinon from 'sinon';
import { expect } from 'chai';
import { myKnex } from '../../database/knexfile.js';
import { folders } from '../../database/models/folder.js';
import { openFolder } from '../../lib/helper/workWithFilesAndFolders/openFolder.js';

describe('Folders model test', () => {
  afterEach(() => {
    sinon.verifyAndRestore();
  });
  it('Test user method selectFirst', async () => {
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
    const actual = await folders.selectFirst();
    expect(actual).to.be.deep.eq(mResponse);
  });
  it('Test user method selectAll', async () => {
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
    const actual = await folders.selectAll();
    expect(actual).to.be.deep.eq(mResponse);
  });
  it('Test user method create', async () => {
    const mResponse = [1];
    const insertStub = sinon.stub().returnsThis();
    const thenStub = sinon.stub().resolves(mResponse);
    sinon.stub(myKnex, 'from').callsFake(() => {
      return {
        insert: insertStub,
        then: thenStub,
      };
    });
    const actual = await folders.create();
    expect(actual).to.be.deep.eq(mResponse);
  });
});
describe('Test folder helper', () => {
  it('Test openFolder', async () => {
    const mResponse = {
      files: {},
      subFolders: {},
    };
    const selectStub = sinon.stub().returnsThis();
    const whereStub = sinon.stub().returnsThis();
    const thenStub = sinon.stub().resolves({});

    sinon.stub(myKnex, 'from').callsFake(() => {
      return {
        select: selectStub,
        where: whereStub,
        then: thenStub,
      };
    });
    const actual = await openFolder(1, 7);
    expect(actual).to.be.deep.eq(mResponse);
  });
});
