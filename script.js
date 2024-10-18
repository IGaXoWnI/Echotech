const icon = document.getElementById("moon");
const icons = document.querySelectorAll(".icon");
const bars = document.querySelectorAll(".bar");
const cards = document.querySelectorAll(".card");



icon.onclick = function() {
    document.body.classList.toggle("dark_theme");

    if (document.body.classList.contains("dark_theme")) {
        icon.src = "../assets/Icon/sun.png"; 
        icons.forEach((icon) => {
            icon.src = "../assets/Icon_light.svg"; 
        });
        bars.forEach((bar) => {
           bar.classList.add("bar_color");
        });
        cards.forEach((card) => {
           card.classList.add("hover_dark");
        });
        localStorage.setItem("darkMode", "enabled");  
    } else {
        icon.src = "../assets/Icon/moon.png"; 
        icons.forEach((icon) => {
            icon.src = "../assets/Icon.svg"; 
        });
        bars.forEach((bar) => {
           bar.classList.remove("bar_color");
        });
        cards.forEach((card) => {
           card.classList.remove("hover_dark");
        });
        localStorage.setItem("darkMode", "disabled");  
    }
};

   
    if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark_theme");
    icon.src = "../assets/Icon/sun.png"; 
    icons.forEach((icon) => {
        icon.src = "../assets/Icon_light.svg"; 
    });
    bars.forEach((bar) => {
        bar.classList.add("bar_color");
    });
    cards.forEach((card) => {
        card.classList.add("hover_dark");
    });
}

const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav_menu");
hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   nav_menu.classList.toggle("active");
});