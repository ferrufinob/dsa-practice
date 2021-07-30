//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Need to keep track of every number and number of times it exists (Character Mapping)

// *Brute Force* O(n^2)

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));

// Solve with Hash Tables O(n)
// Loop through and add to a hash table, and check to see if key already exists
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      console.log(map[input[i]]);
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  console.log("end", map);
  return undefined;
}

console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
