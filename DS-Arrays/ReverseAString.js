//Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdna si eman yM iH'

// !My Solutions

// using built-in methods
function reverse1(str) {
  const string = str.split("");
  // need to convert string into array b/c reverse only works on an array.
  console.log(string.reverse().join(""));
  return string.reverse().join("");
}

// for loop decrementing
function reverse2(str) {
  reversedString = "";
  // start at the last character(str.length-1, since index is 0 based)
  // keep going until there are no more characters
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    reversedString += str[i];
  }
  return reversedString;
}
// reverse2("Hi My name is Andrei");

// ! Their Solution

function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmmm that is not good";
  }

  // convert into an array
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  console.log(backwards.join(""));
  return backwards.join("");
}

function reverse02(str) {
  return str.split("").reverse().join("");
}

// more modern, using es6 syntax

const reverse03 = (str) => [...str].reverse().join("");

console.log(reverse("Hi My name is Andrei"));
