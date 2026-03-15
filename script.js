let menuToggler = document.querySelector("#menu-toggle");

menuToggler.addEventListener("click", () => {
    let nav = document.querySelector("nav")
    nav.classList.toggle('max-h-0');
    nav.classList.toggle('max-h-screen');
    nav.classList.toggle('opacity-0');
    nav.classList.toggle('opacity-100');
    nav.classList.toggle('pointer-events-none');

    let toggleIcon = document.querySelector("#toggle-icon");
    toggleIcon.classList.toggle("fa-bars");
    toggleIcon.classList.toggle("fa-times");
})

let sortMenu = document.querySelector("#sort-menu");
let sortMenuBtn = document.querySelector("#sort-menu-btn");

sortMenuBtn.addEventListener("click", () => {
    sortMenu.classList.toggle("hidden");
})

window.addEventListener("click", (event) => {
    if (!sortMenuBtn.contains(event.target) && !sortMenu.contains(event.target)) {
        sortMenu.classList.add("hidden");
    }
});

let tabs = document.querySelectorAll(".tabs")

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab_in) => {
            tab_in.classList.add("border-transparent")
            tab_in.classList.remove("border-primary")
            tab_in.classList.remove("text-primary")
        })

        tab.classList.remove("border-transparent")
        tab.classList.add("border-primary")
        tab.classList.add("text-primary")
    })
})