#! /usr/bin/env node
import inquirer from "inquirer" ;

// 1)Computer will generate  a random number 

// 2)User  input for guessing number

// 3)Compare user input with  computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers =await inquirer.prompt([
{
    name :"userGuessedNumber",
    type :"number",
    message :"Please guess a number between 1 -10 : ",
}
]);
console.log(answers); 
//agar ya true ha to {iskoprint kare} warna else ko print kare
if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations you guessed the Right Number.");
}else {
    console.log("You guessed the Wrong Number");
}

