// QUESTION 1;
/*
Write a program that calculates the area of a rectangle given length
and width.

======
Solution:
=======
- create a function that takes two parameters; width and length
- Ask a user to provide the values
- check if the values are valid
- print the result
*/

function calcArea(length, width){
    // check for valid values
    if(typeof length === 'number' && typeof width === 'number'){
        let area = length * width;
        return `Given ${length} and ${width},\narea = ${area}`;
    }
    throw new Error("\n\nInvalid values for width or length\n");
}
// prompt user for width & length
let length = +prompt("Enter Length of Rectangle.");
let width = +prompt("Enter Width of Rectangle");
console.log(calcArea(length, width));