const menuToggler = document.querySelector("#menu-toggle");

menuToggler.addEventListener("click", () => {
    const nav = document.querySelector("nav")
    nav.classList.toggle('max-h-0');
    nav.classList.toggle('max-h-screen');
    nav.classList.toggle('opacity-0');
    nav.classList.toggle('opacity-100');
    nav.classList.toggle('pointer-events-none');

    const toggleIcon = document.querySelector("#toggle-icon");
    toggleIcon.classList.toggle("fa-bars");
    toggleIcon.classList.toggle("fa-times");
})

const sortMenu = document.querySelector("#sort-menu");
const sortMenuBtn = document.querySelector("#sort-menu-btn");

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
        tabs.forEach((tab) => {
            tab.classList.add("border-transparent");
            tab.classList.remove("border-primary");
            tab.classList.remove("text-primary");
        })

        tab.classList.remove("border-transparent");
        tab.classList.add("border-primary");
        tab.classList.add("text-primary");
    })
})

let accordions = document.querySelectorAll(".accordion-title")

accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        const accordionDescription = accordion.nextElementSibling;
        const icon = accordion.querySelector("i");

        const isAlreadyOpen = !accordionDescription.classList.contains("hidden");

        accordions.forEach((item) => {
            const itemDesc = item.nextElementSibling;
            const itemIcon = item.querySelector("i");

            itemDesc.classList.add("hidden");

            itemIcon.classList.add("fa-angle-down");
            itemIcon.classList.remove("fa-angle-up");
        })

        if (!isAlreadyOpen) {
            accordionDescription.classList.remove("hidden");

            icon.classList.remove("fa-angle-down");
            icon.classList.add("fa-angle-up");
        }
    })
})