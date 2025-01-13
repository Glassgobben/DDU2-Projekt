const body = document.querySelector("body");
const header = document.querySelector("header");
const container = document.querySelector(".container");
const gridContainer = document.querySelector("#grid_container");
const cells = document.getElementsByClassName("cell");

function randomNumber(number = 99) {
    let rNumber = Math.floor((number + 1) * Math.random())
    return rNumber;
}

function findUserInput(text = inputField.value) {
    if (text) {
        return text;
    }
}

function createCells(amount = findUserInput()) {
    gridContainer.innerHTML = "";
    for (let i = 0; i < amount; i++) {
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

let div = document.createElement("div");
div.classList.add("container");
body.insertBefore(div, container);

let p = document.createElement("p");
p.textContent = "How many numbers in the grid?";
div.append(p);

let input = document.createElement("input");
input.setAttribute("id", "input_field");
input.type = "text";
input.value = 95;
div.append(input);

let button = document.createElement("button");
button.setAttribute("id", "create_button");
button.textContent = "Create";
div.append(button);

const inputField = document.querySelector("input");
const createButton = document.querySelector("#create_button");

createCells();

inputField.addEventListener("keyup", function (a) {
    if (a.key == "Enter") {
        return createCells();
    }
})

createButton.addEventListener("click", function () {
    return createCells();
})
