const repeatedMessage = document.querySelector("#most_repeated");
const notInPlaceMessage = document.querySelector("#not_in_place");

function numberList() {
    let repeatedNumbers = [];
    for (let i = 0; i < cells.length; i++) {

        let object = { number: 0, repetitions: 0 };
        for (let j = 0; j < cells.length; j++) {
            if (cells[i].textContent == cells[j].textContent) {
                object.number = +cells[i].textContent;
                object.repetitions++;
            }
        }

        let status = true;
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
    let mostRepetitions = 0;
    for (let i = 0; i < list.length; i++) {
        if (mostRepetitions < list[i].repetitions) {
            mostRepetitions = list[i].repetitions
        }
    }
    let winner = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].repetitions == mostRepetitions) {
            winner.push(list[i]);
        }
    }
    return winner;
}

function setTag(a = mostRepeated()) {
    for (let i = 0; i < cells.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (+cells[i].textContent == a[j].number) {
                cells[i].classList.add("most_repeated");
            }
        }
    }
    return;
}

function displayMostRepeated() {
    let displayTop = mostRepeated();
    let message = displayTop[0].number;
    for (let i = 1; i < displayTop.length; i++) {
        message = `${message}, ${displayTop[i].number}`;
    }
    let space = " ";
    message = `${message}` + space + `(Repeated ${displayTop[0].repetitions} times)`
    repeatedMessage.textContent = message;
}

function displayNotInPlace(a = mostRepeated(), b = numberList()) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i].number == b[j].number) {
                b.splice(j, 1);
            }
        }
    }
    let uncommon = b;
    console.log(uncommon)
    let indexToRemove = [];
    for (let i = 0; i < uncommon.length; i++) {
        for (let j = 0; j < uncommon.length; j++) {
            if (i != j && uncommon[i] == uncommon[j]) {
                indexToRemove.push(j);
            }
        }
    }
    for (let i = 0; i < indexToRemove.length; i++) {
        uncommon.splice(indexToRemove[i], 1);
    }
    let message = uncommon[0].number;
    for (let i = 1; i < uncommon.length; i++) {
        message = `${message}, ${uncommon[i].number}`;
    }
    notInPlaceMessage.textContent = message;
    return;
}

setTag();
displayMostRepeated();
displayNotInPlace();