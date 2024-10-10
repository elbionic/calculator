let firstNumber = null;
let secondNumber = null;
let operator = "";
let displayValueFirst = null;
let displayValueSecond = null;
let solution = null;
let stringHolderFirst = "";
let stringHolderSecond = "";
let digitCount = null;
let solutionString = "";

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let invert = (a) => a * (-1);
let percent = (a) => a / 100;

let displayOutput = document.querySelector("#display-output");
displayOutput.textContent = "";

let allClearBtn = document.querySelector("#all-clear");
allClearBtn.addEventListener("click", () => {
    firstNumber = null;
    secondNumber = null;
    operator = "";
    displayValueFirst = null;
    displayValueSecond = null;
    solution = null;
    stringHolderFirst = "";
    stringHolderSecond = "";
    digitCount = null;
    return displayOutput.textContent = "";
});

let numberChoices = document.querySelectorAll(".button.number");
let numberChoicesArr = Array.from(numberChoices);

numberChoicesArr.forEach((number) => {
    number.addEventListener("click", () => {
        if (operator === "" && digitCount < 9) {
            stringHolderFirst += +number.textContent.toString();
            displayValueFirst = +stringHolderFirst;
            displayOutput.textContent = displayValueFirst;
            digitCount = digitCount + 1;
            console.log(stringHolderFirst);
            console.log(displayValueFirst);
            return firstNumber = displayValueFirst
        } if (operator != "") {
            displayOutput.textContent = "";
            stringHolderSecond += +number.textContent.toString();
            displayValueSecond = +stringHolderSecond;
            displayOutput.textContent = displayValueSecond;
            console.log(stringHolderSecond);
            console.log(displayValueSecond);
            return secondNumber = displayValueSecond;
        } else {
            alert("Enough numbers genius! Press an operator please.");
        }
    });
});

let operatorChoices = document.querySelectorAll(".button.operator");
let operatorChoicesArr = Array.from(operatorChoices);

operatorChoicesArr.forEach((item) => {
    item.addEventListener("click", () => {
        operator = item.id;
        console.log(operator);
    });
});

let operate = () => {
    if (operator === "addition") {
        solution = add(firstNumber, secondNumber);
    } if (operator === "subtraction") {
        solution = subtract(firstNumber, secondNumber);
    } if (operator === "multiplication") {
        solution = multiply(firstNumber, secondNumber);
    } if (operator === "division") {
        solution = divide(firstNumber, secondNumber);
    } if (operator === "invert-number") {
        solution = invert(firstNumber);
    } if (operator === "percent") {
        solution = percent(firstNumber);
    } if (operator === null) {
        alert("ERROR: please put in a operator");
    } if (firstNumber === null && secondNumber === null) {
        alert("ERROR: please put in a number")
    }
    console.log(solution);
    solutionString = solution.toString();
    if (solutionString.length > 11 && solution % 1 !== 0) {
        solution = +(Math.round(solution + "e+2") + "e-2");
    } else if (solutionString.length > 11 || solution > 99999999999) {
        alert("The calculation is overfloating the display");
        return displayOutput.textContent = "Overfloat!";
    }
    console.log(solutionString);
    displayOutput.textContent = solution;
    firstNumber = solution;
    secondNumber = null;
    displayValueSecond = null;
    stringHolderSecond = "";
    displayValueFirst = null;
    stringHolderFirst = "";
    return solution;
}

let equalSignChoice = document.querySelector(".button.equality");
equalSignChoice.addEventListener("click", operate);



