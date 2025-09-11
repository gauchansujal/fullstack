const http = require('http');
const server = http.createServer((req, res)=>{
  console.log('request header:', req.headers);
  const userAgent = req.headers['user-agent'];
  const acceptLanguage = req.headers['accept-language'];

  res.writeHead(200, {'content-type': 'text/plain'});
  res.end(`User-Agent: ${userAgent}\nAccept-Language: ${acceptLanguage}`);

});

server.listen(3000, ()=>{
  console.log('server is sunning on http://localhost:3000/');
})