// ========== Function Basics ==========

// 1) Write a function sayHello that logs "Hello, world!" to the console. Call it.
sayHello();
function sayHello(){
}
console.log("Hello, World");

// 2) Write a function greet(name) that takes one parameter and logs "Hello, <name>!".

function greet(name){
    return `Hello, ${name}!`
}
console.log(greet("Jim"));

// 3) Write a function add(a, b) that returns the sum of two numbers. 
//    Call it with arguments 5 and 7, and log the result.

function add (a, b){
return a + b;
}
console.log(add(5, 7));


// 4) Write a function square(num) that returns the square of a number.
//    Test it with 4 and log the result.

function square(num){
    return num * num
};
console.log(square(4));

// 5) Write a function getLength(arr) that takes an array and returns its length.
const names = ["Jim", "Tom", "Hank", "Bill" ];
function getLength(n){
    return n.length
}
console.log(getLength(names))


// ========== Parameters & Arguments ==========

// 6) Write a function getFullName(firstName, lastName) that returns a full name string.
//    Example: getFullName("Alice", "Smith") → "Alice Smith"

function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log (getFullName("Derrick", "Paynter"));

// 7) Write a function multiply(x, y, z) that multiplies three numbers and returns the product.
function multiply(x, y, z){
    return x * y * z;
}
console.log(multiply(2, 4, 8))

// 8) Fix the code: 
   function showMessage(msg){
    console.log(msg);}

// ========== Return & Scope ==========

// 9) Write a function isEven(n) that returns true if the number is even, false otherwise.

function isEven(n){
    return n % 2 === 0;
}
console.log (isEven(6));

// 10) Write a function getDiscount(cartValue) that returns cartValue * 0.9 
//     if cartValue is greater than 100. Otherwise return cartValue.
function getDiscount(cartValue){
    if (cartValue > 100){
        return cartValue *.9
        
    }else{ 
        return cartValue
}
    }
    console.log (getDiscount(101));


// 11) Inside a function, declare a local variable secret = "hidden". 
//     Try logging secret outside the function. What happens?

// ========== Loops + Functions ==========

// 12) Write a function sumArray(arr) that loops through an array and returns the total sum.
function sumArray(arr) {
    let sum = 0;
    for (let value of arr){
        sum += value;
    }
    return sum
}
console.log(sumArray([20, 40, 60, 80]))

// 13) Write a function findMax(arr) that loops through an array and returns the largest number.
let array = [10, 80, 17, 12];
let numbers = [60, 70, 80, 120]
let n = [99, 121, 76, 98]
function findMax(arr){
let max = 0;
for(let num of arr){
    if(num > max){
        max = num
    }
    }
    return max;
};
console.log(findMax(array))
console.log(findMax(numbers))
console.log(findMax(n))

// 14) Write a function printOdds(limit) that logs all odd numbers up to that limit.

// ========== Debugging (Find & Fix Errors) ==========

// 15) What’s wrong here?
    function addTwo(a, b) {
        return a + b;
    }
    console.log(addTwo(5, 10));

// 16) What happens here and why?
    // function test() {
    //     return;
    //     console.log("After return");
    // }
    // test();

// 17) Fix the bug: 
    function greetUser(name) {
        console.log("Hello " + name);
    }
    greetUser("Martin");

// ========== Mini Project ==========
// Write a function getAverageScore(scores) that:
//   - Accepts an array of numbers
//   - Loops through the array to find the total
//   - Returns the average
//   - If the array has a 0, return "Error: invalid score"
// Call it with [80, 90, 100] and log the result.

function getAverageScore(scores){
    let total = 0;
    for(let ele of scores){
        if(ele === 0){
            return "Error: invalid score"
        }
        total += ele
    }
    return total / scores.length
};

console.log(getAverageScore([80, 90, 100]))