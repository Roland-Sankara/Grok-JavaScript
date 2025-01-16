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
    else if(count >= 10 && count < 20){
        body.style.backgroundColor = "#9F5255";
    }
    else if(count >= 20 && count < 30){
        body.style.backgroundColor = "#025464";
    }
    else if(count >= 30 && count < 40){
        body.style.backgroundColor = "#4D4C7D";
    }
    else if(count >= 40 && count <= 50){
        body.style.backgroundColor = "##363062";
    }
    else{
        body.style.backgroundColor = "white";
    }
})