const sinon = require('sinon');

const { expect } = require('chai');

const connection = require('../../../models/connection');
const taskModel = require('../../../models/taskModel');

describe('A função getAll', () => {
  const alltasks = [
    { id: 1, name: 'martelo', quantity: 10 },
    { id: 2, name: 'traje', quantity: 20 },
    { id: 3, name: 'escudo', quantity: 30 },
  ];

  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves([alltasks]);
  });

  afterEach(() => {
    connection.execute.restore();
  });

  it('Retorna um array', async () => {
    const response = await taskModel.getAll();
    expect(response).to.be.an('array');
  });
});

describe('A função getById', () => {
  const onetask = { id: 1, name: 'martelo', quantity: 10 };

  beforeEach(() => {
    sinon.stub(taskModel, 'getById').resolves(onetask);
  });

  afterEach(() => {
    taskModel.getById.restore();
  });
  describe('Com parâmetro 1', () => {
  
    it('Retorna um object', async () => {
      const response = await taskModel.getById(1);
      console.log(response);
      expect(response).to.be.an('object');
    });
  });
});
