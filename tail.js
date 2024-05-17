
function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
}

// tail function
function tail(array) {
  return array.slice(1); 
}

// Test cases to verify the tail function works as expected
const result1 = tail([1, 2, 3, 4]);
assertEqual(result1.length, 3);  // Check length
assertEqual(result1[0], 2);      // Check first element
assertEqual(result1[1], 3);      // Check second element
assertEqual(result1[2], 4);      // Check third element
const result2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result2.length, 2);  // Check length
assertEqual(result2[0], "Lighthouse"); // Check first element
assertEqual(result2[1], "Labs");       // Check second element
const result3 = tail([true, false, true]);
assertEqual(result3.length, 2);  // Check length
assertEqual(result3[0], false);  // Check first element
assertEqual(result3[1], true);   // Check second element
const result4 = tail([42]);
assertEqual(result4.length, 0);  // Check length
const result5 = tail([]);
assertEqual(result5.length, 0);  // Check length

// Test Case: Check the original array for mutation
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);
