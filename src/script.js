const openBtn = document.getElementById("menu-open-button");
const closeBtn = document.getElementById("menu-close-button");
const menu = document.getElementById("mobile-menu");
const mainContent = document.getElementById("main-content");

openBtn.addEventListener("click", () => {
    menu.classList.add("open");
    openBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    mainContent.classList.add("blur-active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
    closeBtn.classList.add("hidden");
    openBtn.classList.remove("hidden");
    mainContent.classList.remove("blur-active");
});