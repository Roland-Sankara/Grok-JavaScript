// QUESTION 16;
/*
Write a program that calculates
the frequency of each character in a string and returns the result as an
object.
======
Solution:
=======
- create a function that takes in a string
- create an empty object
- loop through string and for each value, increase count in object or add it to the object with value of 1
- when done, return the value of object
*/

function freqOfChars(str){
    let result = {};

    for(let char of str){
        // add it to the obj
        if(result.hasOwnProperty(char)){
            result[char] = (result[char] + 1);
        }else{
            result[char] = 1;
        }
    }

    console.log(result);
} 

freqOfChars("Roolannnnnd")