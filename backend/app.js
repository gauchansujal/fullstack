const os = require('os');
console.log(`os patform : ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`CPU Architecture: ${os.release()}`);
console.log(`Hostname: ${os.hostname()}`);

const totalMemMB = (os.totalmem()/(1024 * 1024  )).toFixed(2);
const freeMemMB = (os.freemem()/ (1024 * 1024 )).toFixed(2);
console.log(`Memory: ${freeMemMB} MB free of ${totalMemMB}MB`);

const userInfo = os.userInfo();
console.log(`Current User: ${userInfo.username}`);
console.log(`Home Directory: ${os.homedir()}`);