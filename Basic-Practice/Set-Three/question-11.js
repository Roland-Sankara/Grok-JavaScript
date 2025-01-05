// QUESTION 11;
/*
Develop a function findMinMax that takes
an array of numbers and returns an object with the smallest and largest
numbers.
======
Solution:
=======
- create a function calledn findMinMax which takes in an array of nums
- create a variable min and max
- loop through and check it current num is greater than max, if so, assign max with current value
- loop through and check it current num is less than min, if so, assign min with current value
- return an object with {min: (min variable), max: (max variable)}
*/

function findMinMax(arr){
    let minNum = arr[0];
    let maxNum = arr[0];

    for(let num of arr){
        if(num < minNum){
            minNum = num;
        }

        if(num > maxNum){
            maxNum = num;
        }
    }

    return {min: minNum, max: maxNum}
}

console.log(findMinMax([1,2,8,4,5,6]));