
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have itendtical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // Expected output: Assertion Failed
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // Expected output: Assertion Failed
