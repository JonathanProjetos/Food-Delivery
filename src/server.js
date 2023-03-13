const app = require('./app');
require('dotenv').config();
const connectionToDataBase = require('./config/connection')

const PORT = process.env.PORT || 3001;

connectionToDataBase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((err) => {
  console.log('Erro ao conectar ao banco de dados err:\r\n');
  console.error(err);
  console.log('\r\nInicialização do servidor foi cancelada');
  process.exit(0);
});