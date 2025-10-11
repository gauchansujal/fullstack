const buffer = Buffer.from('hello world!');
console.log(buffer.toString());

console.log(buffer.toString('utf8'));

console.log(buffer.toString('utf8', 0,5));

const hexBuffer = Buffer.from('48656c6c6f', 'hex');

console.log(hexBuffer.toString());

const base64Buffer = Buffer.from('SGVsbG8=', 'base64');

console.log(base64Buffer.toString());