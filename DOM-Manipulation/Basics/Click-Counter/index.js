// Get the elements
let display = document.querySelector('#count__display');
let body = document.querySelector('body');
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
    
    if(count < 5 && count > 0){
        body.style.backgroundColor = "#F39E60";
    }
    else if(count >= 5 && count <10){
        body.style.backgroundColor = "#E16A54";
    }
    else if(count >= 10){
        body.style.backgroundColor = "#9F5255";
    }else{
        body.style.backgroundColor = "white";
    }
})