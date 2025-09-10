const http = require('http');

const server = http.createServer((req, res)=>{
  res.writeHead(200, {
    'Content-type': 'text/html',
    'X-Powered-By': 'Node.js',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Set-Cookie': 'sessionid=abc123; HttpOnly'
  });
  res.end('<h1>hello world</h1>');
});
server.listen(3000, ()=>{
  console.log('server is running in http://localhost:3000/');
});