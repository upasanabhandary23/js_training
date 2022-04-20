let opt = prompt("Enter Operators + - * / for Simple Calculations= ");
let num1 = parseFloat(prompt("Enter Operand 1= "));
let num2 = parseFloat(prompt("Enter Operand 2= "));

let result;

switch (opt) {
    case '+':
        result = num1 + num2;
        break;

    case '-':
        result = num1 - num2;
        break;

    case '*':
        result = num1 * num2;
        break;

    case '/':
        result = num1 / num2;
        break;

    default:
        console.log("EMPTY");
        break;
}

console.log(result);