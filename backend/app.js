const buffer3 = Buffer.from('hello world!');
console.log(buffer3);

console.log(buffer3.toString());

const buffer4 = Buffer.from([65, 66, 67, 68, 69]);
console.log(buffer4);

console.log(buffer4.toString());

const buffer5 = Buffer.from(buffer4);
console.log(buffer5);