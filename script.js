let firstNumber = null;
let secondNumber = null;
let operator = "";
let displayValueFirst = null;
let displayValueSecond = null;
let solution = null;
let stringHolderFirst = "";
let stringHolderSecond = "";
let digitCountFirst = null;
let digitCountSecond = null;
let solutionString = "";
let dotString = ".";
let pressedOperator = false;

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
    digitCountFirst = null;
    digitCountSecond = null;
    return displayOutput.textContent = "";
});

let numberChoices = document.querySelectorAll(".button.number");
let numberChoicesArr = Array.from(numberChoices);

numberChoicesArr.forEach((number) => {
    number.addEventListener("click", () => {
        if (operator === "" && digitCountFirst < 9) {
            stringHolderFirst += +number.textContent.toString();
            displayValueFirst = +stringHolderFirst;
            displayOutput.textContent = displayValueFirst;
            digitCountFirst = digitCountFirst + 1;
            console.log(stringHolderFirst);
            console.log(displayValueFirst);
            return firstNumber = displayValueFirst;
        } else if (operator != "" && digitCountSecond < 9) {
            operatorChoicesArr.forEach((item) => {
                item.classList.remove("active");
            });
            displayOutput.textContent = "";
            stringHolderSecond += +number.textContent.toString();
            displayValueSecond = +stringHolderSecond;
            displayOutput.textContent = displayValueSecond;
            digitCountSecond = digitCountSecond + 1;
            console.log(stringHolderSecond);
            console.log(displayValueSecond);
            return secondNumber = displayValueSecond;
        } else {
            alert("Enough numbers genius! Press an operator please.");
        };
    });
});

let operatorChoices = document.querySelectorAll(".button.operator");
let operatorChoicesArr = Array.from(operatorChoices);
console.log(operatorChoices);
console.log(operatorChoicesArr);

operatorChoicesArr.forEach((item) => {
    item.addEventListener("click", () => {
        operatorChoicesArr.forEach((item) => {
            if ([...item.classList].includes("active")) {
                item.classList.remove("active");
            }
        });
        item.classList.add("active");

        if (firstNumber === null && secondNumber === null) {
            alert("Please type in a number before your first operator");
            return operator = "";
        }

        if (operator != "" && firstNumber != null && secondNumber != null) {
            operate();
        }
        operator = item.id;
        if (firstNumber != null && (operator === "invert-number" || operator === "percent")) {
            operate();
        }
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
        if (secondNumber === 0) {
            alert("Don't divide by 0 Hero")
            solution = "Don't divide by 0 Hero";
        } else {
            solution = divide(firstNumber, secondNumber);
        }
    } if (operator === "invert-number") {
        solution = invert(firstNumber);
    } if (operator === "percent") {
        solution = percent(firstNumber);
    } if (operator === null) {
        alert("ERROR: please put in a operator");
    } if (firstNumber === null && secondNumber === null) {
        alert("ERROR: please put in a number")
    }
    if (solution === null) {
        alert("ERROR: invalid operation");
        solution = "NonSense"
    }
    solutionString = solution.toString();
    if (solutionString.length > 11 && solution % 1 !== 0) {
        solution = +(Math.round(solution + "e+9") + "e-9");
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




const dotSymbol = document.querySelector(".button.dot");
dotSymbol.addEventListener("click", insertDot = () => {
    if (firstNumber === null && secondNumber === null) {
        alert("Inserting a dot currently not possible!");
    } else if (firstNumber != null && secondNumber === null) {
        stringHolderFirst += dotString;
        displayValueFirst = +stringHolderFirst;
        displayOutput.textContent = displayValueFirst;
        console.log(stringHolderFirst);
        console.log(displayValueFirst);
        return firstNumber = displayValueFirst;
    } else if (firstNumber != null && secondNumber != null) {
        stringHolderSecond += dotString;
        displayValueSecond = +stringHolderSecond;
        displayOutput.textContent = displayValueSecond;
        console.log(stringHolderSecond);
        console.log(displayValueSecond);
    } else {
        alert("ERROR: please refresh page!");
    }
});


const undoBtn = document.querySelector("#backspace");
undoBtn.addEventListener("click", undoLastInput = () => {
    if (firstNumber === null && secondNumber === null) {
        alert("Nothing to undo jet!");
    } else if (firstNumber != null && secondNumber === null) {
        stringHolderFirst = stringHolderFirst.slice(0, -1);
        console.log(stringHolderFirst);
        displayValueFirst = +stringHolderFirst;
        displayOutput.textContent = displayValueFirst;
        console.log(displayValueFirst);
        return firstNumber = displayValueFirst;
    } else if (firstNumber != null && secondNumber != null) {
        stringHolderSecond = stringHolderSecond.slice(0, -1);
        console.log(stringHolderSecond);
        displayValueSecond = +stringHolderSecond;
        displayOutput.textContent = displayValueSecond;
        console.log(displayValueSecond);
        return secondNumber = displayValueSecond;
    } else {
        alert("ERROR: please refresh page!");
    }
});



// KEYBOARD SUPPORT
// ---------------------------------------------------------
document.addEventListener("keydown", function (event) {
    let key = event["key"];
    console.log(key);
    console.log(event);
    // NUMBERS and DOT
    if (operator === "" & digitCountFirst < 9) {
        if (('0123456789.').includes(key)) {
            stringHolderFirst += key;
            displayValueFirst = +stringHolderFirst;
            displayOutput.textContent = displayValueFirst;
            digitCountFirst += 1;
            return firstNumber = displayValueFirst;
        };
    } else if (operator != "" && digitCountSecond < 9) {

        operatorChoicesArr.forEach((item) => {
                if ([...item.classList].includes("active")) {
                    item.classList.remove("active");
                }
            });
        
        if (('0123456789.').includes(key)) {
            stringHolderSecond += key;
            displayValueSecond = +stringHolderSecond;
            displayOutput.textContent = displayValueSecond;
            digitCountSecond += 1;
            return secondNumber = displayValueSecond;
        };
    } else {
        alert("Enough numbers genius! Press an operator please.");
    };

    // OPERATORS
    if (('+-*/').includes(key)) {
        digitCountFirst = 0;
        digitCountSecond = 0;

        if (key === "+") {
            operator = "addition";
            operatorChoicesArr[5].classList.add("active");
        } else if (key === "-") {
            operator = "subtraction";
            operatorChoicesArr[4].classList.add("active");
        } else if (key === "*") {
            operator = "multiplication";
            operatorChoicesArr[3].classList.add("active");
        } else if (key === "/") {
            operator = "division";
            operatorChoicesArr[2].classList.add("active");
        }
        if (firstNumber === null && secondNumber === null) {
            alert("Please type in a number before your first operator");
            return operator = "";
        }
        if (operator != "" && firstNumber != null && secondNumber != null) {
            
            operate();
        }
    };
    if (("=").includes(key) || ("Enter").includes(key)) {
        operate();
    };

    if (("Backspace").includes(key)) {
        if (secondNumber === null) {
            stringHolderFirst = stringHolderFirst.slice(0, -1);
            displayValueFirst = +stringHolderFirst;
            displayOutput.textContent = displayValueFirst;
            return firstNumber = displayValueFirst;
        } else {
            stringHolderSecond = stringHolderSecond.slice(0, -1);
            displayValueSecond = +stringHolderSecond;
            displayOutput.textContent = displayValueSecond;
            return secondNumber = displayValueSecond;
        }
    }

    if (("Delete").includes(key)) {
        firstNumber = null;
        secondNumber = null;
        operator = "";
        displayValueFirst = null;
        displayValueSecond = null;
        solution = null;
        stringHolderFirst = "";
        stringHolderSecond = "";
        digitCountFirst = null;
        digitCountSecond = null;
        return displayOutput.textContent = "";
    }
});