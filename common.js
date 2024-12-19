const header = document.querySelector("header");
const userInput = document.querySelector("#user_input");
const createButton = document.querySelector("#create_button")
const gridContainer = document.querySelector("#grid_container")

function randomNumber(number) {
    let rNumber = Math.floor((number + 1) * Math.random())
    return rNumber;
}

function findUserInput(key = userInput.value) {
    if (key) {
        return key;
    }
}

const a = document.createElement("a");
a.setAttribute("href", "../index.html");
a.textContent = "Home";
header.append(a);

createButton.addEventListener("click", function () {
    let cells = findUserInput();
    for (let i = 0; i < cells; i++) {
        let div = document.createElement("div");
        div.classList.add("cell");
        div.textContent = randomNumber(cells);
        gridContainer.append(div);
    }
    return;
})