#! /usr/bin/env mode
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "Please guess a number between 1-6",
    },
]);
if (answers.userguessnumber === randomNumber) {
    console.log("congratulations! you have guessed right number.");
}
else {
    console.log("you have guessed wrong number.");
}
console.log(answers);
