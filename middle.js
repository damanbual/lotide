

// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  }
  
  const middleIndex = Math.floor(length / 2);
  
  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

// TEST CODE
assertArraysEqual(middle([1]), []); // Should pass
assertArraysEqual(middle([1, 2]), []); // Should pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should pass
// Additional test cases
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // Should pass
assertArraysEqual(middle([0]), []); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]); // Should pass
assertArraysEqual(middle([10, 20, 30, 40, 50, 60, 70]), [40]); // Should pass
assertArraysEqual(middle([5, 10, 15, 20, 25, 30, 35, 40]), [20, 25]); // Should pass
