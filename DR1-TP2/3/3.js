const menuIcon = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});
