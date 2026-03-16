// Menu start

function menuToggler() {
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
}

// Menu end

// Sort start
const sortMenuBtn = document.querySelector("#sort-menu-btn");
const sortMenu = document.querySelector("#sort-menu");

function sortMenuToggler() {

    sortMenuBtn.addEventListener("click", () => {
        sortMenu.classList.toggle("hidden");
    })
}

// Sort end

// Tab start

function tabSelector() {
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

            let status = tab.innerHTML.trim();
            console.log(status);


            if (status === "All") {
                loadTaskCards(tasks)
            } else if (status === "To Do") {
                loadTaskCards(tasks.filter((task) => task.status === "To Do"));
            } else if (status === "In Progress") {
                loadTaskCards(tasks.filter((task) => task.status === "In Progress"));
            } else if (status === "Completed") {
                loadTaskCards(tasks.filter((task) => task.status === "Completed"));
            }
        })
    })
}

// Tab end

// Dropdown start
const drpDwnBtns = document.querySelectorAll(".select-btn");

function customDropdown() {

    drpDwnBtns.forEach((drpDwnBtn) => {
        drpDwnBtn.addEventListener("click", () => {
            const list = drpDwnBtn.nextElementSibling;

            list.classList.toggle("max-h-40");
            list.classList.toggle("max-h-0");
        })
    })
}

// Dropdown end

// Dialog start
const addTaskDialogModal = document.querySelector("#add-task-dialog");
const addTaskBtn = document.querySelector("#add-task-btn");

function addTaskDialog() {
    const closeAddTaskDialogBtn = document.querySelector("#close-add-task-dialog-btn");

    addTaskBtn.addEventListener("click", () => {
        addTaskDialogModal.showModal();
    })

    closeAddTaskDialogBtn.addEventListener("click", () => {
        addTaskDialogModal.close();
    })

    // Dialog backdrop dismissal
    addTaskDialogModal.addEventListener("click", (event) => {
        if (event.target === addTaskDialogModal) {
            addTaskDialogModal.close();
        }
    });
}


// Dialog end

// Card start

function addCardHoverFunctionality() {
    let cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            const closeBtn = card.querySelector("i").parentElement;
            closeBtn.classList.toggle("invisible")
        })
        card.addEventListener("mouseleave", () => {
            const closeBtn = card.querySelector("i").parentElement;
            closeBtn.classList.toggle("invisible")
        })
    })
}
// Card end

// faq start

const faqs = [
    {
        title: "How do I create a new task?",
        desc: 'Click the "Add Task" button at the top of the dashboard. Fill in the task name, description, priority, and status, then click "Create Task" to add it to your board.'
    },
    {
        title: "Can I filter tasks by status?",
        desc: 'Yes! Use the tab bar above the task grid. You can switch between "All", "In Progress", "Completed", and "To Do" to filter your task view instantly.'
    },
    {
        title: "How do I sort my tasks?",
        desc: 'Click the "Sort" button next to the Tasks heading. You can sort by date, priority, or name. The sort applies to whichever tab you currently have selected.'
    },
    {
        title: "What do the priority badges mean?",
        desc: 'Tasks are color-coded by urgency. High (red) tasks need immediate attention, Medium (yellow) tasks should be tackled soon, and Low (green) tasks can be done when convenient.'
    }
];

function loadFAQs(faqList) {
    const faqContainer = document.querySelector("#faq");

    faqList.forEach((faq) => {
        let html = `<div class="border border-txt-muted rounded-xl p-3">
                <div class="accordion-title flex justify-between items-center cursor-pointer">
                    <h4 class="text-lg font-semibold">${faq.title}</h4>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <p class="accordion-description max-h-0 overflow-hidden transition-all duration-500 text-txt-muted">${faq.desc}</p>
            </div>`

        faqContainer.innerHTML += html;

    })

    // accordion start

    let accordions = document.querySelectorAll(".accordion-title")

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", () => {
            const accordionDescription = accordion.nextElementSibling;
            const icon = accordion.querySelector("i");

            const isAlreadyOpen = !accordionDescription.classList.contains("max-h-0");

            accordions.forEach((item) => {
                const itemDesc = item.nextElementSibling;
                const itemIcon = item.querySelector("i");

                itemDesc.classList.replace("max-h-40", "max-h-0");

                itemIcon.classList.replace("fa-angle-up", "fa-angle-down");
            })

            if (!isAlreadyOpen) {
                accordionDescription.classList.replace("max-h-0", "max-h-40");

                icon.classList.replace("fa-angle-down", "fa-angle-up");
            }
        })
    })

    // accordion end
}

// faq end
function windowEvents() {
    const dialog = document.querySelector(".dialog");

    window.addEventListener("click", (event) => {
        // Sort menu on window click dismissal
        if (!sortMenuBtn.contains(event.target) && !sortMenu.contains(event.target)) {
            sortMenu.classList.add("hidden");
        }

        // Dialog backdrop dismissal
        if (!dialog.contains(event.target) && !addTaskBtn.contains(event.target)) {
            addTaskDialogModal.close();
        }

        // Select on window click dismissal
        drpDwnBtns.forEach((drpDwnBtn) => {
            const list = drpDwnBtn.nextElementSibling;
            if (!drpDwnBtn.contains(event.target) && !list.contains(event.target)) {
                list.classList.remove("max-h-40");
                list.classList.add("max-h-0");
            }
        })
    });
}

// task card start

function loadTaskCards(taskList) {
    const taskContainer = document.querySelector(".task-container")
    taskContainer.innerHTML = "";

    taskList.forEach((task) => {

        let priorityColor;

        if (task.priority === "Low") {
            priorityColor = "bg-blue-400/10 text-blue-400 inset-ring-blue-400/30"
        } else if (task.priority === "Medium") {
            priorityColor = "bg-yellow-400/10 text-yellow-500 inset-ring-yellow-400/20"
        } else if (task.priority === "High") {
            priorityColor = "bg-red-400/10 text-red-400 inset-ring-red-400/20"
        }

        let statusColor;

        if (task.status === "To Do") {
            statusColor = "bg-purple-400/10 text-purple-400 inset-ring-purple-400/30"
        } else if (task.status === "In Progress") {
            statusColor = "bg-indigo-400/10 text-indigo-400 inset-ring-indigo-400/30"
        } else if (task.status === "Completed") {
            statusColor = "bg-green-400/10 text-green-400 inset-ring-green-500/20"
        }

        let html = `<div class="card flex flex-col gap-3 p-5 border border-border-subtle rounded-xl bg-surface/50">
        <div class="flex justify-between">
            <h3 class="text-md font-semibold">${task.name}</h3>
            <div class="invisible p-1 hover:bg-red-400/10 hover:text-red-400 rounded-md">
                <i class="fa-regular fa-trash-can"></i>
            </div>
        </div>
        <p class="text-sm text-txt-muted">${task.description}</p>
        <div class="flex gap-2">
            <span
                class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium inset-ring ${priorityColor}">${task.priority}</span>
                <span
                class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium inset-ring ${statusColor}">${task.status}</span>
        </div>
        <hr class="border-txt-muted">
            <div class="flex justify-between items-center">
                <h3 class="text-sm">${task.dueDate}</h3>
                <button class="border border-primary/50 bg-primary/30 rounded px-3 py-1">Task</button>
            </div>
    </div>`

        taskContainer.innerHTML += html;
    })
}


function main() {
    menuToggler();
    sortMenuToggler();
    tabSelector();
    customDropdown();
    addTaskDialog();
    loadFAQs(faqs);
    loadTaskCards(tasks)
    addCardHoverFunctionality();
    windowEvents();
}

main();