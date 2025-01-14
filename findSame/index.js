const resetButton = document.querySelector("#reset_button");
const clicked = document.getElementsByClassName("clicked");
const copies = document.querySelector("#copies");

function clickCell() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function () {
            let counter = 0;
            if (cells[i].style.backgroundColor != "greenyellow") {
                cells[i].style.backgroundColor = "greenyellow";
            } else {
                cells[i].style.backgroundColor = "";
                copies.textContent = "Click on a number to find copies";
            }
            for (let j = 0; j < cells.length; j++) {
                if (cells[i].textContent == cells[j].textContent) {
                    cells[j].style.backgroundColor = cells[i].style.backgroundColor;
                    counter++;
                }
                if (cells[j].textContent != cells[i].textContent && cells[j].style.backgroundColor == "greenyellow") {
                    cells[j].style.backgroundColor = "";
                }
            }
            if (cells[i].style.backgroundColor == "greenyellow") {
                copies.textContent = `${counter} copies of the number ${cells[i].textContent}`;
            }
        })
    }

    return;
}

function resetButtonEvent() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
    }
    resetMessage();

    return;
}

function resetMessage() {
    return copies.textContent = "Click on a number to find copies";
}

clickCell();

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
    resetMessage();
    return;
})

resetButton.addEventListener("click", function () {
    return resetButtonEvent();
})