const dataresponse = {
  name: 'Jeniffer',
  address: 'rua dos tests',
  phone: '99999999',
  methodPayment: 'dinheiro',
  orders: [
    {
      name: 'bolo',
      price: '1000',
      quantity: '2',
    },
  ],
};

const dataOrder = {
  name: 'bolo',
  price: '1000',
  quantity: '2',
};

module.exports = { dataresponse, dataOrder };