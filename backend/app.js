const assert = require('assert');

assert.strictEqual(1,1);
try{
  assert.strictEqual('1', 1, 'String "1" is not strictly equal to number 1');
  assert.strictEqual(true, 1, 'true is not strictly equal to 1')
}catch (err){
  console.error(`Error: ${err.message}`);
}