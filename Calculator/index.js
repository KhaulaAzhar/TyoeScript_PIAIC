#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly enter your first no: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "kindly enter your second no: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "Select Operator: "
    }
]);
console.log(answers);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "Addition") {
        result = numberOne + numberTwo;
    }
    else if (operator === "Subtraction") {
        result = numberOne - numberTwo;
    }
    if (operator === "Division") {
        result = numberOne / numberTwo;
    }
    if (operator === "Multiplication") {
        result = numberOne * numberTwo;
    }
    console.log("Your result is :", result);
}
else {
    console.log("kindly enter valid input");
}
