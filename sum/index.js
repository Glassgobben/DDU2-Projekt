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
        cells[i].addEventListener("click", function clicked() {
            cells[i].classList.add("clicked");
            sum += +cells[i].textContent;
            sumMarked.textContent = sum;
            const clicked = document.getElementsByClassName("clicked")
            for (let j = 0; j < clicked.length; j++) {
                clicked[j].addEventListener("click", function () {
                    sum -= +clicked[j].textContent;
                    sumMarked.textContent = sum;
                })
            }
            return;
        })
    }
    return;
}

sumOfCells();
cellClickEvent();

function removeClicked() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("clicked");
    }
    sumMarked.textContent = "-";
    return;
}

inputField.addEventListener("keyup", function () {
    sumOfCells();
    cellClickEvent();
    removeClicked()
    return;
})

createButton.addEventListener("click", function () {
    sumOfCells();
    cellClickEvent(findUserInput());
    removeClicked();
    return;
})

resetButton.addEventListener("click", function () {
    removeClicked();
    cellClickEvent();
    return;
})