// QUESTION 13;
/*
Build a function that takes a string and checks if it’s a palindrome (the
same forwards and backward)

======
Solution:
=======
- create a palindromeCheck function which takes in a string.
- reverse the string by converting it to an array, then use use the reverse array method
- join the array to get the reversed string
- check if reveresed string is equal to the original string 
*/

function palindromeCheck(text){
    let reveresedStr = text.split('').reverse().join('');
    if(reveresedStr === text){
        return `"${text}" is a palindrome`;
    }else{
        return `"${text}" is NOT a Palindrome`;
    }
}

console.log(palindromeCheck("racecar"));
console.log(palindromeCheck("name"));

