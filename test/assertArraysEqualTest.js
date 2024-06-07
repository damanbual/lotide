
const assertArraysEqual = require('../assertArraysEqual');


// Test cases for assertArraysEqual
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should fail
assertArraysEqual([], []); // Should pass
assertArraysEqual([1], [1]); // Should pass
assertArraysEqual([1], [2]); // Should fail
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]); // Should pass
assertArraysEqual(["a", "b", "c"], ["A", "B", "C"]); // Should fail
assertArraysEqual([1, 2, 3], [1, 2]); // Should fail
assertArraysEqual([1, 2], [1, 2, 3]); // Should fail