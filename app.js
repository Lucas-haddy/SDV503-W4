// Simple if/else statement example.

const age = 21;
if (age >= 18) {
    console.log('You are an adult.');
}else {
    console.log('You are a minor.');
}

/* Devon's code snippet below;
const money = 40;

// if / else works better with numbers
if (money >= 4) {
    console.log("can afford monster");
} else {
    console.log(`Can't afford monster, has ${money}`);
}
const hairColour = "black";

if(hairColour === "black") { 
    console.log("japanese");
}else {
    console.log("Kiwi");
}

const currentLight = 'Yellow';

if (currentLight === 'green') {
    console.log("Green");
} else if (currentLight === 'yellow') {
    console.log("Yellow")
} else {
    console.log("Red");
}

// switch works better for strings
if (money >= 4) {
    console.log("can afford monster");
} else {
    console.log(`Can't afford monster, has ${money}`);
}
const hairColour = "black";

if(hairColour === "black") { 
    console.log("japanese");
}else {
    console.log("Kiwi");
}
*/
function sum(numOne, numTwo) {
    return numOne + numTwo; 
}
console.log(sum(2, 6)); // 8

// function sumOfTwoNumbes(num1, num2) {
//     return num1 + num2;
// }

const sumOfTwoNumbes = (num1, num2) => num1 + num2; /* declared a function using an arrow function, which is a more 
concise way to write functions in JavaScript. The function takes two parameters, num1 and num2, and returns their sum. */

console.log(sumOfTwoNumbes(1, 3)); /* logged the result of calling the sumOfTwoNumbes function with the arguments 1 and 3, 
which will output 4 to the console. */

// math operators
function mathOperators(num1, num2) {
    console.log("Addition Outcome =", num1 + num2);
    console.log("Subtraction Outcome =", num1 - num2);
    console.log("Multiplication Outcome =", num1 * num2);
    console.log("Division Outcome =", num1 / num2);
}
mathOperators(10, 5); /* called the mathOperators function with the arguments 10 and 5 which will output the 
results of the four basic math operations (addition, subtraction, multiplication, and division) to the console. */