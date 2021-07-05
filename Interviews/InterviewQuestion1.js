// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "i"];
//should return false
// ----------------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true

// compare two - arrays - no size limit
// 2 parameters - arrays
// return true or false

// Brute force solution O(a*b)
//! if arrays had same length it would be O(n^2). If there are two arrays of length a & b then it is O(a*b)
//! O(a*b) expresses that you have two parameters that determine complexity. O(n^2) expresses that your complexity only depends on one parameter.

// function containsCommmonItem(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         console.log(array1[i], array2[j]);
//         return true;
//       }
//     }
//   }
//   return false;
// }

// O(a + b) Time Complexity
// O(a) Space Complexity
function containsCommmonItem2(array1, array2) {
  //loop through first array and create object where properties === items in the array
  //can we assume always two parameters?

  let map = {};
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      const item = array1[i];
      map[item] = true;
    }
  }

  // loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}

// In terms of readability

function containsCommmonItem3(array1, array2) {
  return array1.some((item) => array2.includes(item));
}

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
containsCommmonItem3(array1, array2);
