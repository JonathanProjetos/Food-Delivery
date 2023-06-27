const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const productModel = require('../../../models/productModel');
const { getAll, createProduct } = require('../../../services/Products');

describe('Tentando o arquivo Services/Products da função getAll', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('deve retornar todos os produtos', async () => {
    const email = 'test@test.com';

    const result = [
      {
        name: 'hambuguer',
        price: '50',
        description: 'A big',
      },
      {
        name: 'sorvete',
        price: '15',
        description: 'A small',
      },
    ]

    sinon.stub(productModel, 'find').resolves(result);

    expect(await getAll(email)).to.deep.equal(result);
  });

  it('deve retornar um erro. Caso não tenha um email fornecido', async () => {
    const email = undefined;

    expect(await getAll(email).catch((err) => err.message)).to.be.equal('401|Unauthorized');
  });
});

describe('Tentando o arquivo Services/Products da função createProduct', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('deve criar um novo produto', async () => {

    const data = {
      name: 'pizza',
      price: 10,
      description: 'A small',
      email: 'test@test.com'
    }

    const result = {
      name: 'pizza',
      price: 10,
      description: 'A small',
    }

    sinon.stub(productModel, 'find').resolves([]);
    sinon.stub(productModel, 'create').resolves(result);

    expect(await createProduct({ ...data })).to.deep.equal(result);
  });

  it('deve retornar um erro. Caso já tenha um produto cadastrado com o nome fornecido', async () => {
    const data = [{
      name: 'pizza',
      price: 10,
      description: 'A small',
      email: 'test@test.com'
    }]

    const result = {
      name: 'pizza',
      price: 10,
      description: 'A small',
    }


    sinon.stub(productModel, 'find').resolves(data);
    sinon.stub(productModel, 'create').resolves(result);

    expect(await createProduct(data[0]).catch((err) => err.message)).to.be.equal('409|Product already exists');
  });

  it('deve retornar um erro. Caso não tenha um email fornecido', async () => {
    const data = {
      name: 'pizza',
      price: 10,
      description: 'A small',
      email: null
    }

    expect(await createProduct(data).catch((err) => err.message)).to.be.equal('401|Unauthorized');
  });
})