// Get the elements
let display = document.querySelector('#count__display');
let btn = document.querySelector('#add__btn');

let count = 0;
// init value of display
display.innerText = `${count} times clicked`;

function increaseCount(){
    return count += 1;
}

btn.addEventListener('click', ()=>{
    increaseCount();
    display.innerText = `${count} times clicked`;
})