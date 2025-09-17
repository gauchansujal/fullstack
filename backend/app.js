const fs = require('fs').promises;

async function deleteFile(){
  const filePath = 'large-file.txt';
  try{
    await fs.access(filePath);

    await fs.unlink(filePath);
    console.log('file deleted sucesfully');

  }catch(err){
    if(err.code ==='ENOENT'){
      console.log('file does not exist');
    }else {
      console.log('error deleting file :', err);
    }
  }
}
deleteFile();