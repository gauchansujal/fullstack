const https = require('https');
const fs = require('fs');

// Load the key and certificate
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Hello Secure World 🌍 (via HTTPS)");
}).listen(8443, () => {
  console.log("Server running at https://localhost:8443/");
});
