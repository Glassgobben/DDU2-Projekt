const resetButton = document.querySelector("#reset_button");

function clickCell() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function () {
            if (cells[i].style.backgroundColor != "turquoise") {
                cells[i].style.backgroundColor = "turquoise";
            } else {
                cells[i].style.backgroundColor = "";
            }
            for (let j = 0; j < cells.length; j++) {
                if (cells[i].textContent == cells[j].textContent) {
                    cells[j].style.backgroundColor = cells[i].style.backgroundColor;
                }
                if (cells[j].textContent != cells[i].textContent && cells[j].style.backgroundColor == "turquoise") {
                    cells[j].style.backgroundColor = "";
                }
            }
        })
    }

    return;
}

clickCell()

inputField.addEventListener("keyup", function (a) {
    if (a.key == "Enter") {
        createCells();
        clickCell()
    }

    return;
})

createButton.addEventListener("click", function () {
    createCells();
    clickCell();
    return;
})

resetButton.addEventListener("click", function () {
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";;
    }

    return;
})