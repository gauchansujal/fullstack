const fs = require('fs').promises;
async function writeWithFileHandle(){
  let fileHandle;

  try{
    fileHandle = await fs.open('my.text', 'w');

    await fileHandle.write('first line\n');
    await fileHandle.write('second line\n');
    await fileHandle.write('third line\n');

    console.log('content written sucessfully');

  }catch(err){
    console.error('error writteing to file:', err);

  }finally{
    if(fileHandle){
      await fileHandle.close();
    }
  }
}

writeWithFileHandle();