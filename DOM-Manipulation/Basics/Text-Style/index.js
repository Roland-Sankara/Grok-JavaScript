// import the DOM nodes
let heroSection = document.querySelector('#hero__section');
let colorMenu = document.querySelector("#colors");
let bgColorMenu = document.querySelector("#bg-colors");
let fontMenu = document.querySelector("#fonts");
let fontSizeMenu = document.querySelector("#font-size");

// set the default values
heroSection.style.color = "#E38E49";
heroSection.style.backgroundColor = "#D4EBF8";
heroSection.style.backgroundColor = "#D4EBF8";
heroSection.style.fontFamily = "Lexend, serif";
heroSection.style.fontSize = "30px";

// function to update color
const updateColor = (event)=>{
    let color = event.target.value;
    heroSection.style.color = color;
}

// function to update bg-color
const updateBGColor = (event)=>{
    let bgColor = event.target.value;
    heroSection.style.backgroundColor = bgColor;
}

// function to update font size
const updateFontSize = (event)=>{
    let fontSize = event.target.value;
    heroSection.style.fontSize = fontSize;
}

// function to update font family
const updateFontFamily = (event)=>{
    let font = event.target.value;
    heroSection.style.fontFamily = font;
}


// Add EventListeners to each the menus
colorMenu.addEventListener('change', (e)=>updateColor(e));
bgColorMenu.addEventListener('change', (e)=>updateBGColor(e));
fontMenu.addEventListener('change', (e)=>updateFontFamily(e));
fontSizeMenu.addEventListener('change', (e)=>updateFontSize(e));
