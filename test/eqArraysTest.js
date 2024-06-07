
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test cases using assertEqual
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should pass
assertEqual(eqArrays([], []), true); // Should pass
assertEqual(eqArrays([1], [1]), true); // Should pass
assertEqual(eqArrays([1], [2]), false); // Should pass
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true); // Should pass
assertEqual(eqArrays(["a", "b", "c"], ["A", "B", "C"]), false); // Should pass
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // Should pass
assertEqual(eqArrays([1, 2], [1, 2, 3]), false); // Should pass