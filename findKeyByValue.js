
// assertEqual Function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to find key by value in an object 
const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};


// Test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

