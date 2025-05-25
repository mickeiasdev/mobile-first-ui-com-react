const header = document.getElementById("header");
const menu = document.querySelector(".menu");

const hamburger = document.createElement("i");
hamburger.classList.add("fa-solid", "fa-bars");

hamburger.addEventListener("click", () => {
    const visivel = menu.style.display === "flex";
    menu.style.display = visivel ? "none" : "flex";
});

function toggleHamburger() {
    if (window.innerWidth <= 768) {
        header.appendChild(hamburger);
        menu.style.display = "none";
    } else {
        if (header.contains(hamburger)) {
            header.removeChild(hamburger);
            menu.style.display = "flex";
        }
    }
}

document.addEventListener("DOMContentLoaded", toggleHamburger);

window.addEventListener("resize", toggleHamburger);
