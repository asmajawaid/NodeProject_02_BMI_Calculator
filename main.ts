#! /usr/bin/env node
//BMI calculator in typescript
import inquirer from "inquirer"
const questions =[
    {
        type :"number",
        name : "weight",
        message : "weight(kg)"
    },
    {
        type :"number",
        name : "height",
        message : "height(m)"
    }
];
const calculateBMI =(weight : number, height : number):number=> weight/(height*height)
const main = async() => {
    const {weight, height} = await inquirer.prompt(questions);
    console.log(`chalk.blue(BMI:${calculateBMI(weight,height).toFixed(2)})`)
};
main();

// let weight = 70;
// let height = 5.4;

// let bmi = weight / height * height 
// console.log (`asma your BMI is ${bmi}`);