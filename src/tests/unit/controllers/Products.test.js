const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const { getAll, createProduct } = require('../../../controllers/Products');
const LoginServices = require('../../../services/Products');


describe('Tentando o arquivo Controllers/Products da função getAll', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função getAll com sucesso', async () => {
    const req = {
      email: 'test@test.com'
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    }

    sinon.stub(LoginServices, 'getAll').resolves([]);

    await getAll(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith([])).to.be.equal(true);
    expect(LoginServices.getAll.calledWith(req.email)).to.be.equal(true);
  });
});

describe('Tentando o arquivo Controllers/Products da função createProduct', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função createProduct corretamente ', async () => {
    const req = {
      body: {
        name: 'test',
        price: 'test',
        description: 'test',
      },
      email: 'test@test.com',
    }

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    }

    sinon.stub(LoginServices, 'createProduct').resolves({});

    await createProduct(req, res);

    const email = req.email;

    expect(res.status.calledWith(201)).to.be.equal(true);
    expect(res.json.calledWith({})).to.be.equal(true);
    expect(LoginServices.createProduct.calledWith({...req.body, email})).to.be.equal(true);
  });
});