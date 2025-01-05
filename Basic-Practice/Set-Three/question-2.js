// QUESTION 2;
/*
Create a function sumArray that takes an array of numbers and returns
their sum
======
Solution:
=======
- create a function sumArray with param = list
- check if the it's an array
- create a variable named sum
- loop through the array and for each number, increase sum by that number
- in the loop, throw error if any of the values is not a number
- Then print the output
*/
function sumArray(list){
    let sum = 0;
    if(list.length >= 1 && typeof list === 'object'){
        console.log("Work")
        for(let num of list){
            if(typeof num === 'number'){
                sum+=num;
            }else{
                throw new Error(`\n\nArray element ${num} should be a number`); 
            }
        }
        return `Sum of nums in [${list}] is = ${sum}`;
    }else{
        throw new Error(`\n\nArgument "${list}" is not an array`);
    }
}

// Should fail with error.
// sumArray("me");

// Should pass
console.log(sumArray([4,5]));