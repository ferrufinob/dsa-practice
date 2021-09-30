// Given two strings, write a function to determine if the second string is an anagram of the first.

function validAnagram(s1, s2) {
  // both strings must of be same length
  if (s1.length !== s2.length) return false;
  // same characters && same frequency
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  //   count number of occurrences
  for (let value of s1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
    console.log(value);
  }
  for (let value of s2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }
  // if there is zero occurrences return false
  //   "for each key in the object"
  for (let key in frequencyCounter1) {
    //   in returns true if a specified key/property is in an object
    if (!key in frequencyCounter2) {
      return false;
    }
    // check if there is a match
    // console.log(frequencyCounter2[key], frequencyCounter1[key]);
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("awesome", "awesom")); // false
// console.log(validAnagram("qwerty", "qeywrt")); // true
// console.log(validAnagram("texttwisttime", "timetwisttext")); // true

// Video Solution

function validAnagram2(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram2("aaz", "zza")); // false
console.log(validAnagram2("awesome", "awesom")); // false
console.log(validAnagram2("qwerty", "qeywrt")); // true
console.log(validAnagram2("texttwisttime", "timetwisttext")); // true
