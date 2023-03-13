const token = require('../middlewares/token');

module.exports = {
  verifyToken: (req, _res, next) => {
    const { authorization } = req.headers;
    const dados = token.validateToken(authorization);
    req.email = dados;
    next();
  },
};