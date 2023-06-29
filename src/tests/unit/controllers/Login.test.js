const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const { Login, CheckAcessLogin, Register } = require('../../../controllers/Login');
const LoginServices = require('../../../services/Login');


describe('Tentando o arquivo Controllers/Login da função Login', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função Login com sucesso', async () => {
    const req = {
        body: {
        email: 'test@test.com',
        password: '123456',
      }
    }
    
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    }

    const token = 'token';

    sinon.stub(LoginServices, 'Login').resolves(token);

    await Login(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith({ token })).to.be.equal(true);
    expect(LoginServices.Login.calledWith(req.body)).to.be.equal(true);
  });
});

describe('Tentando o arquivo Controllers/Login da função CheckAcessLogin', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função CheckAcessLogin corretamente ', async () => {
    const req = {
      email: 'test@test.com'
    }

    const  res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    }

    const message = { message: 'ok' };

    sinon.stub(LoginServices, 'CheckAcessLogin').resolves(message);

    await CheckAcessLogin(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(message)).to.be.equal(true);
    expect(LoginServices.CheckAcessLogin.calledWith(req.email)).to.be.equal(true);
  });

});

describe('Tentando o arquivo Controllers/Login da função Register', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Deve chamar a função Register corretamente', async () => {
    const req = {
      body: {
        email: 'test@test.com',
        password: '123456',
      }
    }

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    }
    const message = { message: 'successfully registered user' };

    sinon.stub(LoginServices, 'Register').resolves(message);

    await Register(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(message)).to.be.equal(true);
    expect(LoginServices.Register.calledWith(req.body)).to.be.equal(true);

  });
});