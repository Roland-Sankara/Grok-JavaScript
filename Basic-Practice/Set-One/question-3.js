// QUESTION 3;
/*
Write a program that checks if two variables have the same value and
type

======
Solution:
=======
- create 2 variables
- use the of statement to check if the have the same type and value
- If same type and value, print: "Same data type and value", else "Not the Same type & value"
*/


function checkValueAndType(value1, value2){
    if(value1 === value2){
        console.log(`${value1} & ${value2} have - same type & value`);
    }
    else{
        console.log(`Different values or datatypes`);
    }
}

// case 1:
checkValueAndType("Roland", "roland");
checkValueAndType("Male", "Male");
checkValueAndType(5, "5");
checkValueAndType(5, 5);
