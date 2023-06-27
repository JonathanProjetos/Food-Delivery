const { expect } = require('chai');
const { describe, it } = require('mocha');
const productModel = require('../../../models/productModel');

describe('Model product', () => {
  it('Create product with correct schema', () => {
    expect(productModel.schema.obj).to.have.property('name');
    expect(productModel.schema.obj).to.have.property('price');
    expect(productModel.schema.obj).to.have.property('description');
    expect(productModel.schema.obj.name.type).to.equal(String);
    expect(productModel.schema.obj.price.type).to.equal(String);
    expect(productModel.schema.obj.description.type).to.equal(String);
    expect(productModel.schema.obj.name.required).to.be.true;
    expect(productModel.schema.obj.price.required).to.be.true;
    expect(productModel.schema.obj.description.required).to.be.true;
  })
});