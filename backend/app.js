const crypto = require('crypto');

// Secret key
const secretKey = 'mySecretKey';

// Create an HMAC
const hmac = crypto.createHmac('sha256', secretKey);

// Update with data
hmac.update('Hello, World!');

// Get the digest
const hmacDigest = hmac.digest('hex');
console.log('HMAC:', hmacDigest);