const os = require('os');
console.log(`cpu Architecture: ${os.arch()}`);

const cpus = os.cpus();
console.log(`CPU Model: ${cpus[0].model}`);
console.log(`CPU sPEED : ${cpus[0].speed} MHZ`);
console.log(`Number of Cores: ${cpus.length}`)