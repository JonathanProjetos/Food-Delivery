const express = require('express');
require('express-async-errors');
const cors = require('cors');
const swagger = require('swagger-ui-express');
const swaggerFile = require('./doc/swagger.json');
const loginRouter = require('./routes/RouteLogin');
const productsRouter = require('./routes/RouteProducts');
const mvpRoute = require('./routes/RouteMVP');
const earlyAdoptersRoute = require('./routes/RouteEarlyAdopters');
const earlyMajorityRoute = require('./routes/RouteEarlyMajority');
const lateMajorityRoute = require('./routes/RouteLateMajority');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/docs', swagger.serve, swagger.setup(swaggerFile));
app.use('/', loginRouter);
app.use('/', productsRouter);
app.use('/', mvpRoute);
app.use('/', earlyAdoptersRoute);
app.use('/', earlyMajorityRoute);
app.use('/', lateMajorityRoute);

app.use((err, _req, res, _next) => {
  const [code, message] = err.message.split('|');
  console.error(err);
  res.status(Number(code)).json({ message });
});

module.exports = app;
