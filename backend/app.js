const buffer = Buffer.from('hello, world!');

const slice = buffer.slice(7);
console.log(slice.toString());

const slice2 = buffer.slice(0, 5);
console.log(slice2.toString());

slice[0] = 11;
console.log(slice.toString());
console.log(buffer.toString());
