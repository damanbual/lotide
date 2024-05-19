
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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