function numberList() {
    let repeatedNumbers = [];
    for (let i = 0; i < cells.length; i++) {
        let status = true;
        let object = { number: 0, repetitions: 0 };
        for (let j = 0; j < cells.length; j++) {
            if (cells[i].textContent == cells[j].textContent) {
                object.number = +cells[i].textContent;
                object.repetitions++;
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
    return repeatedNumbers;
}

function mostRepeated() {
    let list = numberList();
    let winner = list[0];
    for (let i = 0; i < list.length; i++) {
        if (winner.repetitions < list[i].repetitions) {
            winner = [list[i]];
        }
    }
    for (let i = 0; i < list.length; i++) {
        if (winner[0].repetitions === list[i].repetitions && winner[0].number != list[i].number) {
            winner.push(list[i]);
        }
    }
    return winner;
}

console.log(mostRepeated());
