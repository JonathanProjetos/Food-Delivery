const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const MVPServices = require('../../../services/MVP');
const { 
  createOrder,
  getOrders,
  deleteOrder,
  deleteProductOrder,
  updateOrder,
  updateProductOrder,
 } = require('../../../controllers/MVP');
const { dataresponse, dataOrder } = require('../../mocks/responseDataOrder')

describe('Tentando o arquivo Controllers/MVP da função createOrder', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função createOrder com sucesso', async () => {
      const req = {
        body: {
          name: 'Jeniffer',
          address: 'rua dos tests',
          phone: '99999999',
          methodPayment: 'dinheiro',
          orders: [
            {
              name: 'bolo',
              price: '1000',
              quantity: '2',
            }
          ]
        },
        email: 'test@test.com'
      }

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      }

      sinon.stub(MVPServices, 'createOrder').resolves(dataresponse);

      await createOrder(req, res);

      const email = req.email;
      const body = req.body;


      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(body)).to.be.equal(true);
      expect(MVPServices.createOrder.calledWith({body, email})).to.be.equal(true);
  });

});

describe('Tentando o arquivo Controllers/MVP da função getOrders', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função getOrders com sucesso', async () => {
    const req = {
      email: 'test@test.com'
    }

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    }

    sinon.stub(MVPServices, 'getOrders').resolves([dataresponse]);

    await getOrders(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith([dataresponse])).to.be.equal(true);
    expect(MVPServices.getOrders.calledWith(req.email)).to.be.equal(true);
  });
});

describe('Tentando o arquivo Controllers/MVP da função deleteOrder', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função deleteOrder com sucesso', async () => {
    const req = {
      params:{
        id: '123456'
      },
      email:'test@test.com'
    }

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    }

    sinon.stub(MVPServices, 'deleteOrder').resolves({ acknowledged: true, deletedCount: 1 });

    await deleteOrder(req, res);

    const email = req.email;
    const { id } = req.params;

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith({ acknowledged: true, deletedCount: 1 })).to.be.equal(true);
    expect(MVPServices.deleteOrder.calledWith({ email, id })).to.be.equal(true);
  });
});

describe('Tentando o arquivo Controllers/MVP da função deleteProductOrder', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função deleteProductOrder com sucesso', async () => {
    const req = {
      params:{
        id: '123456'
      },
      email:'test@test.com',
    }

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    }

    sinon.stub(MVPServices, 'deleteProductOrder').resolves({ message: 'Product deleted' });

    await deleteProductOrder(req, res);

    const email = req.email;
    const productId = req.params.id;

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith({ message: 'Product deleted' })).to.be.equal(true);
    expect(MVPServices.deleteProductOrder.calledWith({ email, productId })).to.be.equal(true);
  });
});

describe('Tentando o arquivo Controllers/MVP da função updateOrder', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função updateOrder com sucesso', async () => {
    const req = {
      params:{
        id: '123456'
      },
      body: {
        ...dataresponse
      },
      email:'test@test.com',
    }

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    }

    sinon.stub(MVPServices, 'updateOrder').resolves(dataresponse);

    await updateOrder(req, res);

    const email = req.email;
    const id = req.params.id;
    const body = req.body;

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(dataresponse)).to.be.equal(true);
    expect(MVPServices.updateOrder.calledWith(body, id, email)).to.be.equal(true);
  });
});

describe('Tentando o arquivo Controllers/MVP da função updateProductOrder', () => {
  afterEach(() => {
    sinon.restore();
  })

  it('Deve chamar a função updateProductOrder com sucesso', async () => {
    const req = {
      params:{
        id: '123456'
      },
      body: {
        ...dataOrder
      },
      email:'test@test.com',
    }

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    }

    sinon.stub(MVPServices, 'updateProductOrder').resolves(dataresponse);

    await updateProductOrder(req, res);

    const email = req.email;
    const id = req.params.id;
    const body = req.body;

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(dataresponse)).to.be.equal(true);
    expect(MVPServices.updateProductOrder.calledWith(body, id, email)).to.be.equal(true);
  });
});