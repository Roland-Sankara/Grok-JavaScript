// QUESTION <number>;
/*
Write a loop to log all key-value pairs of the object {a: 1, b: 2, c: 3}
======
Solution:
=======
- use a for in loop to loop through an object
- print the key and value for each
*/

let someData = {a:1, b:2, c:3};
for(let key in someData){
    console.log(`${key}:${someData[key]}`)
}