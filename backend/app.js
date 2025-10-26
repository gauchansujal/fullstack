const assert = require('assert');

const obj1 = {a: 1, b:{c:2}};
const obj2 = {a : 1, b:{c:2}};
const obj3 = {a: '1', b: {c:'2'}};

assert.deepEqual(obj1, obj2);
assert.deepStrictEqual(obj1, obj2);

assert.deepEqual(obj1, obj2);
assert.deepStrictEqual(obj1, obj2);

assert.deepEqual(obj1, obj3);

try{
  assert.deepStrictEqual(obj1, obj3,'objests are not strictly deep-equal');

}catch (err){
  console.error(`Error: ${err.message}`);

}

const arr1 = [1,2,[3,4]];
const arr2 = [1,2,[3,4]];
const arr3 = ['1', '1',['3','4']];
assert.deepEqual(arr1, arr2);
assert.deepStrictEqual(arr1, arr2);

assert.deepEqual(arr1,arr3);

try{
  assert.deepStrictEqual(arr1,arr3, 'Arrays are not strictly deep-equal');
} catch (err){
  console.error(`Error: ${err.message}`);
}