// QUESTION 18;
/*
Write a program that takes a string and capitalizes the first letter of
each word.

======
Solution:
=======
- create a function capitalizeString that take it an str
- Split the str into an array and assign to variable strArray
- create a variable result
- loop through strArray and for each element in the array, split and convert first char to upperCase
- then join the array and push to the result variable
- when all is done, return the result
*/

// solution 1
function capitalizeString(str){
    let strArray = str.split(' ');
    let result = [];

    for(let text of strArray){
        // split text
        let textArr = text.split('')
        textArr[0] = textArr[0].toUpperCase();
        // join the text and push to result
        result.push(textArr.join(''));
    }

    // join with space
    return result.join(' ');
}

console.log(capitalizeString("roland sankara"));
console.log(capitalizeString("provides tools and features to visualize your software ideas unlike any other editor out there."));


// Solution 2
function capitalise(str){
    let strArr = str.split(' ');
    return strArr.map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalise("hello world"));