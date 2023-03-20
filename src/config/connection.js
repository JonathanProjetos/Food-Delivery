const mongoose = require('mongoose')
require = ('dotenv/config')


const MONGO_DB_URL = process.env.MONGO_URL;

const connectToDataBase = (
  mongoDataBaseURI = MONGO_DB_URL
) => mongoose.connect(mongoDataBaseURI);

module.exports = connectToDataBase;