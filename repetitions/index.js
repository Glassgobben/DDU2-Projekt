let repeatedNumbers = [];
for (let i = 0; i < cells.length; i++) {
    let status = true;
    let object = { number: 0, repetitons: 0 };
    for (let j = 0; j < cells.length; j++) {
        if (cells[i].textContent == cells[j].textContent) {
            object.number = +cells[i].textContent;
            object.repetitons++;
        }
    }
    if (status) {
        repeatedNumbers.push(object)
        status = false;
    }
}

for (let i = 0; i < repeatedNumbers.length; i++) {
    for (let j = 0; j < repeatedNumbers.length; j++) {
        if (i != j && repeatedNumbers[i].number == repeatedNumbers[j].number) {
            repeatedNumbers.splice(j, 1);
        }
    }
}

console.log(repeatedNumbers)