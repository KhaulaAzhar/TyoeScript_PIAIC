#! /usr/bin/env node
import inquirer from "inquirer"

let Conversion = {
    "PKR": {
        "USD": 0.0044,
        "GDP": 0.0044,
        "PKR": 0.0044
    },
   "GDP": {
        "USD": 1.21,
        "GDP": 1,
        "PKR": 271.79
    },
    "USD": {
        "USD": 1,
        "GDP": 0.83,
        "PKR": 271.79
    }
}

const answer: {
    from: "PKR"| "GDP" | "USD",
    to: "PKR"| "GDP" | "USD",
    amount: number
} = await inquirer.prompt([
    {
        type : "list",
        name : "from",
        choices: ["PKR","GDP","USD"],
        message  : "Select your Currency: "
    },
    {
        type : "list",
        name : "to",
        choices: ["PKR","GDP","USD"],
        message  : "Select your Conversion Currency: "
    },
    {
        type : "number",
        name : "amount",
        message  : "Select your  Conversion Amount: "
    }
]);
const {from, to, amount} = answer;

if(from && to && amount){
    let result = Conversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}else{
    console.log("invalid input")
}