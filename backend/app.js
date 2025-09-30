const os = require('os');

console.log('Signal Constants :', os.constants.signals);

process.on('SIGINT', ()=>{
    console.log('Recevied SIGINT.Performing cleanup...');
    process.exit(0);
});

process.on('SIGTERM',()=>{
    console.log('Reced SIGTERM. Shutting down gracefully...');
    process.exit(0);

});
console.log('process is running. Press Ctrl+C to exit.');

