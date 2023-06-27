const { expect } = require('chai');
const { describe, it } = require('mocha');
const orderProducts = require('../../../models/orderModel');

describe('Model Orders', () => {

  it('Create order with correct schema', () => {
    const orderSubPath = orderProducts.schema.paths.orders;

    expect(orderProducts.schema.obj).to.have.property('name');
    expect(orderProducts.schema.obj).to.have.property('userId');
    expect(orderProducts.schema.obj).to.have.property('address');
    expect(orderProducts.schema.obj).to.have.property('phone');
    expect(orderProducts.schema.obj).to.have.property('methodPayment');
    expect(orderProducts.schema.obj).to.have.property('orders');

    expect(orderProducts.schema.obj.name.type).to.equal(String);
    expect(orderProducts.schema.obj.userId.type).to.equal(String);
    expect(orderProducts.schema.obj.address.type).to.equal(String);
    expect(orderProducts.schema.obj.phone.type).to.equal(String);
    expect(orderProducts.schema.obj.methodPayment.type).to.equal(String);

    expect(orderSubPath.schema.obj).to.have.property('name');
    expect(orderSubPath.schema.obj).to.have.property('price');
    expect(orderSubPath.schema.obj).to.have.property('quantity');

    expect(orderSubPath.schema.obj.name.type).to.equal(String);
    expect(orderSubPath.schema.obj.price.type).to.equal(Number);
    expect(orderSubPath.schema.obj.quantity.type).to.equal(Number);

    expect(orderProducts.schema.obj.name.required).to.be.true;
    expect(orderProducts.schema.obj.userId.required).to.be.true;
    expect(orderProducts.schema.obj.address.required).to.be.true;
    expect(orderProducts.schema.obj.phone.required).to.be.true;
    expect(orderProducts.schema.obj.methodPayment.required).to.be.true;
  })
});