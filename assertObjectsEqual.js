
// eqObjects Function
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

// assertObjectsEqual Function
const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${objectToString(actual)} === ${objectToString(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${objectToString(actual)} !== ${objectToString(expected)}`);
  }
};
