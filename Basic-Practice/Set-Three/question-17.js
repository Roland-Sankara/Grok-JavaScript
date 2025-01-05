// QUESTION 17;
/*
Create a function that removes duplicate values from an array
======
Solution:
=======
- create a frequency counter for the values in an array. 
- create a result array
- loop through arr and for each element, check if it doesn't exist in the result array
- if it doesn't add it to the result array, else ignore it
*/
function clearDuplicates(arr){
    let result = [];
    for(let num of arr){
        if(!result.includes(num)){
            result.push(num);
        }
        continue;
    }
    return `New Array is [${result}]`;
}

console.log(clearDuplicates([1,2,2,3, 4,5,3]));
