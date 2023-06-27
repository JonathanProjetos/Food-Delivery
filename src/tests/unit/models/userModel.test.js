const { expect } = require('chai');
const { describe, it } = require('mocha');
const userModel = require('../../../models/userModel');

describe('Model User', () => {
  it('Create user with correct schema', () => {
    expect(userModel.schema.obj).to.have.property('email');
    expect(userModel.schema.obj).to.have.property('password');
    expect(userModel.schema.obj.email.type).to.equal(String);
    expect(userModel.schema.obj.password.type).to.equal(String);
    expect(userModel.schema.obj.email.required).to.be.true;
    expect(userModel.schema.obj.password.required).to.be.true;
  })
});