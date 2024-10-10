let firstNumber = null;
let secondNumber = null;
let operator = "";
let displayValue = null;
let solution = null;

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let invert = (a) => a * (-1);
let percent = (a) => a / 100;

let displayOutput = document.querySelector("#display-output");
displayOutput.textContent = "YUMY # please";

let numberChoices = document.querySelectorAll(".button.number");
let numberChoicesArr = Array.from(numberChoices);

numberChoicesArr.forEach((number) => {
    number.addEventListener("click", () => {
        displayOutput.textContent = +number.textContent;
        displayValue = +number.textContent;
        if (firstNumber === null) {
            firstNumber = displayValue;
            console.log(firstNumber);
        } else {
            secondNumber = displayValue;
            console.log(secondNumber);
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
    } if (firstNumber === null || secondNumber === null) {
        alert("ERROR: please put in a number")
    } 
    console.log(solution);
    displayOutput.textContent = solution;
    return solution;
}

let equalSignChoice = document.querySelector(".button.equality");
equalSignChoice.addEventListener("click", operate);



