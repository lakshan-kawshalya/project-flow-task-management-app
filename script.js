// Menu start
const menuTogglerBtn = document.querySelector("#menu-toggle");
const toggleIcon = document.querySelector("#toggle-icon");
const nav = document.querySelector("nav")

function menuToggler() {

    menuTogglerBtn.addEventListener("click", () => {
        nav.classList.toggle('max-h-0');
        nav.classList.toggle('max-h-screen');
        nav.classList.toggle('opacity-0');
        nav.classList.toggle('opacity-100');
        nav.classList.toggle('pointer-events-none');

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
let tabs = document.querySelectorAll(".tabs")

function tabSelector() {

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((tab) => {
                tab.classList.add("border-transparent");
                tab.classList.remove("border-primary");
                tab.classList.remove("text-primary");
                tab.classList.remove("active");
            })

            tab.classList.remove("border-transparent");
            tab.classList.add("border-primary");
            tab.classList.add("text-primary");
            tab.classList.add("active");

            let status = tab.innerHTML.trim();

            loadTaskCards(getDisplayTaskList());

        })
    })


}

function getActiveTab() {
    let text;
    tabs.forEach((tab) => {
        if (tab.classList.contains("active")) {
            text = tab.innerHTML.trim();
        }
    })
    return text;
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
const addTaskDialogModal = document.querySelector("#task-dialog");
const addTaskBtn = document.querySelector("#add-task-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const form = document.querySelector("#form");

function addTaskDialog() {
    const closeAddTaskDialogBtn = document.querySelector("#close-task-dialog-btn");

    addTaskBtn.addEventListener("click", () => {
        addTaskDialogModal.showModal();
    })

    closeAddTaskDialogBtn.addEventListener("click", () => {
        addTaskDialogModal.close();
    })

    cancelBtn.addEventListener("click", () => {
        form.reset();
        addTaskDialogModal.close();
    })

    // Dialog backdrop dismissal
    addTaskDialogModal.addEventListener("click", (event) => {
        if (event.target === addTaskDialogModal) {
            addTaskDialogModal.close();
        }
    });
}

function closeDialog() {
    addTaskDialogModal.close();
    form.reset();
}

// Dialog end

// Card start

function addCardHoverFunctionality() {
    let cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const closeBtn = card.querySelectorAll("i")[0].parentElement;
        const editBtn = card.querySelectorAll("i")[1].parentElement;
        card.addEventListener("mouseenter", () => {
            closeBtn.classList.toggle("lg:invisible")
            editBtn.classList.toggle("lg:invisible")
        })
        card.addEventListener("mouseleave", () => {
            closeBtn.classList.toggle("lg:invisible")
            editBtn.classList.toggle("lg:invisible")
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
    const menu = document.querySelector(".nav-menu");

    window.addEventListener("click", (event) => {
        // Nav menu on window click dismissal
        if (!menuTogglerBtn.contains(event.target) && !menu.contains(event.target)) {
            nav.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');
            nav.classList.remove('max-h-screen', 'opacity-100');
            toggleIcon.classList.add("fa-bars");
            toggleIcon.classList.remove("fa-times");
        }

        // Sort menu on window click dismissal
        if (!sortMenuBtn.contains(event.target) && !sortMenu.contains(event.target)) {
            sortMenu.classList.add("hidden");
        }

        // Dialog backdrop dismissal
        if (!dialog.contains(event.target) && !addTaskBtn.contains(event.target)) {
            closeDialog();
        }

        // Select on window click dismissal
        drpDwnBtns.forEach((drpDwnBtn) => {
            const list = drpDwnBtn.nextElementSibling;
            if (!drpDwnBtn.contains(event.target) && !list.contains(event.target)) {
                list.classList.remove("max-h-40");
                list.classList.add("max-h-0");
            }
        })

        window.addEventListener("keydown", (event) => {
            if (event.key == "Escape") {
                closeDialog();
            }
        })
    });
}

// task card start
const taskContainer = document.querySelector(".task-container")

function loadTaskCards(taskList) {
    taskContainer.innerHTML = "";

    if (taskList.length !== 0) {

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
            let btnText;


            if (task.status === "To Do") {
                statusColor = "bg-purple-400/10 text-purple-400 inset-ring-purple-400/30"
                btnText = "Mark In Progress"
            } else if (task.status === "In Progress") {
                statusColor = "bg-indigo-400/10 text-indigo-400 inset-ring-indigo-400/30"
                btnText = "Mark Completed"
            } else if (task.status === "Completed") {
                statusColor = "bg-green-400/10 text-green-400 inset-ring-green-500/20"
                btnText = "Undo"
            }


            let html = `<div data-id="${task.id}" class="card flex flex-col gap-3 p-5 border border-border-subtle rounded-xl bg-surface/50">
        <div class="flex justify-between">
            <h3 class="card-title text-md font-semibold">${task.name}</h3>
            <div class="flex gap-1">
                <div class="card-delete lg:invisible p-1 hover:bg-red-400/10 text-red-400 lg:text-white lg:hover:text-red-400 rounded-md">
                    <i class="fa-regular fa-trash-can"></i>
                </div>
                <div class="card-edit lg:invisible p-1 hover:bg-blue-400/10 text-blue-400 lg:text-white lg:hover:text-blue-400 rounded-md">
                    <i class="fa-regular fa-pen-to-square"></i>
                </div>
            </div>
        </div>
        <p class="text-sm text-txt-muted">${task.description}</p>
        <div class="flex gap-2">
            <span
                class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium inset-ring ${priorityColor}">${task.priority}</span>
                <span
                class="status-badge inline-flex items-center rounded-md px-2 py-1 text-xs font-medium inset-ring ${statusColor}">${task.status}</span>
        </div>
        <hr class="border-txt-muted">
            <div class="flex justify-between items-center">
                <h3 class="text-sm">${task.dueDate}</h3>
                <button class="card-btn border border-primary/50 bg-primary/30 text-sm rounded px-3 py-1 cursor-pointer">${btnText}</button>
            </div>
    </div>`

            if (!taskContainer.classList.contains("lg:grid-cols-3")) {
                taskContainer.classList.add("lg:grid-cols-3")
            }

            taskContainer.innerHTML += html;
        })
    } else {
        showEmptySpace();
    }

    activateCardsFunctionality();
}

function showEmptySpace() {
    taskContainer.classList.remove("lg:grid-cols-3")

    taskContainer.innerHTML = `<div class="place-self-center flex justify-center items-center h-64">
                    <span class="text-xl text-txt-muted italic">No tasks to show...</span>
                </div>`
}

function addCardBtnFunctionality() {
    const cardBtns = document.querySelectorAll(".card-btn");

    cardBtns.forEach((cardBtn) => {
        cardBtn.addEventListener("click", (e) => {
            const card = e.target.closest(".card");
            const taskId = card.dataset.id;

            updateTaskData(taskId, card);
        })
    })
}

function updateTaskData(id, card) {
    const taskIndex = tasks.findIndex((task) => task.id == id)

    let status;

    if (taskIndex !== -1) {
        status = tasks[taskIndex].status;

        if (status === "To Do") {
            tasks[taskIndex].status = "In Progress";
        } else if (status === "In Progress") {
            tasks[taskIndex].status = "Completed";
        } else if (status === "Completed") {
            tasks[taskIndex].status = "To Do";
        }
    }

    if (getActiveTab() === "All") {
        updateCardUI(card, tasks[taskIndex]);
    } else {
        card.remove();

        if (getStatusCount()[status] === 0) {
            showEmptySpace();
        }
    }

    updateSummaryCard();
}

function getStatusCount() {
    const statusCounts = {
        "To Do": 0,
        "In Progress": 0,
        "Completed": 0
    };

    tasks.forEach(task => {
        statusCounts[task.status]++;
    });

    return statusCounts;
}

function updateCardUI(card, data) {
    const badge = card.querySelector(".status-badge")
    const cardBtn = card.querySelector(".card-btn")
    const cardTitle = card.querySelector(".card-title")

    let status = data.status;

    if (status === "To Do") {
        badge.classList.remove("bg-green-400/10", "text-green-400", "inset-ring-green-500/20")
        badge.classList.add("bg-purple-400/10", "text-purple-400", "inset-ring-purple-400/30")
        cardBtn.innerHTML = "Mark In Progress";
        cardTitle.classList.remove("line-through");
        cardTitle.classList.remove("text-txt-muted");
    } else if (status === "In Progress") {
        badge.classList.remove("bg-purple-400/10", "text-purple-400", "inset-ring-purple-400/30")
        badge.classList.add("bg-indigo-400/10", "text-indigo-400", "inset-ring-indigo-400/30")
        cardBtn.innerHTML = "Mark Completed";
        cardTitle.classList.remove("line-through");
    } else if (status === "Completed") {
        badge.classList.remove("bg-indigo-400/10", "text-indigo-400", "inset-ring-indigo-400/30")
        badge.classList.add("bg-green-400/10", "text-green-400", "inset-ring-green-500/20")
        cardBtn.innerHTML = "Undo";
        cardTitle.classList.add("line-through");
        cardTitle.classList.add("text-txt-muted");
    }

    badge.innerHTML = status;
}

let sortItems = document.querySelectorAll(".sort-item");

const priorityOrder = { "High": 1, "Medium": 2, "Low": 3 };

function sortTask() {
    sortItems.forEach((sortItem) => {

        sortItem.parentElement.addEventListener("click", () => {
            let sortedList;
            if (sortItem.innerHTML === "Date") {
                sortedList = getDisplayTaskList().sort((a, b) => {
                    const dateA = new Date(a.dueDate)
                    const dateB = new Date(b.dueDate)

                    return dateA - dateB;
                })
            } else if (sortItem.innerHTML === "Priority") {
                sortedList = getDisplayTaskList().sort((a, b) => {
                    const priorityA = priorityOrder[a.priority]
                    const priorityB = priorityOrder[b.priority]

                    return priorityA - priorityB;
                })
            } else if (sortItem.innerHTML === "Name") {
                sortedList = getDisplayTaskList().sort((a, b) => a.name.localeCompare(b.name));
            }

            loadTaskCards(sortedList)
        })
    })
}

const searchInput = document.querySelector("#search");

function getDisplayTaskList() {
    const searchTxt = searchInput.value.trim().toLowerCase();
    let activeTab = getActiveTab();

    const filteredTasks = tasks.filter(task => {
        const matchTab = (activeTab === "All") || (task.status === activeTab);

        const matchSearch = task.name.toLowerCase().includes(searchTxt) ||
            task.description.toLowerCase().includes(searchTxt);

        return matchTab && matchSearch;
    });

    return filteredTasks;
}

const summaryCards = document.querySelectorAll(".summary-card");

function updateSummaryCard() {
    const totalTasks = tasks.length;
    const inProgressTasks = getStatusCount()["In Progress"]
    const completedTasks = getStatusCount()["Completed"]

    const overdueTasks = tasks.filter(task => {
        return new Date(task.dueDate) < new Date() && task.status !== "Completed"
    }).length;


    summaryCards.forEach((summaryCard) => {
        const cardHeading = summaryCard.querySelector("h4").innerHTML.trim();
        const numTxt = summaryCard.querySelector("h2");

        if (cardHeading === "Total Tasks") {
            numTxt.innerHTML = totalTasks;
        } else if (cardHeading === "In Progress") {
            numTxt.innerHTML = inProgressTasks;
        } else if (cardHeading === "Completed") {
            numTxt.innerHTML = completedTasks;
        } else if (cardHeading === "Overdue") {
            numTxt.innerHTML = overdueTasks;
        }
    })
}

function handleAddTaskForm() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const description = form.querySelector('textarea').value;
        const dueDate = form.querySelector('input[type="date"]').value;

        const priority = form.querySelectorAll('.select-btn')[0].innerText;
        const status = form.querySelectorAll('.select-btn')[1].innerText;

        const id = crypto.randomUUID();

        const task = {
            id,
            name,
            description,
            priority,
            status,
            dueDate
        };

        tasks.push(task);

        closeDialog();

        loadTaskCards(getDisplayTaskList());
        updateSummaryCard();
        showToast("Task Added successfully", "success");
    })
}

function getIndexOfTask(card) {
    const taskId = card.getAttribute('data-id');

    return tasks.findIndex(task => task.id == taskId);
}

function deleteTask() {
    const deleteBtns = document.querySelectorAll(".card-delete");

    deleteBtns.forEach((deleteBtn) => {

        deleteBtn.addEventListener("click", () => {
            const card = deleteBtn.closest('.card');

            const indexToRemove = getIndexOfTask(card);

            if (indexToRemove > -1) {
                tasks.splice(indexToRemove, 1)

                loadTaskCards(getDisplayTaskList());
                updateSummaryCard();
                showToast("Task deleted successfully", "success");
            }
        })
    })

}

function editTask() {
    const editBtns = document.querySelectorAll(".card-edit");

    editBtns.forEach((editBtn) => {
        const card = deleteBtn.closest('.card');

        const indexToEdit = getIndexOfTask(card);

        addTaskDialogModal

    })
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-div');

    const toast = document.createElement('div');

    let bgColor;
    let icon;

    if (type === "success") {
        bgColor = "bg-green-400"
        icon = "fa-check-circle"
    } else {
        bgColor = "bg-red-400"
        icon = "fa-exclamation-circle"
    }


    toast.className = `${bgColor} text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-toast min-w-[300px]`;

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span class="text-sm font-medium">${message}</span>
        <button class="ml-auto hover:opacity-70" onclick="this.parentElement.remove()">
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(20px)';
        toast.style.transition = 'all 0.5s ease';

        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

function activateSearchInput() {
    searchInput.addEventListener("keyup", () => {
        loadTaskCards(getDisplayTaskList());
    })
}

function activateCardsFunctionality() {
    addCardHoverFunctionality();
    addCardBtnFunctionality();
    deleteTask();
}

function main() {
    menuToggler();
    updateSummaryCard()
    activateSearchInput();
    sortMenuToggler();
    tabSelector();
    customDropdown();
    addTaskDialog();
    handleAddTaskForm();
    loadFAQs(faqs);
    loadTaskCards(tasks)
    deleteTask()
    sortTask();
    windowEvents();
}

main();