// QUESTION <number>;
/*
Write a program that takes an object
and swaps its keys and values
======
Solution:
=======
- Create a function swapObject which takes in an object
- loop through the object and update swap the value and key.
- return the new object 
*/
function swapObject(anObject){
    for(let key in anObject){
        anObject[anObject[key]] = key;
        delete anObject[key];
    }
    console.log(anObject)
}

swapObject({a: 1, b: 2});
