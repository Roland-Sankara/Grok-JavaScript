// QUESTION <number>;
/*
Create a function multiplyNumbers that takes an array of numbers and
multiplies all the numbers together. 
======
Solution:
=======
- create a function productOfArray with param = list
- check if the it's an array
- create a variable named product
- loop through the array and for each number, increase by multiplying by number
- in the loop, throw error if any of the values is not a number
- Then print the output
*/
function productOfArray(list){
    let product = 1;
    if(list.length >= 1 && typeof list === 'object'){
        for(let num of list){
            if(typeof num === 'number'){
                product*=num;
            }else{
                throw new Error(`\n\nArray element ${num} should be a number`); 
            }
        }
        return `Product of al nums in [${list}] is = ${product}`;
    }else{
        throw new Error(`\n\nArgument "${list}" is not an array`);
    }
}

// Should fail with error.
// productOfArray("me");

// Should pass
console.log(productOfArray([5,6]));