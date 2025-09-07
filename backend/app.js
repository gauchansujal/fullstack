let uc = require('upper-case');
let http = require('http')
http.createServer(function(req, res){
  res.writeHead(200, {'content-type': 'text/html'});
  res.write(uc.upperCase("helloworld"));
  res.end();
}).listen(8000, ()=> {
  console.log('server is running in http://localhost:8000');
});