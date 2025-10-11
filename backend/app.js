const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('hello');
const buffer3 = Buffer.from('world');

console.log(buffer1.equals(buffer2));
console.log(buffer1.equals(buffer3));
console.log(buffer1 === buffer2);
