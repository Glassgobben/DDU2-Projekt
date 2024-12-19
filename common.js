const header = document.querySelector("header");
const inputField = document.querySelector("input");
const createButton = document.querySelector("#create_button")
const gridContainer = document.querySelector("#grid_container");

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
