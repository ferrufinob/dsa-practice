function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("booooo!!");
  }
}
boooo([1, 2, 3, 4, 5]); // 0(1)

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

// creating a new data structure and adding memory, so each item
// is additional memory space.
arrayOfHiNTimes(6); // 0(n)
