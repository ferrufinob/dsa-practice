//  given an array: find pairs that equal to the sum
// const array = [1,2,3,4,4] - sum 8

//naive
function hasPairWithSum(array, sum) {
  let len = array.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (array[i] + array[j] === sum) {
        console.log("sum of", array[i], "and", array[j]);
        return true;
      }
    }
  }
  return false;
}

//Better
function hasPairWithSum2(array, sum) {
  let mySet = new Set();
  const len = array.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has[array[i]]) {
      console.log(mySet);
      return true;
    }
    mySet.add(sum - array[i]);
  }
  console.log(mySet);
  console.log("sum", sum);
  return false;
}
hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);
