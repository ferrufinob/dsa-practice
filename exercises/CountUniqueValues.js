//  accepts a sorted array, and counts the unique values in the array
// there cam be negative numbers in the arraym but it will always be sorted

function countUniqueValues(array) {
  if (array.length === 0) return 0;

  let count = 1;
  let pointer1 = 0;
  let pointer2 = pointer1 + 1;

  while (pointer2 < array.length) {
    if (array[pointer1] !== array[pointer2]) {
      count++;
    }
    pointer1 = pointer2;
    pointer2++;
  }
  return count;
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
