const sumAll = document.querySelector("#sum_all");
const sumMarked = document.querySelector("#sum_marked");
const resetButton = document.querySelector("#reset_button");

function sumOfCells() {
    let cells = document.querySelectorAll(".cell");
    let sum = 0;
    for (let i = 0; i < cells.length; i++) {
        sum += +cells[i].textContent;
    }
    sumAll.textContent = sum;
    return sum;
}

createButton.addEventListener("click", function () {
    return sumOfCells();
})