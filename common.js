const header = document.querySelector("header");
const inputField = document.querySelector("#input_field");
const createButton = document.querySelector("#create_button")
const randomNumberButton = document.querySelector("#random_number_button");
const randomNumberMessage = document.querySelector("#random_number");
const removeButton = document.querySelector("#remove_button")
const removedItemsMessage = document.querySelector("#removed_items");
const gridContainer = document.querySelector("#grid_container")

function randomNumber(number = 99) {
    let rNumber = Math.floor((number + 1) * Math.random())
    return rNumber;
}

function findUserInput(text = inputField.value) {
    if (text) {
        return text;
    }
}

function createCells() {
    let cells = findUserInput();
    gridContainer.innerHTML = "";
    for (let i = 0; i < cells; i++) {
        let div = document.createElement("div");
        div.classList.add("cell");
        div.textContent = randomNumber();
        gridContainer.append(div);
    }
    return;
}

function highlightCells() {
    removedItemsMessage.textContent = "";
    randomNumberMessage.textContent = randomNumber();
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent == randomNumberMessage.textContent) {
            cells[i].classList.add("highlight");
        } else if (cells[i].textContent == "X") {
            cells[i].classList.add("highlight");
        } else {
            cells[i].classList.remove("highlight");
        }
    }
    return;
}

function removeCells() {
    let cells = document.querySelectorAll(".cell");
    let status = false;
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent == randomNumberMessage.textContent) {
            cells[i].classList.add("target");
            status = true;
        }
    }
    if (status == false) {
        removedItemsMessage.textContent = "Nothing to remove";
    }
    while (status) {
        let targets = document.querySelectorAll(".target");
        for (let i = 0; i < targets.length; i++) {
            removedItemsMessage.textContent = `${randomNumberMessage.textContent} removed ${targets.length} times`;
            targets[i].textContent = "X";
        }
        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.remove("target");
        }
        status = false;
        return;
    }
}

const a = document.createElement("a");
a.setAttribute("href", "../index.html");
a.textContent = "Home";
header.append(a);

inputField.addEventListener("keyup", function (a) {
    if (a.key == "Enter") {
        return createCells();
    }
})

createButton.addEventListener("click", function () {
    return createCells();
})

randomNumberButton.addEventListener("click", function () {
    return highlightCells();
})

removeButton.addEventListener("click", function () {
    return removeCells();
})