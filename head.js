function head(array) {
  return array[0];
}
function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
}
// Test cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined); // Test with empty array
assertEqual(head([true, false, true]), true); // Test with boolean values
assertEqual(head([null, undefined, false]), null); // Test with null values
assertEqual(head([42]), 42); // Test with single element array