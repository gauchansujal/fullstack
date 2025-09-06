console.log('first');
setTimeout(()=> console.log('third'), 0);
Promise.resolve().then(()=> console.log('second'));
console.log('fourht');