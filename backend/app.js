const buffer1 = Buffer.from('ABC');
const buffer2 = Buffer.from('BCD');
const buffer3 = Buffer.from('ABC');

console.log(Buffer.compare(buffer1, buffer2));
console.log(Buffer.compare(buffer2, buffer1));
console.log(Buffer.compare(buffer1, buffer3));