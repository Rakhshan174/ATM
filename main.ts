#! /usr/bin/env node

import inquirer from "inquirer";
console.log("Welcome your personal account");
console.log("*******************************");

let myBalance = 220000;
let myPin = 1769;
let pinAnswer = await inquirer.prompt(
    [
        {   
            name:"pin",
            message:"Enter your pin:",
            type:"number"
        }
    ]
);
console.log("*******************************");

if(pinAnswer.pin === myPin){
    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"Please select option:", 
                type:"list",
                choices:["Withdraw","Check Balance","Fast Cash"]
            }
        ]
);
console.log("*******************************");
if(operationAns.operation === "Withdraw"){
    let amountAns=await inquirer.prompt(
        [
            {
                name:"amount",
                message:"Enter your amount:",
                type:"number",
            }
        ]
     );
     if(amountAns.amount <= myBalance){
         myBalance -= amountAns.amount;
         console.log(`your remaining balance is: ${myBalance}`);
     }

     else{
        console.log("Insufficient Balance");
     }
    }
     else if(operationAns.operation === "Check Balance"){
        console.log(`Your balance is: ${myBalance}`);
    }
     else if(operationAns.operation === "Fast Cash"){
         let FastCashAns = await inquirer.prompt(
              [
                 {
                    name:"FastCash",
                    message:"Select your amount you want to fast cash:",
                    type:"list",
                    choices:[500,1000,2000,5000,10000,220000]
                 }
              ]
          );
          myBalance -= FastCashAns.FastCash;
        console.log(`your remaining balance is: ${myBalance}`);
    }
}
else{
    console.log("Invalid Pin Code");
} 
console.log("*******************************");  



