let events = require('events');
let eventEmitter = new events.EventEmitter();

let myEventHandler = function () {
  console.log("i hear a scream!");
}

eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');