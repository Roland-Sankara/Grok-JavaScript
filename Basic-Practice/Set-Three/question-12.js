// QUESTION 12;
/*
Write a program that filters out all numbers greater than 10 from an
array and returns the result
======
Solution:
=======
- create an array nums with somes nums
- create an new array for result
- use the array filter method to get all number greater than 10
- print the result
*/
let arr = [61, 30, 1, 3, 5, 10, 12, 6];
let result;
result = arr.filter((num)=>!(num>=10));
console.log(result);