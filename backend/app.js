const fs = require('path');
const pathInfo = path.parse('/users/docs/file.txt');
console.log(pathInfo);

console.log('directory : ', pathInfo.dir);
console.log('filename:', pathInfo.base);
console.log('Name only:',pathInfo.name);
console.log('Extension:', pathInfo.ext);
