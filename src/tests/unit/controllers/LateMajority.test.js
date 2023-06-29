const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const LateMajorityServices = require('../../../services/LateMajority');
const { 
  createOrder,
  getOrders,
  deleteOrder,
  deleteProductOrder,
  updateOrder,
  updateProductOrder,
 } = require('../../../controllers/LateMajority');
const { dataresponse, dataOrder } = require('../../mocks/responseDataOrder')

describe('Testando o arquivo Controllers/LateMajority da função createOrder', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função corretamente.', async ()=> {
    const req = {
      body: {
        ...dataresponse
      },
      email: 'test@test.com'
    }

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }

    sinon.stub(LateMajorityServices, 'createOrder').resolves(dataresponse);

    await createOrder(req, res);

    const body = dataresponse;
    const email = 'test@test.com'

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(dataresponse)).to.be.equal(true);
    expect(LateMajorityServices.createOrder.calledWith({ ...body, email })).to.be.equal(true)
  });
});

describe('Testando o arquivo Controllers/LateMajority da função getOrders', () => {
  afterEach(() => {
    sinon.restore();
  })
  it('Deve chamar a função corretamente.', async () => {
    const req = {
      email: 'test@test.com'
    }
  
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }
  
    sinon.stub(LateMajorityServices, 'getOrders').resolves([dataresponse]);

    await getOrders(req, res);

    const email = 'test@test.com'

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith([dataresponse])).to.be.equal(true);
    expect(LateMajorityServices.getOrders.calledWith(email)).to.be.equal(true);
  });

});

describe('Testando o arquivo Controllers/LateMajority da função deleteOrder', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função corretamente', async() => {
    const req = {
      params : {
        id: '123456'
      },
      email: 'test@test.com'
    }

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }

    const deleteResponse = {
      acknowledged: true,
      deletedCount: 1
    }

    sinon.stub(LateMajorityServices, 'deleteOrder').resolves(deleteResponse)

    await deleteOrder(req, res);

    const id = '123456'
    const email = 'test@test.com'

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(deleteResponse)).to.be.equal(true);
    expect(LateMajorityServices.deleteOrder.calledWith({ email, id })).to.be.equal(true);
  });
});

describe('Testando o arquivo Controllers/LateMajority da função deleteProductsOrders', () => {
  afterEach(() => {
    sinon.restore()
  });

  it('Deve chamar a função corretamente', async () => {
    const  req = {
      params: {
        id: '123456'
      },
      email:'test@test.com'
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };

    sinon.stub(LateMajorityServices, 'deleteProductOrder').resolves({ message:'Product deleted' });

    await deleteProductOrder(req, res);

    const email = req.email
    const productId  = req.params.id

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith({ message:'Product deleted' })).to.be.equal(true);
    expect(LateMajorityServices.deleteProductOrder.calledWith({ email, productId })).to.be.equal(true);
  })
});

describe('Testando o arquivo Controllers/LateMajority da função updateOrder', () => {
  afterEach(() => {
    sinon.restore()
  });

  it('Deve chamar a função corretamente', async() => {
    const req = {
      body: {
        ...dataresponse
      },
      params: {
        id: '123456'
      },
      email: 'test@test.com'
    }

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    }

    sinon.stub(LateMajorityServices, 'updateOrder').resolves(dataresponse);

    await updateOrder(req, res);

    const body = req.body;
    const id = req.params.id;
    const email = req.email;

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(dataresponse)).to.be.equal(true);
    expect(LateMajorityServices.updateOrder.calledWith(body, id, email)).to.be.equal(true);

  });
});

describe('Testando o arquivo Controllers/LateMajority da função updateProductOrder', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função corretamente', async() => {
    const req = {
      body: {
        ...dataOrder
      },
      params: {
        id: '123456'
      },
      email: 'test@test.com'
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };

    sinon.stub(LateMajorityServices, 'updateProductOrder').resolves(dataresponse);

    await updateProductOrder(req, res);

    const body = req.body;
    const id = req.params.id;
    const email = req.email;

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(dataresponse)).to.be.equal(true);
    expect(LateMajorityServices.updateProductOrder.calledWith(body, id, email)).to.be.equal(true);
  });
})