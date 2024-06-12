#! /usr/bin/env node    
import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random()*10 + 1);
const guessnumber = await inquirer.prompt([
  {
    name: "usreguessnumber",
    type: "number",
    message: "Please Guess Your Number between 1 to 10",
  },
]);
if (guessnumber.usreguessnumber === randomnumber) {
  console.log("Your Guess is Correct :) :) :)");
} else console.log("You Have Guessed it Wrong :( :( :(");
