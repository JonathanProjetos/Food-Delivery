const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const { Login, CheckAcessLogin, Register } = require('../../../services/Login');
const userModel = require('../../../models/userModel');
const bcryptjs = require('bcryptjs');

describe('Testando o arquivo Services/Login da função Login', () => {

  afterEach(() => {
    sinon.restore();
  })

  it('deve retornar um token válido ao fazer login com sucesso', async () => {

    const body = {
      email: 'test@test.com',
      password: '123456',
    }

    const dataUser = {
      email: 'test@test.com',
      password: bcryptjs.hashSync('123456', 10),
    }

    sinon.stub(userModel, 'findOne').resolves(dataUser);
    sinon.stub(bcryptjs, 'compareSync').returns(true);

    const token = await Login(body);

    expect(token).to.be.a('string');
  });

  it('deve retornar um erro ao fazer login com email incorreto', async () => {
    
    const body = {
      email: 'test@test.com',
      password: '123456',
    }

    sinon.stub(userModel, 'findOne').resolves(null);
    
    expect(await Login(body).catch((err) => err.message)).to.be.equal('404|user not found');

  });

  it('deve retornar um erro ao fazer login com senha incorreta', async () => {
    const body = {
      email: 'test@test.com',
      password: '123456',
    }

    const dataUser = {
      email: 'test@test.com',
      password: bcryptjs.hashSync('987456', 10),
    }

    sinon.stub(userModel, 'findOne').resolves(dataUser);
    sinon.stub(bcryptjs, 'compareSync').returns(false);

    expect(await Login(body).catch((err) => err.message)).to.be.equal('401|incorrect password');
  });

});

describe('Testando o arquivo Services/Login da função CheckAcessLogin',() => {

  afterEach(() => {
    sinon.restore();
  });

  it('Verificando email autorizado', async() => {
    const data = 'test@test.com'

    sinon.stub(userModel, 'findOne').resolves({ message:'ok' });

    const emailValido = await CheckAcessLogin(data);

    expect(emailValido).to.haveOwnProperty('message');
    expect(emailValido.message).to.be.equal('ok');

  });

  it('Verificando email não autorizado', async() => {
    const data = 'test@test.com'
    
    sinon.stub(userModel, 'findOne').resolves(null);

    expect(await CheckAcessLogin(data).catch((err) => err.message)).to.be.equal('401|unauthorized');
  })

});

describe('Testando o arquivo Services/Login da função Register', () => {
  
  afterEach(() => {
    sinon.restore();
  });

  it('Verificando registro com sucesso', async() => {
    const data = {
      email: 'test@test.com',
      password: '123456',
    }

    sinon.stub(userModel, 'findOne').resolves(null);
    sinon.stub(userModel, 'create').resolves({ message: 'successfully registered user' });

    const create = await Register(data);

    expect(create).to.haveOwnProperty('message');
    expect(create.message).to.be.equal('successfully registered user');
  });

  it('Verificando registro com email já cadastrado', async() => {
    const data = {
      email: 'test@test.com',
      password: '123456',
    }

    sinon.stub(userModel, 'findOne').resolves(data);

    expect(await Register(data).catch((err) => err.message)).to.be.equal('409|user already registered');
  });

});