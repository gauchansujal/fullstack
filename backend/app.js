const os = require('os');
const fs = require('fs');

console.log('End of liner character:', JSON.stringify(os.EOL));
const lines = [
    'first line',
    'Second line',
    'Third line',

];

const content = lines.join(os.EOL);
fs.writeFileSync('output.txt', content);
console.log('file written with platform0appropriate line ending');