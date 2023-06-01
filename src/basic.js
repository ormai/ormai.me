// Change theme button

const themeButton = document.getElementById("theme-button")
let currentTheme = localStorage.getItem("theme");

/* Try to load the theme from localStorage. If the key is not set, use the os
 * preference, and if this is not set default to light theme. */
if (currentTheme) {
    setTheme(currentTheme);
} else {
    theme = "light"; // default to light
    if (window.matchMedia && 
        window.matchMedia("(prefers-color-scheme: dark)").matches) {

        theme = "dark"; // use os preference
    }
    setTheme(theme);
}

function setTheme(theme) { // 'theme' can either be "dark" or "light"
    document.documentElement.setAttribute("data-theme", theme); // for CSS
    localStorage.setItem("theme", theme); // save new current theme
}

function changeTheme() {                        // Swith theme
    let t = localStorage.getItem("theme");      // restore from localStorage
    t = (t === "dark") ? "light" : "dark";      // toggle the theme
    setTheme(t);
}

themeButton.addEventListener("click", changeTheme);

// Scroll to top button

const rootElement = document.documentElement
const scrollToTopBtn = document.getElementById("scroll-to-top")
function scrollToTop() {
    rootElement.scrollTo({
        top: 0, // The top right corner of the page
        behavior: "smooth"
    })
}

scrollToTopBtn.addEventListener("click", scrollToTop)
