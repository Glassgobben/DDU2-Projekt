const fillClearedButton = document.querySelector("#fill_cleared");

let cellValues = cellNumbers();

function setTag() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.add("clear_cells");
    }

    return;
}

function cellNumbers() {
    let numbers = [];
    for (let i = 0; i < cells.length; i++) {
        numbers.push(+cells[i].textContent);
    }

    return numbers;
}

function clickEvent() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function () {
            if (cells[i].textContent) {
                cells[i].classList.add("clear_clicked");
                cells[i].textContent = "";
            } else {
                cells[i].classList.remove("clear_clicked");
                cells[i].textContent = cellValues[i];
            }
        })
    }

    return;
}

function pressFillCleared() {
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].textContent) {
            cells[i].classList.remove("clear_clicked");
            cells[i].textContent = cellValues[i];
        }
    }

    return;
}

setTag();
clickEvent();

inputField.addEventListener("keyup", function (a) {
    if (a.key == "Enter") {
        setTag();
        clickEvent();
        cellValues = cellNumbers();
    }

    return;
})

createButton.addEventListener("click", function () {
    setTag();
    clickEvent();
    cellValues = cellNumbers();

    return;
})

fillClearedButton.addEventListener("click", function () {
    return pressFillCleared();
})