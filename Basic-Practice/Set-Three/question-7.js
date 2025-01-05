// QUESTION 7;
/*
Write a function that reverses a string, e.g., "hello" becomes "olleh".

======
Solution:
=======
- create a function that takes in a string
- create an empty array named backList
- loop through the string as you push the characters at the start the array
- join the array by an empty space
- return the result
*/

function reverseStr(str){
    let backList = [];
    for(let char of str){
        backList.unshift(char);
    }
    // join the array 
    let reversedStr = backList.join('');
    return `${str} is "${reversedStr}"`
}

console.log(reverseStr("Roland"));