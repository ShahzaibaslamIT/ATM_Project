#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 60000;
let myPin = 1234;
console.log(chalk.blue("\n \t Welcome to ATM Machine \n"));
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: chalk.yellow("Enter your pin"),
        type: "number",
    }]);
console.log(pinAnswer.pin === myPin);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\nWelcome to your Account!\n"));
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "Fast Cash"]
        }]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log(amountAns.amount);
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log(chalk.red("Insufficient Balance"));
        }
    }
    if (operationAns.operation === "Check Balance") {
        console.log(`Your Current balance is : ${myBalance}`);
    }
    if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([{
                name: "Fast_Cash",
                message: "Choose how much money you want to withdraw:",
                type: "list",
                choices: [5000, 10000, 20000, 30000]
            }]);
        if (fastCash.Fast_Cash == 5000) {
            myBalance -= fastCash.Fast_Cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else if (fastCash.Fast_Cash == 10000) {
            myBalance -= fastCash.Fast_Cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else if (fastCash.Fast_Cash == 20000) {
            myBalance -= fastCash.Fast_Cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else if (fastCash.Fast_Cash == 20000) {
            myBalance -= fastCash.Fast_Cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else if (fastCash.Fast_Cash == 30000) {
            myBalance -= fastCash.Fast_Cash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
}
else {
    console.log(chalk.red("Wrong pin Number"));
}
