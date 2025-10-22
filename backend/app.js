const {promises: dns}= require('dns');

async function lookupDomain(domain){
  try{
    const adress = await dns.lookup(domain);
    console.log(`Resolved: ${address.address} (IPv${address.family})`);
  }
  catch (err){
    console.error('Lookup failc:', err);
  }
}
lookupDomain('example.com');