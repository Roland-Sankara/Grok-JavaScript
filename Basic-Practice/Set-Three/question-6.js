// QUESTION <number>;
/*
Create a program that combines two arrays [1, 2] and [3, 4] into one
using the concat() method
======
Solution:
=======
- create function that takes 2 arrays
- use concat to combine the arrays
- print the result
*/
function joinArrays(firstArray, secondArray){
    let result = firstArray.concat(secondArray);
    return `Combined array is [${result}]`
}

console.log(joinArrays([12,4], [18, 9]));