// QUESTION <number>;
/*
Write a function findMax that returns the largest number from an array
of numbers.

======
Solution:
=======
- create a function findMax which takes in an Array of numbers
- Create a variable named maxNum
- Loop through, and assign the 1st num to be maxNum
- in each iteration, check if the current num is greater than maxNum, if so, reassign maxNum to have currentNum
*/

function findMax(listOfNums){
    let maxNum = listOfNums[0];
    for(let num of listOfNums){
        if(num > maxNum){
            maxNum = num;
        }
    }
    return `MaxNum in [${listOfNums}] is = ${maxNum}`;
}

console.log(findMax([1,4,2]));
console.log(findMax([14,2]));        
console.log(findMax([2,3,4,7]));        