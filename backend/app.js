const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('error', (err)=>{
  console.error('an error occured:', err.message);
});

emitter.emit('error', new Error('something went wrong'));