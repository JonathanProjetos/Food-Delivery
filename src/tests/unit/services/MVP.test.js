const { expect, use } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const { createOrder } = require('../../../services/MVP');
const userModel = require('../../../models/userModel');
const orderModel = require('../../../models/orderModel');


describe('Tentando o retorno da função createOrder', () => {
  afterEach(() => {
    sinon.restore();
  })

  it('deve retornar o dado cadastrado', async () => {
    const data = {
      name: 'jonathan',
      address: 'rua teste',
      phone: '123456789',
      methodPayment: 'dinheiro',
      orders: [{  
        name: 'pizza',
        price: 10,
        quantity: 2
      }]
    }

    const emailTest = 'test@test.com'

    sinon.stub(userModel, 'find').resolves([]);
    sinon.stub(userModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'create').resolves(data);

    expect(await createOrder({ body: data, email: emailTest })).to.deep.equal(data);
  })

  it('deve retornar um erro. Caso já tenha uma pessoa cadastrada como email fornecido', async() => {
    const data = {
      name: 'jonathan',
      address: 'rua teste',
      phone: '123456789',
      methodPayment: 'dinheiro',
      orders: [{  
        name: 'pizza',
        price: 10,
        quantity: 2
      }]
    }

    const emailTest = undefined

    sinon.stub(userModel, 'find').resolves([]);
    sinon.stub(userModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'create').resolves(undefined);

    let error;
    try {
      await createOrder({ body: data, email: emailTest });
    } catch (err) {
      error = err.message;
    }
  
    expect(error).to.be.equal('401|Unauthorized');
  });

  it('deve retornar um erro ao exceder a quantidade máxima de usuários cadastrados', async () => {
    const data = {
      name: 'jonathan',
      address: 'rua teste',
      phone: '123456789',
      methodPayment: 'dinheiro',
      orders: [{
        name: 'pizza',
        price: 10,
        quantity: 2
      }]
    }
  
    const emailTest = 'test@test.com';
  
    sinon.stub(userModel, 'find').resolves(new Array(101)); 
    sinon.stub(userModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'create').resolves(data);
  
    let error;
    try {
      await createOrder({ body: data, email: emailTest });
    } catch (err) {
      error = err.message;
    }
  
    expect(error).to.be.equal('429|Too many requests');
  });
});