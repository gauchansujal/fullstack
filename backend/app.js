const assert = require('assert');

assert.equal(1,1);
assert.equal(1,1);
assert.equal(true, 1);

try{
  assert.equal(1,2,'1 is not equal to 2');

}catch (err){
  console.error(`Error: ${err.message}`);
}