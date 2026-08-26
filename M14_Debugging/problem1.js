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
    console.log('i->', i);
    count += 1;
    console.log(count);
  }
  return count;
}
 
console.log(countUpTo(12)); // Expected: 5 (currently freezes/never finishes)


