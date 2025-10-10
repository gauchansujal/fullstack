const buffer = Buffer.from('Hello');

// Iterate using for...of loop
for (const byte of buffer) {
console.log(byte);
}

// Iterate using forEach
buffer.forEach((byte, index) => {
  console.log(`Byte at position ${index}: ${byte}`);
});