const dns = require('dns');
dns.lookup('example.com',(err, address, family)=>{
  if(err) throw err;
  console.log(`REsolved: ${address} (IPv${family})`);
});