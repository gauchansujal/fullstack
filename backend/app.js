const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('Hello, world!');

const digest = hash.digest('hex');
console.log(digest);
