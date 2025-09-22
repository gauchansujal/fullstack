const path = require('path');

console.log(path.normalize('/users/./docs/../data/file.txt'));

console.log(path.normalize('/users//docs////file.txt'));

console.log(path.normalize('c:\\users\\docs\\..\\file.txt'));

console.log(path.normalize('.'));
console.log(path.normalize('..'));
console.log(path.normalize('/..'));
