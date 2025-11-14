/* =========================
   🧠 PRACTICE EXERCISES: Scope, Conditionals, Switch, Loops
   =========================
   ⚙️ Instructions:
   - Fill in the blanks (_____) in the warm-ups before each section.
   - The SWITCH section is ONLY fill-in-the-blank.
   - Complete the full coding tasks below each section.
   - Use console.log() often to test your results!
*/


/* ================
   1) SCOPE PRACTICE
   ================ */

// 🔹 Warm-Up (Fill in the blanks)
{
  let outer = "Global";
  {
    let inner = "Block";
    console.log("Inside block →", outer); // should log "Global"
    console.log("Inside block →", inner); // should log "Block"
  }
  // console.log(_____) // should cause ReferenceError if uncommented
}

{
   var leaked = "I can escape my block!";
  console.log("Inside block →", leaked);
}
console.log("Outside block →", "Global"); // still works because var is function-scoped


// ✅ Task 1: Create a variable called "outsideVar" in the global scope and set it to "Global".
// Inside a block { }, create a variable "insideVar" set to "Block".
// Log both variables inside the block.
// Then, try logging "insideVar" outside the block — what happens?

// ✅ Task 2: Create a variable with 'var' inside a block and log it both inside and outside.
// Observe how 'var' behaves differently from 'let' and 'const'.




/* ==============================
   2) IF / ELSE & ELSE-IF PRACTICE
   ============================== */

// 🔹 Warm-Up (Fill in the blanks)
let number = 8;
if (number > 10) {
  console.log("Greater than 10");
} else if (number === 10) {
  console.log("Equal to 10");
} else {
  console.log("Less than 10");
}


// ✅ Task 3: Create a variable "temperature".
// Write an if...else if...else chain:
// - If > 90 → "It's hot"
// - Else if between 70 and 90 → "It's nice out"
// - Else → "It's cold"


let temperature = 69;
if (temperature > 90){
  console.log("Its Hot");
  } else if(temperature >= 70){
    console.log("It's nice out");
  } else{
    console.log("It's Cold");
  }
  

// ✅ Task 4: Create a variable called "score" with a value between 0–100.
// Print a letter grade using if...else if...else:
// A (90+), B (80–89), C (70–79), D (60–69), F (below 60).

let score = 60;
if (score >= 90){
  console.log("A");
} else if (score >= 80){
  console.log("B");
} else if (score >=70){
  console.log("C");
}else if (score >=60){
  console.log("D")
}else{
  console.log("F");
}
  


// ✅ Task 5: Create variables "cartTotal" and "points".
// If the cartTotal is >= 100 OR points >= 500, log "You qualify for free shipping!"
// Otherwise, log "No free shipping."

let cartTotal = 99;
let points = 499;
if (cartTotal >= 100 || points >= 500){
  console.log("You qualify for free shipping!")
}else{
  console.log("No free shipping.")
}




/* ======================
   3) SWITCH STATEMENT (Only Fill in the Blanks)
   ====================== */

// 🧩 Fill in the missing pieces so this switch statement runs correctly.
let grade = "C";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("Try harder next time.");
}

// ✅ Hint: Use the proper keywords for starting the switch, stopping a case, and the “else” section.




/* ======================
   4) LOOP PRACTICE
   ====================== */

// 🔹 Warm-Up (Fill in the blanks)
let i = 0;
while (i < 3) {
  console.log("Counting:", i);
  i++;
}

let fruits = ["apple", "pear", "mango"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}


// ✅ Task 8: Create a while loop that counts from 1 to 5 and logs each number.

let i = 1;
while (i <= 5) {
  console.log("Counting:", i);
  i++;
}


// ✅ Task 9: Create a do...while loop that logs "Loop running" 3 times.


// ✅ Task 10: Use a for loop to log the even numbers between 2 and 10.


// ✅ Task 11: Create an array called "names" with at least 4 strings.
// Use a for loop to log each name.

const names = ["Dave", "Phil", "James", "Dan", "Tyrone"];
names.forEach(name => {
    console.log(name);
});

// ✅ Task 12: Using the same "names" array, use a for...of loop to log each name in uppercase.


// ✅ Task 13: Create an array called "numbers" with values [5, 10, 15, 20].
// Use a for...of loop to calculate and log the total sum.


// ✅ Task 14: Create an object called "person" with keys: name, age, and city.
// Use a for...in loop to log each key and value in this format:
// name: "Alice"
// age: 30
// city: "New York"




// ✅ Task 15 (Challenge):
// Create a nested loop that prints out a multiplication table from 1–5.
// Example output:
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 5 x 5 = 25
