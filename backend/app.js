const path = require('path');
const extension = path.extname('myl.text');
console.log(extension);

console.log(path.extname('index.html'));
console.log(path.extname('index.coffee.md'));
console.log(path.extname('indesx.css'));
console.log(path.extname('index.'));
console.log(path.extname('index'));
console.log(path.extname('.index'));