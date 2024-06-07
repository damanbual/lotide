
// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');


// // TEST CODE
// assertArraysEqual(middle([1]), []); // Should pass
// assertArraysEqual(middle([1, 2]), []); // Should pass
// assertArraysEqual(middle([1, 2, 3]), [2]); // Should pass
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should pass
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should pass
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should pass


// // Additional test cases
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // Should pass
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // Should pass
// assertArraysEqual(middle([0]), []); // Should pass
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]); // Should pass
// assertArraysEqual(middle([10, 20, 30, 40, 50, 60, 70]), [40]); // Should pass
// assertArraysEqual(middle([5, 10, 15, 20, 25, 30, 35, 40]), [20, 25]); // Should pass

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  
  // Additional test cases
  it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  it("returns [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
  it("returns [] for [0]", () => {
    assert.deepEqual(middle([0]), []);
  });
  it("returns [5] for [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
  });
  it("returns [40] for [10, 20, 30, 40, 50, 60, 70]", () => {
    assert.deepEqual(middle([10, 20, 30, 40, 50, 60, 70]), [40]);
  });
  it("returns [20, 25] for [5, 10, 15, 20, 25, 30, 35, 40]", () => {
    assert.deepEqual(middle([5, 10, 15, 20, 25, 30, 35, 40]), [20, 25]);
  });
});