// QUESTION <number>;
/*
Write a program that checks if a number is positive, negative, or zero
======
Solution:
=======
- create a variable called number
- ask user to suggest a number
- use an if statement to check if the number is positive
- check if it's negative
- check if it's zero
- for each instance, print the result
*/

let number;
number = +prompt("Enter a number of your choice");

if(number > 0){
    console.log(`${number} is a positive number.`);
}
else if(number < 0){
    console.log(`${number} is a negative number`);
}
else if(number === 0){
    console.log(`Number is Zero`);
}
else{
    throw new Error("\n\nNumber format is invalid\n");
}