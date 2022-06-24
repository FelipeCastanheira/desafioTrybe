const sinon = require('sinon');

const { expect } = require('chai');

const taskModel = require('../../../models/taskModel');
const taskService = require('../../../services/taskService');

describe('A função getAll', () => {
  const alltasks = [
    { id: 1, name: 'martelo', quantity: 10 },
    { id: 2, name: 'traje', quantity: 20 },
    { id: 3, name: 'escudo', quantity: 30 },
  ];

  beforeEach(() => {
    sinon.stub(taskModel, 'getAll').resolves(alltasks);
  });

  afterEach(() => {
    taskModel.getAll.restore();
  });

  it('Retorna um array', async () => {
    const response = await taskService.getAll();
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
      const response = await taskService.getById(1);
      console.log(response);
      expect(response).to.be.an('object');
    });
  });
});

describe('A função addOne', () => {
  const alltasks = [
    { id: 1, name: 'martelo', quantity: 10 },
    { id: 2, name: 'traje', quantity: 20 },
    { id: 3, name: 'escudo', quantity: 30 },
  ];

  beforeEach(() => {
    sinon.stub(taskModel, 'getAll').resolves(alltasks);
    sinon.stub(taskModel, 'addOne').resolves(alltasks[0]);
  });

  afterEach(() => {
    taskModel.getAll.restore();
    taskModel.addOne.restore();
  });

  it('Retorna um objeto', async () => {
    const [name, quantity] = ['uva', 7];
    const response = await taskService.addOne({ name, quantity });
    expect(response).to.be.an('object');
  });
});
