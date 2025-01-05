// QUESTION 4;
/*
Check if the number 5 exists in the array [1, 2, 3, 4, 5] using the
includes() method.
======
Solution:
=======
- use includes to check if number 5 exists in array
*/

let value = 5;
let someArray = [1, 2, 3, 4, 5];
if(someArray.includes(value)){
    console.log(`${value} exists in the array`);
}else{
    console.log(`${value} doesn't exist in array`);
}