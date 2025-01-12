let messageInput = document.querySelector('#message-area');
let wordsCounter = document.querySelector('#words-counter');

let maxCount = 200;

// get the current count of the words
// console.log(maxCount - messageInput.value.length);
// if messageCount > maxCount, then we highlight the excess words with red
function characterCountCheck(e){
    let messageCount = e.target.value.length;
    let charsLeft = maxCount - messageCount;

    if(!(messageCount > maxCount)){
        (charsLeft>1) ? wordsCounter.innerText = `${charsLeft} characters left` : wordsCounter.innerText = `${charsLeft} character left`;
        wordsCounter.style.color = "green";
        messageInput.disabled = false; 
    }else{
        wordsCounter.innerText = `Limit Reached!!`;
        wordsCounter.style.color = "red";
        alert("Limit Reached.... clear some characters.")
    }

}

// attach an eventlistener to messageArea with characterCountCheck callback
messageInput.addEventListener('keydown', (e)=>characterCountCheck(e));