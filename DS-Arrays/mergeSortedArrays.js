// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [0,3,4,4,6,30,31]

// !My Solution

function mergeSortedArrays(arr1, arr2) {
  // join both arrays
  // sort methods sorts elements alphabetically, make a method to handle numeric sort
  mergedArray = [...arr1, ...arr2];
  return mergedArray.sort((a, b) => a - b);
}

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// !Their Solution(with a few modifications)
// the Big O of this function is O(a+b) because we loop over both arrays

function mergeSortedArrays2(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  // first check input to check if an array is empty
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  // like a for loop i = 0, j = 0
  while (i < arr1.length || j < arr2.length) {
    // check for undefined or for when we reach the end of the line
    // if array1 is less than array2 then push that element to mergeArray and vice versa
    if (arr2[j] === undefined || arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));
