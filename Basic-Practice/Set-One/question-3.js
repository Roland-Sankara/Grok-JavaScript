// QUESTION 3;
/*
Write a program that checks if two variables have the same value and
type

======
Solution:
=======
- create 2 variables
- use the of statement to check if the have the same type
- If same type, print: "Same data type", else "Not the Same"
*/

let firstName = "Roland";
let age = 40;
let country = true;

if(typeof firstName === typeof age){
    console.log(`Same Datatype for \n${firstName} & ${age}`);
}
else if(typeof firstName === typeof country){
    console.log(`Same Datatype for \n${firstName} & ${country}`);
}
else if(typeof age === typeof country){
    console.log(`Same Datatype for \n${age} & ${country}`);
}
else{
    console.log(`Different Datatypes for \n${firstName}, ${age} & ${country}`);
}