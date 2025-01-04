// QUESTION 5;
/*
Write a while loop to print the first 5 multiples of 3
======
Solution:
=======
- create a variable called multiple with value 0
- create a variable called steps with value 0
- in the while loop, increase count by 3 and increase steps by 1 print. 
*/

let multiple = 0;
let steps = 0;

while(steps<5){
    // get the multiples
    multiple+=3;
    console.log(multiple);
    
    // allow loop to continue
    steps++;
}

