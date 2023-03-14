const express = require('express');
require('express-async-errors');
const loginRouter = require('./routes/RouteLogin');
const productsRouter = require('./routes/RouteProducts');
const MVPRoute = require('./routes/RouteMVP');
const EarlyAdoptersRoute = require('./routes/RouteEarly_Adopters');


const app = express();
app.use(express.json())

app.use('/', loginRouter);
app.use('/', productsRouter);
app.use('/', MVPRoute);
app.use('/', EarlyAdoptersRoute);

app.use((err, _req, res, _next) => {
  const [code, message] = err.message.split('|');
  res.status(Number(code)).json({ message });
})


module.exports = app;