#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
async function askForFunctionality() {
    console.clear();
    console.log("Please Select What You Want \n");
    const currentFunctionality = await inquirer.prompt([{
            type: "list",
            choices: ["Calculation", "Converter", "Quiz"],
            name: "answer"
        }]);
    if (currentFunctionality.answer === "Calculation") {
        startCalculator();
    }
    else if (currentFunctionality.answer === "Converter") {
        startConverter();
    }
    else if (currentFunctionality.answer === "Quiz") {
        startQuiz();
    }
}
askForFunctionality();
async function startCalculator() {
    console.clear();
    chalkAnimation.rainbow("** =========== Welcome To Calculator Utility =========== **").render();
    printCalculator("0");
    const firstQuestion = await inquirer.prompt({
        name: "answer",
        type: "number",
        message: "Enter your First Number"
    });
    console.clear();
    printCalculator(firstQuestion.answer);
    const secondQuestion = await inquirer.prompt({
        name: 'answer',
        type: "list",
        message: "Select Your Operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    });
    console.clear();
    printCalculator(firstQuestion.answer + " " + getOperationSign(secondQuestion.answer));
    const thridQuestion = await inquirer.prompt({
        name: 'answer',
        type: "number",
        message: "Enter your Second Number"
    });
    console.clear();
    printCalculator(firstQuestion.answer + " " + getOperationSign(secondQuestion.answer) + " " + thridQuestion.answer);
    const fourthQuestion = await inquirer.prompt({
        name: 'answer',
        type: "list",
        message: "Check Answer",
        choices: ["Yes"]
    });
    if (fourthQuestion.answer === "Yes") {
        const equation = "" + firstQuestion.answer + getOperationSign(secondQuestion.answer) + thridQuestion.answer;
        console.clear();
        printCalculator(chalk.green(eval(equation)));
    }
    const fifthQuestion = await inquirer.prompt({
        name: 'answer',
        message: "Select One of these",
        type: 'list',
        choices: ["Reset Calculator", "Main Menu"]
    });
    if (fifthQuestion.answer === "Reset Calculator") {
        startCalculator();
    }
    else if (fifthQuestion.answer == "Main Menu") {
        askForFunctionality();
    }
}
function getOperationSign(opertion) {
    switch (opertion) {
        case "Addition":
            return "+";
        case "Subtraction":
            return "-";
        case 'Multiplication':
            return '*';
        case 'Division':
            return '/';
        default:
            return "+";
    }
}
function printCalculator(text) {
    console.log(`
    ________________________________
   | _____________________________  |
   | |                            | |
   | | ${text}                      
   | |____________________________| |
   | |____________________________  |
   | |     |     |     |   |     |  |
   | |  7  |  8  |  9  |   |  +  |  |
   | |_____|_____|_____|   |_____|  |
   | |     |     |     |   |     |  |
   | |  4  |  5  |  6  |   |  -  |  |
   | |_____|_____|_____|   |_____|  |
   | |     |     |     |   |     |  |
   | |  1  |  2  |  3  |   |  x  |  |
   | |_____|_____|_____|   |_____|  |
   | |     |     |     |   |     |  |
   | |  .  |  0  |  =  |   |  /  |  |
   | |_____|_____|_____|   |_____|  |
   |_______________________________ |`);
}
async function startConverter() {
    console.clear();
    const firstQuestion = await inquirer.prompt({
        message: 'Please Select One Option',
        name: "answer",
        type: 'list',
        choices: [
            "KiloGram to Gram",
            "Gram to KiloGram",
            "Meter to CentiMeter",
            "CentiMeter to Meter",
            "GigaByte to MegaByte",
            "MegaByte to GigaByte",
        ]
    });
    const secondQuestion = await inquirer.prompt({
        name: "answer",
        type: "number",
        message: "Please Enter amount in " + chalk.red(firstQuestion.answer.split("to")[0]) + " ?"
    });
    const convertedAnswer = getConverterAnswer(firstQuestion.answer, secondQuestion.answer);
    console.clear();
    console.log(chalk.red(secondQuestion.answer) + " " + firstQuestion.answer.split("to")[0] + " is equal to " + chalk.green(convertedAnswer) + firstQuestion.answer.split("to")[1]);
    const thridQuestion = await inquirer.prompt({
        name: 'answer',
        message: "Select One of these",
        type: 'list',
        choices: ["Reset Converter", "Main Menu"]
    });
    if (thridQuestion.answer === "Reset Converter") {
        startConverter();
    }
    else if (thridQuestion.answer == "Main Menu") {
        askForFunctionality();
    }
}
function getConverterAnswer(unitConverted, firstAmount) {
    switch (unitConverted) {
        case "KiloGram to Gram":
            return firstAmount * 1000;
        case "Gram to KiloGram":
            return firstAmount / 1000;
        case "Meter to CentiMeter":
            return firstAmount * 100;
        case "CentiMeter to Meter":
            return firstAmount / 100;
        case "GigaByte to MegaByte":
            return firstAmount * 1000;
        case "MegaByte to GigaByte":
            return firstAmount / 1000;
        default:
            return 0;
    }
}
const questions = [
    {
        "number": "q1",
        "question": "Inside which HTML element do we put the JavaScript?",
        "answers": [
            "<javascript>",
            "<js>",
            "<scripting>",
            "<script>"
        ],
        "correct_answer": "<script>"
    },
    {
        "number": "q2",
        "question": `What is the correct JavaScript syntax to change the content of the HTML element below?
        \n
        <p id="demo">This is a demonstration.</p>
        \n
        `,
        "answers": [
            `document.getElementByName("p").innerHTML = "Hello World!";`,
            `document.getElement("p").innerHTML = "Hello World!";`,
            `#demo.innerHTML = "Hello World!";`,
            `document.getElementById("demo").innerHTML = "Hello World!";`
        ],
        "correct_answer": `document.getElementById("demo").innerHTML = "Hello World!";`
    },
    {
        "number": "q3",
        "question": `Where is the correct place to insert a JavaScript?`,
        "answers": [
            `The <body> section`,
            `The <head> section`,
            `Both the <head> section and the <body> section are correct`,
            `None of these`
        ],
        "correct_answer": `Both the <head> section and the <body> section are correct`
    },
    {
        "number": "q4",
        "question": `What is the correct syntax for referring to an external script called "xxx.js"?`,
        "answers": [
            `<script name="xxx.js">`,
            `<script href="xxx.js">`,
            `None of these`,
            `<script src="xxx.js">`,
        ],
        "correct_answer": `<script src="xxx.js">`
    },
    {
        "number": "q5",
        "question": `The external JavaScript file must contain the <script> tag.`,
        "answers": [
            `True`,
            `False`,
        ],
        "correct_answer": `False`
    },
];
async function startQuiz() {
    console.clear();
    const firstQuestion = await inquirer.prompt({
        name: "answer",
        message: "Let's start Quiz",
        type: "list",
        choices: ["Yes", "No"]
    });
    if (firstQuestion.answer === "No") {
        return askForFunctionality();
    }
    let score = 0;
    const questionPrompts = questions.map((eachQ) => ({
        name: eachQ.number,
        message: eachQ.question,
        choices: eachQ.answers,
        type: "list"
    }));
    const currentAnswers = await inquirer.prompt(questionPrompts);
    Object.keys(currentAnswers).map((currentAnswerKey, keyIndex) => {
        const currentAnswer = currentAnswers[currentAnswerKey];
        if (currentAnswer == questions[keyIndex].correct_answer) {
            score++;
        }
    });
    console.clear();
    console.log(chalk.green(" \n Your Score is  " + score + " \n "));
    const restartQuestion = await inquirer.prompt({
        name: "answer",
        type: "list",
        choices: ["Restart Quiz", "Main Menu"],
        message: "Please Select One of these option"
    });
    if (restartQuestion.answer === "Restart Quiz") {
        startQuiz();
    }
    else if (restartQuestion.answer === "Main Menu") {
        askForFunctionality();
    }
}
