const fs = require('fs').promises;
async function appendToFile(){
  try{
    const logEntry = `${new Date().toISOString()}: application started\n`;
    await fs.appendFile('app.log', logEntry, 'utf8');

    console.log('log entry added');

  }catch(err){
    console.log('error appending to file:', err);
  }
}appendToFile();