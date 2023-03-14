const express = require('express');
require('express-async-errors');
const loginRouter = require('./routes/RouteLogin');
const productsRouter = require('./routes/RouteProducts');
const mvpRoute = require('./routes/RouteMVP');
const earlyAdoptersRoute = require('./routes/RouteEarlyAdopters');
const earlyMajorityRoute = require('./routes/RouteEarlyMajority');


const app = express();
app.use(express.json())

app.use('/', loginRouter);
app.use('/', productsRouter);
app.use('/', mvpRoute);
app.use('/', earlyAdoptersRoute);
app.use('/', earlyMajorityRoute);

app.use((err, _req, res, _next) => {
  const [code, message] = err.message.split('|');
  res.status(Number(code)).json({ message });
})


module.exports = app;