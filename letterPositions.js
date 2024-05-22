
// eqArrays and assertArraysEqual Functions

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

// Function called letterPositions
const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  return results;
};

// Small String Test "hello"
const result = countLetters("hello");
assertArraysEqual(Object.keys(result),['h', 'e', 'l', 'o']);

