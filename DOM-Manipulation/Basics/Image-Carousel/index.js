// access the elements
let imageBox = document.querySelector("#image__box");
let nextBtn = document.querySelector("#next__image");
let prevBtn = document.querySelector("#prev__image");
let currentImage = document.querySelector("#current__image");
let pagination = document.querySelector('#pagination');

// images
let images = ["pexels-jvdm-1543411.jpg", "pexels-pixabay-40803.jpg", "pexels-pixabay-70080.jpg", "pexels-hendrikcornelissen-2862070.jpg"];
let viewportImage = images[0];

// set the paignation
let pagList = images.map((image, index)=>{
    let pagIcon = document.createElement('i');
    pagIcon.setAttribute('key', image);

    if(index === 0){
        pagIcon.classList.add(...["bx","bxs-circle"]);
    }else{
        pagIcon.classList.add(...["bx","bx-circle"]);
    }

    pagIcon.addEventListener('click', (e)=>{
        // update current image
        updateImage(image);
    });
    return pagIcon;
});

// add pagicon to pagination
pagination.append(...pagList);


function updateImage(action){
    let allIcons = document.querySelectorAll('#pagination i');

    if(action === "next"){
        let index = images.indexOf(viewportImage) + 1;
        if(images[index]){
            currentImage.setAttribute("src", `./Images/${images[index]}`);
            viewportImage = images[index];
        }else{
            currentImage.setAttribute("src", `./Images/${images[0]}`);
            viewportImage = images[0];
        }
        
    }else if(action === "prev"){
        let index = images.indexOf(viewportImage) - 1;
        if(images[index]){
            currentImage.setAttribute("src", `./Images/${images[index]}`);
            viewportImage = images[index];
        }else{
            currentImage.setAttribute("src", `./Images/${images[0]}`);
            viewportImage = images[0];
        }
    }else{
        currentImage.setAttribute("src", `./Images/${action}`);
        viewportImage = action;
    }

    allIcons.forEach((icon)=>{
        if(viewportImage === icon.getAttribute('key')){
            icon.classList.replace("bx-circle", "bxs-circle");
        }else{
            icon.classList.replace("bxs-circle", "bx-circle");
        }
    })
    
}

nextBtn.addEventListener('click', ()=>{
    updateImage("next");
})

prevBtn.addEventListener('click', ()=>{
    updateImage("prev");
})