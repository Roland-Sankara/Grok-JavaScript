// Access the elements
let input = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let checkboxLabel = document.querySelector("label[for='checkbox']");


function updateVisibility(event){
    let isChecked = checkbox.checked;
    if(isChecked){
        // show the password
        input.type = "text";
        checkboxLabel.innerText = "Hide Password";

    }else{
        // Hide the password
        input.type = "password";
        checkboxLabel.innerText = "Show Password";
    }
}

checkbox.addEventListener("click", (e)=>{
    updateVisibility(e);
})