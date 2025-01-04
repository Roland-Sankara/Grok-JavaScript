// QUESTION 6;
/*
Use a for loop to calculate the factorial of a number n
======
Solution:
=======
- let number be num with 3
- let factorial by a variable as well with 1
- use while loop to to check if num is greater or equal to 1
- inside the loop, increase facto by * num
- reduce num by 1
- at the end, print facto
*/

let userInput = +prompt("Enter Number");
let num = userInput;
let facto = 1;

while(num>=1){
    facto *= num;
    num--;
}
console.log(`Factorial of ${userInput} is equal to ${facto}`);