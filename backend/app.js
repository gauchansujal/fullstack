require('dotenv').config();
const fs = require('fs'); 
const https = require('https');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';
const sslOptions ={
  key: fs.readFileSync(process.env.SSL_KEY_PATH),
  cert:fs.readFileSync(process.env.SSL_CERT_PATH)
};

https.createServer(sslOptions, (req, res)=>{
  res.writeHead(200, {'content_type': "text/plain"});
  res.end("hello, http with .env variables");
}).listen(PORT, HOST, ()=>{
  console.log(`server running on https://${HOST}:${PORT}`);
});

