
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
const without = function(source, itemsToRemove) {
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};


// Test cases for without function
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // Should pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // Should pass
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); // Should pass
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []); // Should pass
// Test to ensure original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // Perform function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Verify original array is unchanged
// Additional test cases
assertArraysEqual(without([1, 2, 3, 4, 5], [2, 4]), [1, 3, 5]); // Should pass
assertArraysEqual(without(["a", "b", "c", "d"], ["b", "d"]), ["a", "c"]); // Should pass
assertArraysEqual(without(["apple", "banana", "cherry"], ["banana"]), ["apple", "cherry"]); // Should pass
assertArraysEqual(without([true, false, true], [true]), [false]); // Should pass