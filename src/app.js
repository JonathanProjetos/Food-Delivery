const express = require('express');
require('express-async-errors');
const loginRouter = require('./routes/RouteLogin');


const app = express();
app.use(express.json())

app.use('/', loginRouter);

app.use((err, _req, res, _next) => {
  const [code, message] = err.message.split('|');
  res.status(code).json({ message });
})


module.exports = app;