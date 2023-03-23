const mongoose = require('mongoose');

// eslint-disable-next-line no-global-assign
require = ('dotenv/config');

const MONGO_DB_URL = process.env.MONGO_URL;

const connectToDataBase = (
  mongoDataBaseURI = MONGO_DB_URL,
) => mongoose.connect(mongoDataBaseURI);

module.exports = connectToDataBase;
