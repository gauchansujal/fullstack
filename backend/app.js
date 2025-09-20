const path = require('path');

const filename = path.basename('/user/docs/app.log');
console.log(filename);

const filenameWithoutExt = path.basename('/users/docs/app.log', '.log');
console.log(filenameWithoutExt);