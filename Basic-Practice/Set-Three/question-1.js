// QUESTION 3;
/*
Write a program that counts how many times the letter "a" appears in
the string "JavaScript is amazing!"

======
Solution:
=======
- create a function that takes in a word and letter
- create a variable count
- loop through the string and count number of letters
- print the count at the end
*/

function countLetterAppearance(word, char){
    let count = 0;
    for(let letter of word){
        if(letter === char){
            count+=1;
        }
    }
    return `"${char}" appears ${count} times in "${word}"`;
}

console.log(countLetterAppearance("Roland Sankara", 'a'));