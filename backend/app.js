const assert = require('assert');

assert(true);
assert(1);
assert('string');
assert({});

try{
  assert(false, 'this value is not true');

}
catch (err){
  console.error(`Error: ${err.message}`);

}
try{
  assert(0);
  assert('');
  assert(null);
  assert(undefined);

}catch(err){
  console.error(`Error: ${err.message}`);
}