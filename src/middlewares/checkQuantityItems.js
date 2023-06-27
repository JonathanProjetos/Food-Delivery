const MESSAGE_PRODUCTS_STATUS_400 = '400|Quantidade minima de produtos é 1.';
const MESSAGE_LIMIT_QUANTITY_PRODUCTS = '400|Quantidade limite de produtos atingido.';
const MESSAGE_MIN_QUANTITY_PRODUCTS = '400|Quantidade minima de produtos é 1.';

const bodyMVP = (order) => {
  if (order.length < 1) {
    throw new Error(MESSAGE_PRODUCTS_STATUS_400);
  } else if (order.length > 5) {
    throw new Error(MESSAGE_LIMIT_QUANTITY_PRODUCTS);
  }

  const orderTotal = order.reduce((acc, curr) => acc + curr.quantity, 0);

  order.forEach((qty) => {
    if (qty.quantity < 1) throw new Error(MESSAGE_PRODUCTS_STATUS_400);
  });

  if (orderTotal > 5) {
    throw new Error(MESSAGE_LIMIT_QUANTITY_PRODUCTS);
  }
};

const bodyEarlyAdopters = (order) => {
  if (order.length < 1) {
    throw new Error(MESSAGE_PRODUCTS_STATUS_400);
  } else if (order.length > 15) {
    throw new Error(MESSAGE_LIMIT_QUANTITY_PRODUCTS);
  }

  order.forEach((qty) => {
    if (qty.quantity < 1) throw new Error(MESSAGE_PRODUCTS_STATUS_400);
  });

  const orderTotal = order.reduce((acc, curr) => acc + curr.quantity, 0);

  if (orderTotal > 15) {
    throw new Error(MESSAGE_LIMIT_QUANTITY_PRODUCTS);
  }
};

const bodyEarlyMajority = (order) => {
  if (order.length < 1) {
    throw new Error(MESSAGE_PRODUCTS_STATUS_400);
  } else if (order.length > 20) {
    throw new Error(MESSAGE_LIMIT_QUANTITY_PRODUCTS);
  }

  order.forEach((qty) => {
    if (qty.quantity < 1) throw new Error(MESSAGE_PRODUCTS_STATUS_400);
  });

  const orderTotal = order.reduce((acc, curr) => acc + curr.quantity, 0);

  if (orderTotal > 20) {
    throw new Error(MESSAGE_LIMIT_QUANTITY_PRODUCTS);
  }
};

const bodyLateMajority = (order) => {
  if (order.length < 1) {
    throw new Error(MESSAGE_MIN_QUANTITY_PRODUCTS);
  }

  order.forEach((qty) => {
    if (qty.quantity < 1) throw new Error(MESSAGE_PRODUCTS_STATUS_400);
  });
};

module.exports = {
  bodyMVP,
  bodyEarlyAdopters,
  bodyEarlyMajority,
  bodyLateMajority,
};
