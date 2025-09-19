const fs = require('fs').promises;
const path = require('path');

async function moveFile(){
  const sourceFile = 'myy.text';
  const targetDir = "C:\Users\Sujal\Downloads";
  const targetFile = path.join( targetDir, 'myy.text');
  try{
    await fs.access(sourceFile);
    await fs.mkdir(targetDir, {recursive: true});

    await fs.rename(sourceFile, targetFile);

    console.log('File moved sucesfully');
  }catch (err) {
    if (err.code === 'ENOENT'){
      console.log('source file does not exist');

    }else if (err.code === 'EXDEV'){
      console.log('cross device move detected, using copy+delete fallback');
      await moveAcrossDevices(sourceFile, targetFile);
    }else {
      console.log('error moving file :', err);
    }
  }
}
async function moveAcrossDevices(source, target){
  try{
    await fs.copyFile(source, target);
    await fs.unlink(source);
    console.log('file moved across devices sucessfully');
  }catch (err){
    try{await fs.unlink(target);} catch (e) {}
    throw err;
  }
}moveFile();