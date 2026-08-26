/* let a = '10'
let b = 5

let c = a+b;
console.log(typeof c); */

function sayHi(name) {
  console.log("Hi, " + name )
}
 
sayHi("Mira");

let words = 'hello world';
console.log(words);
console.log(words.toUpperCase()); // find the bug



// Bug: find why score = 50 doesn't return "Pass"
 
function checkScore(score) {
  if (score >= 50) {
    return "Pass";
  }
    return "Fail";
}
 
console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
console.log(checkScore(40)); // Expected: "Fail"



// Bug: this loop never ends — find the missing piece
 
function countUpTo(n) {
  let count = 0;
 
  for (let i = 1; i <= n; i++) { // something is missing here
    // console.log('i->', i);
    count += 1;
    // console.log(count);
  }
  return count;
}
 
// console.log(countUpTo(12)); // Expected: 5 (currently freezes/never finishes)


// Bug: find why this doesn't return the first element
 
function getFirstElement(arr) {
  return arr[0]; // find the bug
}
 
console.log(getFirstElement([10, 20, 30])); // Expected: 10 (currently returns 20)



// Bug: find why the result comes out negative
 
function subtract(a, b) {
  return a - b ; // find the bug
}
 
console.log(subtract(10, 3)); // Expected: 7 (currently returns -7)


// Bug: explain this line out loud — what does str.length actually equal for ""?
 
function isEmpty(str) {
  if (str.length === 0) { // find the bug
    return true;
  } else {
    return false;
  }
}
 
console.log(isEmpty(""));  // Expected: true
console.log(isEmpty("hi")); // Expected: false



// This code has TWO bugs. Fix one, re-run, then find the next.
 
function getOddNumbers(numbers) {
  let odds = [];
 
  for (let i = 0; i < numbers.length; i++) { // bug #1 is here
    if (numbers[i] % 2 === 1) {                  // bug #2 is here
      odds.push(numbers[i]);
    }
  }
 
  return odds;
}
 
console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // Expected: [1, 3, 5]


// Apply the full debugging process to find this bug
 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
 
  for (let i = 0; i <= str.length; i++) { // find the bug
    if (vowels.includes(str[i])) {
      count = count + 1;
    }
  }
 
  return count;
}
 
console.log(countVowels("apple")); // Expected: 3




function celsiusToFahrenheit(celsius) {
  let far = (celsius * (9 / 5)) + 32; // find the bug
  return far;
}
 
console.log(celsiusToFahrenheit(0)); // Expected: 32


function sumArray(numbers) {
  let total = 0;
 
  for (let i = 0; i < numbers.length; i++) { // find the bug
    total = total + numbers[i];
  }
 
  return total;
}
 
console.log(sumArray([1, 2, 3, 4])); // Expected: 10



function repeatString(str, times) {
  let result = "";
 
  for (let i = 0; i < times; i++) {
    result += str; // find the bug
  }
 
  return result;
}
 
console.log(repeatString("ab", 3)); // Expected: "ababab"


function updateAge(person, newAge) {
  person.age = newAge; // find the bug
  return person;
}
 
console.log(updateAge({ name: "Lee", age: 20 }, 21));
// Expected: { name: "Lee", age: 21 }

