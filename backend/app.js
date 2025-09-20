const path = require('path');

console.log('directory name:', __dirname);
console.log('file name:',__filename);

const configPath = path.join(__dirname, 'config', 'app-config.json');
console.log('config file path:', configPath);

console.log('directory using path.dirname():', path.dirname(__filename));