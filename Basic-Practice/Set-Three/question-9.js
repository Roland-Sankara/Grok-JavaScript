// QUESTION <number>;
/*
Create a function that accepts a string and counts how many vowels (a,
e, i, o, u) it contains

======
Solution:
=======
- create a function called countVowels with str as parameter
- create an array for vowels
- create a nested loop; vowels in the outer and given array inner
- create a count variable to record the count
- use condition to check is vowel is equal to an element in the array
*/

function countVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let vowel of vowels){
        for(let letter of str){
            if(vowel === letter){
                count+=1;
            }
        }
    }

    return `${count} vowels in "${str}"`;
}

console.log(countVowels("Rolaandi"));