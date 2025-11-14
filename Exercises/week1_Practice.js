/**
 * =========================================================
 * Week 1 JavaScript Practice 
 * Save as: week1_practice_student.js
 * Run:      week1_practice_student.js
 * ---------------------------------------------------------
 * =========================================================
 */

"use strict";

/* =========================================================
   A) FILL-IN-THE-BLANK
   Replace ONLY the __ with the correct code/value.
   ========================================================= */

let A_name = "Bob"; // used in A7

let A1 = __;     // "hello"
const A2 = __;   // 42
const A3 = __;   // false
const A4 = __;   // Number("11")
const A5 = __;   // Boolean(0)
const A6 = __;   // typeof null
const A7 = __;   // `Hi, ${A_name}!`
const A8 = __;   // "5" + 2
const A9 = __;   // "5" * 2
const A10 = __;  // 10 % 2 === 0 ? "Even" : "Odd"

// console.log(A1, A2, A3, A4, A5, A6, A7, A8, A9, A10);


/* =========================================================
   B) WRITE YOUR OWN CODE (GLOBAL VARIABLES)
   ========================================================= */

// B1: Create a variable age and check if 18 or older.
let age = __;
let isAdult = __;
// console.log(isAdult);


// B2: Create an object called "user" with name, email, and age.
let user = __;
// console.log(user);


// B3: Create an array called "colors" with at least 3 colors.
// Add one new color by using its index.
// Then remove the first color by shifting all other values left.
let colors = ["red", "blue", "green"];
// Example of adding manually:
// colors[3] = "purple";
// Example of removing manually:
// colors[0] = colors[1];
// colors[1] = colors[2];
// colors.length = 2;

// console.log(colors);


// B4: Create two variables for firstName and lastName.
// Combine them into fullName using a template literal.
let firstName = __;
let lastName = __;
let fullName = __;
// console.log(fullName);


// B5: Create a variable score.
// Add 10 to it using += and divide it by 2 using /=.
let score = __;
// your math here
// console.log(score);


// B6: Create a variable "city" and another sentence using interpolation.
let city = __;
let sentence = __;
// console.log(sentence);


// B7: Logical AND (&&) and OR (||)
let checkAnd = __;
let checkOr = __;
// console.log(checkAnd, checkOr);


// B8: Comparison examples
let compare1 = __;  // 5 == "5"
let compare2 = __;  // 5 === "5"
let compare3 = __;  // "b" > "a"
let compare4 = __;  // "A" > "a"
// console.log(compare1, compare2, compare3, compare4);


// B9: Create username and displayName that defaults to "Guest" if username is empty.
let username = __;
let displayName = __;
// console.log(displayName);


// B10: Convert string "123" into a number and multiply by 2.
let convertNum = __;
// console.log(convertNum);


/* =========================================================
   C) MULTIPLE CHOICE
   ========================================================= */

const MCQ = {
  // C1) What is the type of null?
  // a) "null"   b) "undefined"   c) "object"   d) "number"
  C1: __,

  // C2) Which value is truthy?
  // a) ""   b) 0   c) null   d) []
  C2: __,

  // C3) "5" == 5 evaluates to:
  // a) true   b) false   c) TypeError   d) NaN
  C3: __,

  // C4) "5" === 5 evaluates to:
  // a) true   b) false   c) TypeError   d) NaN
  C4: __,

  // C5) Which converts a string to a number explicitly?
  // a) +"42"   b) Number("42")   c) parseInt("42")   d) all of the above
  C5: __,

  // C6) A && B returns:
  // a) true/false only
  // b) the first falsy operand or the last operand
  // c) the first truthy operand or the last operand
  // d) NaN
  C6: __,

  // C7) Which string is greater lexicographically?
  // a) "a" > "B"   b) "B" > "a"   c) equal   d) depends on locale
  C7: __,
};

// console.log(MCQ);
