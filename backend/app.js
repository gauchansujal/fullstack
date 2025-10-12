const crypto = require('crypto');

const hash = crypto.createHash('sha256')
.update('hello, node.js!')
.digest('hex');
console.log('SHA-256 Hash:', hash);