const fs = require('fs');
fs. readFile('my.text', 'utf8', (err, data)=>{
  if (err){
    console.error('error reading file : ', err);
    return;
  }
  console.log('file content:', data);

});

fs.readFile('image.png',(err, data)=>{
  if(err) throw err;
  console.log('image size:', data.length, 'bytes');
});