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