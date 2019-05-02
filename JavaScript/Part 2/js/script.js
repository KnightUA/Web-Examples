function simpleCalculate(firstNumber, sine, secondNumber) {

    var result = 0;

    switch (sine) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '^':
            result = firstNumber ** secondNumber;
            break;
        default:
            alert("Unknown sine!")
    }

    alert("Result is " + result);
}

function parseStrAndCallCalculator(str) {
    values = str.split(' ');
    simpleCalculate(Number(values[0]), values[1], Number(values[2]))
}

parseStrAndCallCalculator(prompt("Enter values in format: Number1 sine Number2!\n" +
    "Example: 10 + 2"))