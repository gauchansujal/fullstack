const EventEmitter = require('events');

const  myEMitter = new EventEmitter();

myEMitter.on('greet', ()=>{
  console.log('hello there');
});
myEMitter.emit('greet');