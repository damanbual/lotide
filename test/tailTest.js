
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test
const result1 = tail([1, 2, 3, 4]);
assertEqual(result1[0], 2);  // Check first element