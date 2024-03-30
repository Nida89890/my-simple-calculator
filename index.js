#! /usr/bin/env node
import inquirer from "inquirer";
//Printing a Wellcome Message 
console.log("/n/tWellcome To /'CodeWithNida/'-my_simple_calculator/n");
let answers = await inquirer.prompt([
    { message: "Enter First Number ", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "select one operator to performe Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division",]
    }
]);
// Conditional Statments If Else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
