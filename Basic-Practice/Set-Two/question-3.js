// QUESTION 3;
/*
Write a function isEven that checks if a given number is even.
======
Solution:
=======
- Create a function that takes in a number
- Use if statement to check number is even
- print number is even or not
*/

function isEven(num){
    if(num%2===0){
        return `${num} is even`;
    }else{
        return `${num} is odd`;
    }
}

console.log(isEven(50));
console.log(isEven(31));