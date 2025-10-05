const { URL } = require('url');

// Parse URL with query parameters
const url = new URL('https://example.com/search?q=node.js&lang=en');

// Get all parameters
console.log(url.searchParams.toString()); // 'q=node.js&lang=en'

// Get specific parameter
console.log(url.searchParams.get('q')); // 'node.js'

// Check if parameter exists
console.log(url.searchParams.has('lang')); // true

// Add new parameter
url.searchParams.append('page', '2');
console.log(url.href);
// 'https://example.com/search?q=node.js&lang=en&page=2'