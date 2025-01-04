// QUESTION 6;
/*
Extract the word "fun" from the string "Coding is fun" using the
slice() method.
======
Solution:
=======
- create a variable for the string
- find the index of the letter "f"
- use the index as the starting point to slice
- print the extracted string portion
*/

let text = "Coding is fun";
let index = text.indexOf("f");

// slice
let extract = text.slice(index,);
console.log(extract);