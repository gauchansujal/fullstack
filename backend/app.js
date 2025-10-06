const EventEmitter = require('events');
const emitter =  new EventEmitter();

emitter.once('connection', ()=>{
  console.log('first connection established');

});

emitter.emit('connetion');
emitter.emit('connection');