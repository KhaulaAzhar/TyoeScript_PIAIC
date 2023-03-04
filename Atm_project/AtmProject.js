#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter Your id: "
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter Your Pin: "
    },
    {
        type: "list",
        name: "AccountType",
        choices: ["Current", "Saving"],
        message: "Select your AccountType"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your transaction",
        when(answers) {
            return answers.AccountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("your remaining balance is", remaining);
    }
    else {
        console.log("insuficient balance");
    }
}
