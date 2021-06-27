// what is the Big O of the below function? (Hint, you may want to go line by line)

function funChallenge(input) {
  let a = 10; // O(1), only running once
  a = 50 + 3; // O(1), only running once

  // O(n), loops are linear time
  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n), depends on how big our input is
    let stranger = true; // O(n), runs as many times as this loop happens
    a++; //O(n), depends on the input
  }
  return a; //O(1), only runs when the function gets called
}

// BIG O(3 + 4n) --> O(n)
