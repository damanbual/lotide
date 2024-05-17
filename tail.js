
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

// Test
const result1 = tail([1, 2, 3, 4]);
assertEqual(result1[0], 2);      // Check first element
