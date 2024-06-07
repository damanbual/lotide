
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


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