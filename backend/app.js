const http = require('http');
const path = require('path');

const {getCurrentDate, formatCurrency} = require('./utils');
const Logger = require('.logger');

const logger = new Logger('app');
const server = http.creatserver((req, res)=> {
  try{
    logger.log(`request recived for ${req.url}`);
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(`<h1>welcome to our app!</h1>`);
    res.write(`<p>current data: ${getCurrentDate()}</p>`);
    res.write(`<p>Formateted amount: ${formatCurrency(99.99)}</p>`);
    res.end();

  }

  catch (error){
    logger.error(error);
    res.writeHead(500,{'contetn-typw': 'text/plain'});
    res.end('internal server error');

  }
});
const Port = process.env.PORT|| 3000;
server.listen(PORT, ()=> {
  logger.log(`Server running at http://localhost:${PORT}`);
});