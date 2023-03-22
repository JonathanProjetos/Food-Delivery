const bodyMVP = (order) => {
  if (order.length < 1) {
    throw new Error('400|Quantidade minima de produtos é 1.');
  } else if (order.length > 5) {
    throw new Error('400|Quantidade limite de produtos atingido.');
  }

  const orderTotal = order.reduce((acc, curr) => acc + curr.quantity, 0);

  order.forEach((qty) => {
    if (qty.quantity < 1) throw new Error('400|Quantidade minima de produtos é 1.');
  });

  if (orderTotal > 5) {
    throw new Error('400|Quantidade limite de produtos atingido.');
  }
};

const bodyEarlyAdopters = (order) => {
  if (order.length < 1) {
    throw new Error('400|Quantidade minima de produtos é 1.');
  } else if (order.length > 15) {
    throw new Error('400|Quantidade limite de produtos atingido.');
  }

  order.forEach((qty) => {
    if (qty.quantity < 1) throw new Error('400|Quantidade minima de produtos é 1.');
  });

  const orderTotal = order.reduce((acc, curr) => acc + curr.quantity, 0);

  if (orderTotal > 15) {
    throw new Error('400|Quantidade limite de produtos atingido.');
  }
};

const bodyEarlyMajority = (order) => {
  if (order.length < 1) {
    throw new Error('400|Quantidade minima de produtos é 1.');
  } else if (order.length > 20) {
    throw new Error('400|Quantidade limite de produtos atingido.');
  }

  order.forEach((qty) => {
    if (qty.quantity < 1) throw new Error('400|Quantidade minima de produtos é 1.');
  });

  const orderTotal = order.reduce((acc, curr) => acc + curr.quantity, 0);

  if (orderTotal > 20) {
    throw new Error('400|Quantidade limite de produtos atingido.');
  }
};

const bodyLateMajority = (order) => {
  if (order.length < 1) {
    throw new Error('400|Quantidade Quantidade minima é 1.');
  }

  order.forEach((qty) => {
    if (qty.quantity < 1) throw new Error('400|Quantidade minima de produtos é 1.');
  });
};

module.exports = {
  bodyMVP,
  bodyEarlyAdopters,
  bodyEarlyMajority,
  bodyLateMajority,
};
