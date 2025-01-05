// QUESTION <number>;
/*
Write a function that takes a number and an array, checks if the
number exists in the array, and returns a message "Found" or "Not
Found"

======
Solution:
=======
- create a function findNum
- takes in 2 params; num & array
- loop through the array to find and for each element, check it matches num
- if a match is made, we print "Found" else "Not Found"
*/

function findNum(num, arr){
    for(let element of arr){
        if(element === num){
            return "Found";
        }
    }
    return "Not Found";
}
console.log(findNum(4, [2,1,3]));