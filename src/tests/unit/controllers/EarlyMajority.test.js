const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const EarlyMajorityServices = require('../../../services/EarlyMajority');
const { 
  createOrder,
  getOrders,
  deleteOrder,
  deleteProductOrder,
  updateOrder,
  updateProductOrder,
 } = require('../../../controllers/EarlyMajority');
const { dataresponse, dataOrder } = require('../../mocks/responseDataOrder')

describe('Testando o arquivo Controllers/EarlyMajority da função createOrder', () => {
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

    sinon.stub(EarlyMajorityServices, 'createOrder').resolves(dataresponse);

    await createOrder(req, res);

    const body = dataresponse;
    const email = 'test@test.com'

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(dataresponse)).to.be.equal(true);
    expect(EarlyMajorityServices.createOrder.calledWith({ ...body, email })).to.be.equal(true)
  });
});

describe('Testando o arquivo Controllers/EarlyMajority da função getOrders', () => {
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
  
    sinon.stub(EarlyMajorityServices, 'getOrders').resolves([dataresponse]);

    await getOrders(req, res);

    const email = 'test@test.com'

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith([dataresponse])).to.be.equal(true);
    expect(EarlyMajorityServices.getOrders.calledWith(email)).to.be.equal(true);
  });

});

describe('Testando o arquivo Controllers/EarlyMajority da função deleteOrder', () => {
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

    sinon.stub(EarlyMajorityServices, 'deleteOrder').resolves(deleteResponse)

    await deleteOrder(req, res);

    const id = '123456'
    const email = 'test@test.com'

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(deleteResponse)).to.be.equal(true);
    expect(EarlyMajorityServices.deleteOrder.calledWith({ email, id })).to.be.equal(true);
  });
});

describe('Testando o arquivo Controllers/EarlyMajority da função deleteProductsOrders', () => {
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

    sinon.stub(EarlyMajorityServices, 'deleteProductOrder').resolves({ message:'Product deleted' });

    await deleteProductOrder(req, res);

    const email = req.email
    const productId  = req.params.id

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith({ message:'Product deleted' })).to.be.equal(true);
    expect(EarlyMajorityServices.deleteProductOrder.calledWith({ email, productId })).to.be.equal(true);
  })
});

describe('Testando o arquivo Controllers/EarlyMajority da função updateOrder', () => {
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

    sinon.stub(EarlyMajorityServices, 'updateOrder').resolves(dataresponse);

    await updateOrder(req, res);

    const body = req.body;
    const id = req.params.id;
    const email = req.email;

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(dataresponse)).to.be.equal(true);
    expect(EarlyMajorityServices.updateOrder.calledWith(body, id, email)).to.be.equal(true);

  });
});

describe('Testando o arquivo Controllers/EarlyMajority da função updateProductOrder', () => {
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

    sinon.stub(EarlyMajorityServices, 'updateProductOrder').resolves(dataresponse);

    await updateProductOrder(req, res);

    const body = req.body;
    const id = req.params.id;
    const email = req.email;

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(dataresponse)).to.be.equal(true);
    expect(EarlyMajorityServices.updateProductOrder.calledWith(body, id, email)).to.be.equal(true);
  });
})