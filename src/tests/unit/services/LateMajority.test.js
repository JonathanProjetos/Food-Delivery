const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const userModel = require('../../../models/userModel');
const orderModel = require('../../../models/orderModel');
const { 
  createOrder,
  getOrders,
  deleteOrder,
  deleteProductOrder,
  updateOrder,
  updateProductOrder
} = require('../../../services/LateMajority');


describe('Testando o arquivo Services/LateMajority da função createOrder', () => {
  afterEach(() => {
    sinon.restore();
  })

  it('deve retornar o dado cadastrado', async () => {
    const emailTest = 'test@test.com'

    const data = {
      name: 'jonathan',
      address: 'rua teste',
      phone: '123456789',
      email: emailTest,
      methodPayment: 'dinheiro',
      orders: [{  
        name: 'pizza',
        price: 10,
        quantity: 5
      }]
    }

    const result = {
      name: 'jonathan',
      address: 'rua teste',
      phone: '123456789',
      email: emailTest,
      methodPayment: 'dinheiro',
      orders: [{  
        name: 'pizza',
        price: 10,
        quantity: 5
      }]
    }


    sinon.stub(userModel, 'find').resolves([]);
    sinon.stub(userModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'create').resolves(data);

    expect(await createOrder({ ...data })).to.deep.equal(result);
  })

  it('deve retornar um erro. Caso já tenha uma pessoa cadastrada como email fornecido', async() => {
    
    const emailTest = undefined

    const data = {
      name: 'jonathan',
      address: 'rua teste',
      phone: '123456789',
      email: emailTest,
      methodPayment: 'dinheiro',
      orders: [{  
        name: 'pizza',
        price: 10,
        quantity: 5
      }]
    }


    sinon.stub(userModel, 'find').resolves([]);
    sinon.stub(userModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'create').resolves(undefined);

    let error;
    try {
      await createOrder({ ...data });
    } catch (err) {
      error = err.message;
    }
  
    expect(error).to.be.equal('401|Unauthorized');
  });
  
});

describe('Testando o arquivo Services/LateMajority da função getOrders', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve retorna os pedidos com sucesso', async () => {
    
    const emailTest = 'test@test.com';

    const data = [{
      name: 'jonathan',
      address: 'rua teste',
      phone: '123456789',
      methodPayment: 'dinheiro',
      orders: [{  
        name: 'pizza',
        price: 10,
        quantity: 5
      }]
    }]

    sinon.stub(userModel, 'findOne').resolves(data[0]);
    sinon.stub(orderModel, 'find').resolves(data);

    expect(await getOrders(emailTest)).to.deep.equal(data);
  })

  it('Deve retorna um erro caso não tenha o usuário vinculado ao email', async () => {
    const emailTest = 'test@test.com';

    sinon.stub(userModel, 'findOne').resolves(null);

    expect(await getOrders(emailTest).catch((err) => err.message)).to.be.equal('404|User not found');
  });
});

describe('Testando o arquivo Services/LateMajority da função deleteOrder', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve deletar o pedido com sucesso', async () => {
    const emailTest = 'test@test.com';
    const id = '123456789';

    const data = {
      acknowledged: true,
      deletedCount: 1
    }

    sinon.stub(userModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'deleteOne').resolves(data);

    const result = await deleteOrder({ email: emailTest, id });

    expect(result).to.deep.equal(data);
    expect(result).to.haveOwnProperty('deletedCount');
  });

  it('Deve retornar um erro caso não tenha o usuário vinculado ao email', async () => {
    const email = 'test@test.com';
    const id = '123456789';

    sinon.stub(userModel, 'findOne').resolves(null);

    expect(await deleteOrder({ email, id }).catch((err) => err.message)).to.be.equal('404|User not found');
  });

  it('Deve retorna um erro caso não tenha pedidos vinculado ao email do usuário', async () => {
    const email = 'test@test.com';
    const id = '123456789';

    sinon.stub(userModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'findOne').resolves(null);

    expect(await deleteOrder({ email, id }).catch((err) => err.message)).to.be.equal('404|Order not found');
  });

});

describe('Testando o arquivo Services/LateMajority da função deleteProductOrder', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve deletar o produto do pedido com sucesso', async () => {
    const email = 'test@test.com';
    const id = '123456789';

    sinon.stub(userModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'updateMany').resolves({nModified: 1});

    const result = await deleteProductOrder({ email, id });

    expect(result).to.deep.equal({message: 'Product deleted'});
    expect(result).to.haveOwnProperty('message');
  });

  it('Deve retornar um erro caso não tenha o usuário vinculado ao email', async () => {
    const email = 'test@test.com';
    const id = '123456789';

    sinon.stub(userModel, 'findOne').resolves(null);

    expect(await deleteProductOrder({ email, id }).catch((err) => err.message)).to.be.equal('404|User not found');
  });

  it('Deve retornar um erro caso o pedido vinculado ao email do usuário não exista', async () => {
    const email = 'test@test.com';
    const id = '123456789';

    sinon.stub(userModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'updateMany').resolves({nModified: 0});

    expect(await deleteProductOrder({ email, id }).catch((err) => err.message)).to.be.equal('404|Product not found');
  });
});

describe('Testando o arquivo Services/LateMajority da função updateOrder', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve atualizar o pedido com sucesso', async () => {
    const email = 'test@test.com';
    const id = '123456';

    const data = {
      name: 'jonathan',
      address: 'rua teste',
      phone: '123456789',
      methodPayment: 'dinheiro',
      orders: [{  
        name: 'pizza',
        price: 10,
        quantity: 5
      }]
    }

    sinon.stub(userModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'findOneAndUpdate').resolves(data);

    expect(await updateOrder(data, id, email)).to.deep.equal(data);
  });

  it('Deve retornar um erro caso não tenha o usuário vinculado ao email', async () => {
    const email = null;
    const id = '123456';

    const data = {
      name: 'jonathan',
      address: 'rua teste',
      phone: '123456789',
      methodPayment: 'dinheiro',
      orders: [{  
        name: 'pizza',
        price: 10,
        quantity: 5
      }]
    }

    expect(await updateOrder(data, id, email).catch((err) => err.message)).to.be.equal('401|Unauthorized');
  });

  it('Deve retornar um erro caso o pedido vinculado ao email do usuário não exista', async () => {
    const email = 'test@test.com';
    const id = '123456';

    const data = {
      name: 'jonathan',
      address: 'rua teste',
      phone: '123456789',
      methodPayment: 'dinheiro',
      orders: [{  
        name: 'pizza',
        price: 10,
        quantity: 5
      }]
    }

    sinon.stub(userModel, 'findOne').resolves(null);

    expect(await updateOrder(data, id, email).catch((err) => err.message)).to.be.equal('404|User not found');
  });
});

describe('Testando o arquivo Services/LateMajority da função updateProductOrder', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve atualizar o produto do pedido com sucesso', async () => {
    const email = 'test@test.com';
    const id = '123456789';

    const data = {  
      name: 'pizza',
      price: 10,
      quantity: 5
    }

    const dataResponse = {
      name: 'jonathan',
      address: 'rua teste',
      phone: '123456789',
      methodPayment: 'dinheiro',
      orders: [{  
        name: 'pizza',
        price: 10,
        quantity: 5
      }]
    }

    sinon.stub(userModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'findOneAndUpdate').resolves(dataResponse);

    expect(await updateProductOrder(data, id, email)).to.deep.equal(dataResponse);
  });

  it('Deve retornar um erro caso não tenha o usuário vinculado ao email', async () => {
    const email = 'test@test.com';
    const id = '123456789';

    const data = {  
      name: 'pizza',
      price: 10,
      quantity: 5
    }
    sinon.stub(userModel, 'findOne').resolves(null);

    expect(await updateProductOrder(data, id, email).catch((err) => err.message)).to.be.equal('401|Unauthorized');
  });

  it('Deve retornar um erro caso o pedido vinculado ao email do usuário não exista', async () => {
    const email = 'test@test.com';
    const id = '123456789';

    const data = {  
      name: 'pizza',
      price: 10,
      quantity: 5
    }

    sinon.stub(userModel, 'findOne').resolves({});
    sinon.stub(orderModel, 'findOne').resolves(null);

    expect(await updateProductOrder(data, id, email).catch((err) => err.message)).to.be.equal('404|Order not found');
  });
});