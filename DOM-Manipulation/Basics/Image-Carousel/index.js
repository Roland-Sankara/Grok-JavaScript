// access the elements
let imageBox = document.querySelector("#image__box");
let nextBtn = document.querySelector("#next__image");
let prevBtn = document.querySelector("#prev__image");
let currentImage = document.querySelector("#current__image");
let pagination = document.querySelector('#pagination');

// images
let images = ["pexels-jvdm-1543411.jpg", "pexels-pixabay-40803.jpg", "pexels-pixabay-70080.jpg", "pexels-pixabay-247376.jpg"];
let viewportImage = images[0];

// set the paignation

function updateImage(action){
    if(action === "next"){
        let index = images.indexOf(viewportImage) + 1;
        if(images[index]){
            currentImage.setAttribute("src", `./Images/${images[index]}`);
            viewportImage = images[index];
        }else{
            currentImage.setAttribute("src", `./Images/${images[0]}`);
            viewportImage = images[0];
        }
        
    }else{
        let index = images.indexOf(viewportImage) - 1;
        if(images[index]){
            currentImage.setAttribute("src", `./Images/${images[index]}`);
            viewportImage = images[index];
        }else{
            currentImage.setAttribute("src", `./Images/${images[0]}`);
            viewportImage = images[0];
        }
    }
    
}

nextBtn.addEventListener('click', ()=>{
    updateImage("next");
})

prevBtn.addEventListener('click', ()=>{
    updateImage("prev");
})