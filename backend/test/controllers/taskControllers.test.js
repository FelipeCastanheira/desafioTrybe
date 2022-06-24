const sinon = require('sinon');

const { expect } = require('chai');

const taskService = require('../../../services/taskService');
const taskController = require('../../../controllers/taskController');

describe('A função getAll', () => {
  const alltasks = [
    { id: 1, name: 'martelo', quantity: 10 },
    { id: 2, name: 'traje', quantity: 20 },
    { id: 3, name: 'escudo', quantity: 30 },
  ];
  const response = {};
  const request = {};

  beforeEach(() => {
    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns(alltasks);
    sinon.stub(taskService, 'getAll')
      .resolves(alltasks);
  });

  afterEach(() => {
    taskService.getAll.restore();
  });

  it('Retorna um array', async () => {
    const data = await taskController.getAll(request, response);
    expect(data).to.be.an('array');
  });
});

describe('A função getById', () => {
  const onetask = { id: 1, name: 'martelo', quantity: 10 };
  const response = {};
  const request = {};
  beforeEach(() => {
    request.params = { id: '1' };

    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns(onetask);

    sinon.stub(taskService, 'getById')
      .resolves(onetask);
  });

  afterEach(() => {
    taskService.getById.restore();
  });

  describe('Com parâmetro 1', () => {
  
    it('Retorna um object', async () => {
      const data = await taskController.getById(request, response);
      console.log(data);
      expect(data).to.be.an('object');
    });
  });
});
