const path = require('path');
console.log(path.relative('/users/docs/file.txt','/users/images/photo.jpg'));

console.log(path.relative('/users/docs/file.txt', '/users/docs/file2.txt'));

console.log(path.relative('/users/doc/file.txt', 'c:\\user\\impl\\bbb'));

const absolutePath = '/var/www/static/images/logo.png';
const webRoot = '/var/www';
const webPath = path.relative(webRoot, absolutePath).replace(/\\/g, '/');

console.log(webPath);