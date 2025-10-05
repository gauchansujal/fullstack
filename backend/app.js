let fs = require('fs');
let rs = fs.createReadStream('./demofile.txt');
rs.on('open', function(){
  console.log('The file is open');
});