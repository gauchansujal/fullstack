setTimeout(()=>{
  console.log('this message is displayed after 2 seconds');

}, 2000);

setTimeout((name)=>{
  console.log(`Hello, ${name}!`);

}, 1000, 'World');

const timeoutId = setTimeout(()=>{
  console.log('this will never be displayed');
},5000);

clearTimeout(timeoutId);
console.log('timeout has been cancelled');