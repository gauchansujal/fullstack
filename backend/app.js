const os = require('os');
function formatBytes(bytes, decimals = 2){
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals ;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes)/Math.log(k));
    return parseFloat((bytes / Math.pow(k,i)).toFixed(dm)) + '' + sizes[i];
}

const totalMem = os.totalmem();
const freeMem = os.freemem();
const useMem = totalMem - freeMem;
const usagePercent = ((useMem / totalMem)* 100).toFixed(2);

console.log('memory Information:');
console.log(`- Total memory : ${formatBytes(totalMem)}`);
console.log(`- Free memory : ${formatBytes(freeMem)} (${((freeMem / totalMem)*100).toFixed(2)}%)`);
console.log(`- Used Memory : ${formatBytes(useMem)}(${usagePercent}%)`);

const MIN_FREE_MEMORY = 200 * 1024 * 1024;
if (freeMem < MIN_FREE_MEMORY){
    console.warn('warning: low on memory!');

}else{
    console.log('system has sufficient memory available');
}