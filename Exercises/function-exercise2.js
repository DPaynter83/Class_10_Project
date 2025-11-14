// ==================================

// 0.1) Write a simple function statement called sayHello 
//      that logs "Hello World" when called. Call the function.

// 0.2) Write a function statement called addTwoNumbers that 
//      takes two numbers and logs their sum. Call it with (3, 4).
function addTwoNumbers(a, b){
return a + b;
}
console.log(addTwoNumbers(3, 4));

// 0.3) Write a function statement called favoriteColor that 
//      accepts one parameter (color) and logs "My favorite color is X".


function favoriteColor(c){
    return `My favorite color is ${c}`;
}
console.log(favoriteColor("black"))


// 0.4) Create a function called double that accepts a number and 
//      returns that number multiplied by 2. Save the result to a variable and log it.
function double(n){
  return n * 2;
}
console.log (double(8));
// ================= Function Expressions =================

// 1) Write a function expression stored in a variable called addNumbers 
//    that returns the sum of two numbers. Call it with (5, 7).
function addNumbers(a, b){
  return a + b 
}
console.log (addNumbers(5, 7))

// 2) Convert this function statement into a function expression:
   let greet= function(n) {
       return `Hello,  ${n}`;
   }
   console.log(greet("Jim"))

// 3) Why does this code throw an error? Fix it.
   
   let square = function(num) {
       return num * num;
   };
console.log(square(4));

// ================= Synchronous Callbacks =================

// 4) Write a function called doTwice that takes a callback function 
//    and calls it two times.
function doTwice(fn) {
  fn();
  fn();
}
doTwice(() => console.log("Sky"));

// 5) Write a function called customLog that accepts a string and a callback. 
//    The callback should decide HOW the string is logged (uppercase, lowercase, etc.).


// ================= Asynchronous Callbacks =================

// 6) Use setTimeout to log "This shows after 2 seconds" with an arrow function.

// 7) Write a function that logs the numbers 1 through 5 using setInterval. 
//    Stop the interval after 5 seconds.

// 8) Debug: What’s wrong with this code?
//    setTimeout(console.log("Runs later"), 2000);


// ================= Arrow Functions =================

// 9) Rewrite this function expression as an arrow function:
   let multiply = function(a, b) {
       return a * b;
   };
   multiply(a, b) => console.log(2, 5)

// 10) Write an arrow function called square that takes one parameter and returns its square.

// 11) Write an arrow function with no parameters that logs "No parameters here!".

// 12) Fix the bug: 
    let subtract = (a,b) => {
        return a - b;
    };
    console.log(subtract(10, 5)); // Should log 5


// ================= Mini Project =================
// Create a simple "timer" program with setInterval:
// - Every second, log "Timer: X seconds"
// - After 5 seconds, stop the timer
