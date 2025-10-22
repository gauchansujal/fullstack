const dns = require('dns');

dns.lookup('www.example.com', (err, address, family)=>{
  if(err) throw err;
  console.log('IP adress: %s', address);
  console.log('IP version: IPv%s), family');
})