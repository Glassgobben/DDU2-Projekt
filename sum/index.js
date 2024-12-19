const sumAll = document.querySelector("#sum_all");
const sumMarked = document.querySelector("#sum_marked");
const resetButton = document.querySelector("#reset_button");

function sumOfCells() {
    let sum = 0;
    for (let i = 0; i < cells.length; i++) {
        sum += +cells[i].textContent;
    }
    sumAll.textContent = sum;
    return sum;
}

function cellClickEvent(amount = cells.length) {
    let sum = 0;
    for (let i = 0; i < amount; i++) {
        cells[i].addEventListener("click", function () {
            cells[i].classList.add("clicked");
            sum += +cells[i].textContent;
            sumMarked.textContent = sum;
            return;
        })
    }
}

function removeClicked() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("clicked");
    }
    sumMarked.textContent = "-";
    return;
}

sumOfCells();
cellClickEvent();

inputField.addEventListener("keyup", function () {
    sumOfCells();
    cellClickEvent(findUserInput());
    return;
})

createButton.addEventListener("click", function () {
    sumOfCells();
    cellClickEvent(findUserInput());
    return;
})

resetButton.addEventListener("click", function () {
    removeClicked();
})