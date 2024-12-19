const randomNumberButton = document.querySelector("#random_number_button");
const randomNumberMessage = document.querySelector("#random_number");
const removeButton = document.querySelector("#remove_button")
const removedItemsMessage = document.querySelector("#removed_items")

function highlightCells() {
    removedItemsMessage.textContent = "";
    randomNumberMessage.textContent = randomNumber();
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent == randomNumberMessage.textContent) {
            cells[i].classList.add("highlight");
        } else {
            cells[i].classList.remove("highlight");
        }
    }
    return;
}

function removeCells() {
    let cells = document.querySelectorAll(".cell");
    let status = false;
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent == randomNumberMessage.textContent) {
            cells[i].classList.add("target");
            status = true;
        }
    }
    if (status == false) {
        removedItemsMessage.textContent = "Nothing to remove";
    }
    while (status) {
        let targets = document.querySelectorAll(".target");
        for (let i = 0; i < targets.length; i++) {
            if (targets.length == 1) {
                removedItemsMessage.textContent = `${randomNumberMessage.textContent} removed 1 time`;
            } else {
                removedItemsMessage.textContent = `${randomNumberMessage.textContent} removed ${targets.length} times`;
            }
            targets[i].classList.add("removed");
            targets[i].classList.remove("target");
            targets[i].textContent = "X";
        }
        status = false;
        return;
    }
}

function removeSiteTag() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.add("remove_site");
    }
    return;
}

removeSiteTag();

inputField.addEventListener("keyup", function (a) {
    if (a.key == "Enter") {
        return removeSiteTag();
    }
})

createButton.addEventListener("click", function () {
    return removeSiteTag();
})

randomNumberButton.addEventListener("click", function () {
    return highlightCells();
})

removeButton.addEventListener("click", function () {
    return removeCells();
})
