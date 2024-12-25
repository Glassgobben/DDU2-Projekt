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

function mostRepetitions(a = numberList()) {
    let mostRepetitions = 0;
    for (let i = 0; i < a.length; i++) {
        if (mostRepetitions < a[i].repetitions) {
            mostRepetitions = a[i].repetitions
        }
    }

    return mostRepetitions;
}

function mostRepeatedNumbers(a = numberList(), b = mostRepetitions()) {
    let numbers = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i].repetitions == b) {
            numbers.push(a[i].number);
        }
    }

    numbers = numbers.toSorted((a, b) => a - b);
    return numbers;
}

function setTag(a = mostRepeatedNumbers()) {
    for (let i = 0; i < cells.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (+cells[i].textContent == a[j]) {
                cells[i].classList.add("most_repeated");
            }
        }
    }

    return;
}

function displayMostRepeated(a = mostRepeatedNumbers(), b = mostRepetitions()) {
    let message = a[0];
    for (let i = 1; i < a.length; i++) {
        message = `${message}, ${a[i]}`;
    }

    let space = " ";
    message = `${message}` + space + `(Repeated ${b} times)`
    repeatedMessage.textContent = message;
}

function displayNotInPlace(a = mostRepeatedNumbers(), b = numberList()) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j].number) {
                b.splice(j, 1);
            }
        }
    }

    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (i != j && b[i] == b[j]) {
                b.splice(j, 1);
            }
        }
    }

    let uncommon = [];
    for (let i = 0; i < b.length; i++) {
        uncommon.push(b[i].number);
    }
    uncommon = uncommon.toSorted((a, b) => a - b);

    let message = "";
    if (uncommon.length > 0) {
        message = uncommon[0];
        for (let i = 1; i < uncommon.length; i++) {
            message = `${message}, ${uncommon[i]}`;
        }
    }

    notInPlaceMessage.textContent = message;
    return;
}

setTag();
displayMostRepeated();
displayNotInPlace();

inputField.addEventListener("keyup", function (a) {
    if (a.key == "Enter") {
        setTag();
        displayMostRepeated();
        displayNotInPlace();
    }

    return;
})

createButton.addEventListener("click", function () {
    setTag();
    displayMostRepeated();
    displayNotInPlace();

    return;
})