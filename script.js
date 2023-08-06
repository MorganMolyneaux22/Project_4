// The entirety of this code and the repository in which it's contained was crafted and developed by Morgan Molyneaux.
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(".active").classList.remove("active");
        document.querySelector(this.getAttribute("href")).classList.add("active");
    });
});


// Toggle light and dark mode theme by detecing click of button o navbar
// Code is a combination of my work, GeekForGeeks and stackoverflow
// Link: https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript/#
// Link: https://stackoverflow.com/questions/11833759/add-stylesheet-to-head-using-javascript-in-body/11833777#11833777
function toggle_theme() {
    var theme_link = document.querySelector('link[href="dark.css"]');
    if (theme_link) {
        theme_link.setAttribute('href', 'light.css');
    } else {
        theme_link = document.createElement('link');
        theme_link.setAttribute('rel', 'stylesheet');
        theme_link.setAttribute('href', 'dark.css');
        document.head.appendChild(theme_link);
    }
}

// Attach a click event listener to the button
var themeToggleBtn = document.getElementById('toggle_theme');
themeToggleBtn.addEventListener('click', toggle_theme);


// Attach a click event listener to the button
// var themeToggleBtn = document.getElementById('toggle_theme');
// themeToggleBtn.addEventListener('click', toggle_theme());


// function toggle_theme(){
//     var theme_link = document.getElementsByTagName('link')[0];
//     if (theme_link.getAttribute('href') == 'new_style.css') {
//         theme_link.setAttribute('href', 'style.css');
//     } else {
//         theme_link.setAttribute('href', 'new_style.css');
//     }
// }