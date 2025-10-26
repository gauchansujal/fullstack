const assert = require('assert');
assert.notEqual(1,2);
assert.notDeepStrictEqual('1',1);

try{
  assert.notEqual(1, '1', '1 is coercively  equal to "1');
} catch (err) {
  console.error(`Error: ${err.message}`);
}
try {
  assert.notStrictEqual(1,1, '1 is strictly equal to 1');
}catch (err) {
  console.error(`Error: ${err.message}`);
}