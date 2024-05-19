
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
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};
const flatten = function(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

// Test cases for flatten function
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // Should pass
assertArraysEqual(flatten([1, [2, 3], 4, [5, 6, 7], 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]); // Should pass
assertArraysEqual(flatten([[1, 2], 3, 4, [5], [6, 7], 8]), [1, 2, 3, 4, 5, 6, 7, 8]); // Should pass
assertArraysEqual(flatten([]), []); // Should pass, edge case with an empty array
assertArraysEqual(flatten([1, [2], [], 3]), [1, 2, 3]); // Should pass, edge case with an empty nested array