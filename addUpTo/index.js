const inputAdd = document.querySelector("#add_up_to");
const addCellsButton = document.querySelector("#add_cells");

function addCells(sum = inputAdd.value) {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("sum_item");
    }
    for (let i = 0; i < cells.length; i++) {
        let status = false;
        for (let j = 0; j < cells.length; j++) {
            if (+cells[i].textContent + +cells[j].textContent == sum) {
                cells[i].classList.add("sum_item");
                cells[j].classList.add("sum_item");
                status = true;
                break;
            }
        }
        if (status) {
            break;
        }
    }
}

for (let i = 0; i < cells.length; i++) {
    cells[i].style.cursorHover = "";
}

inputAdd.addEventListener("keyup", function (a) {
    if (a.key == "Enter") {
        return addCells();
    }
})

addCellsButton.addEventListener("click", function () {
    addCells();
})