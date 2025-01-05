// QUESTION 10;
/*
Write a program to check if two arrays are equal (contain the same
elements in the same order). 
======
Solution:
=======
- create a function that takes 2 arrays
- Check if the arrays have the same length
- they if do; loop through and check if they have the same values in the same order
- if they don't they are not equal
*/

function checkArrayMatch(arr1, arr2){
    if(arr1.length === arr2.length){

        for(let arr1Elem of arr1){
            let currIndex = arr1.indexOf(arr1Elem);
            
            if(arr1Elem === arr2[currIndex]){
                console.log(arr1Elem,arr2[currIndex]);
            }else{
                return "Arrays are not equal";
            }
        }
        return "Arrays are equal!!";
    }else{
        return "Arrays are not equal";
    }
}

console.log(checkArrayMatch([1,2], [1,2]));