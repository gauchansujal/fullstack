const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  const pathname= parsedUrl.pathname;
  const query = parsedUrl.query;

  res.writeHead(200, {'content-type':'application/json'});
  res.end(JSON.stringify({
    pathname,
    query,
    fullUrl: req.url
  }, null,2));
});
server.listen(3000, ()=>{
  console.log(`server i srunning on http://localhost:3000/`);
});