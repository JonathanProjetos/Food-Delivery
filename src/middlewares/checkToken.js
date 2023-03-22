const token = require('./token');

module.exports = {
  verifyToken: (req, _res, next) => {
    try {
      const { authorization } = req.headers;
      const filterBearerSwagger = authorization.split(' ').pop('Bearer');
      const dados = token.validateToken(filterBearerSwagger);
      req.email = dados;
      next();
    } catch (err) {
      console.error(err);
      throw new Error('404|Token not found');
    }
  },
};
