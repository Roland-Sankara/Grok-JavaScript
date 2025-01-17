// Get the elements
let toggleIcon = document.querySelector('#toggle__icon');
let body = document.querySelector('body');
let section = document.querySelector('section');
localStorage.setItem("ThemeMode", 'light');


toggleIcon.addEventListener('click', ()=>{
    // get the theme
    let theme = localStorage.getItem("ThemeMode");

    if(theme === 'light'){

        toggleIcon.classList.replace("bx-toggle-left", "bx-toggle-right");
        localStorage.setItem("ThemeMode", 'dark');

        // add the dark mode class 
        body.classList.replace("lightTheme", "darkTheme");
        section.classList.replace("lightTheme", "darkTheme");

    }else if(theme === 'dark'){

        toggleIcon.classList.replace("bx-toggle-right", "bx-toggle-left");
        localStorage.setItem("ThemeMode", 'light');

        // add the light mode class 
        body.classList.replace("darkTheme", "lightTheme");
        section.classList.replace("darkTheme", "lightTheme");
    }

})