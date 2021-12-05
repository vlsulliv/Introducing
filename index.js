const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const util = require('./src/util')
const path = require('path');
const fs = require('fs');
const CheckboxPrompt = require("inquirer/lib/prompts/checkbox");

let team = [];


inquirer.prompt([
    {
      type: "input",
      name: "Enter team name or project",
      message: "You will not enter Manager information"
    },
    new inquirer.Separator("----Manager Info----"),
    {
      type: "input",
      name: "Manager Name ",
      message: "Enter managers name: ",
    },
     new inquirer.Separator(),
    {
      type: "input",
      name: "Manager ID ",
      message: "Enter manager's employee ID: ",
    },
     new inquirer.Separator(),
    {
      type: "input",
      name: "Manager Email ",
      message: "Enter manager's email address: ",
    },
     new inquirer.Separator(),
    { 
      type: "input",
      name: "Manager Office Number",  
      message: "Enter manager's office number: ",
    },
     new inquirer.Separator(),
    // -----------------------------------------------------
    {
      name: "menu",
      type: "checkbox",
      message: "Add team member or exit? select below",
      choices: ['add engineer', 'add intern', 'exit and build html']
    },
    // -----------------------------------------------------
    // prompted to add team member or finish and build team html
    new inquirer.Separator("----engineer Info----"),
    {
      type: "input",   
      name: "Engineer name"
      message: "Enter engineer’s name: ",
    },
    new inquirer.Separator(),
    {
      type: "input",
      name: "Engineer ID"
      message : "Enter engineer’s ID: ",

    },
    new inquirer.Separator(),
    {
      type: "input",
      name: "Engineer Email",
      message : "Enter engineer’s email: ",
    },
    new inquirer.Separator(),
    {
      type: "input",
      name: "Engineer Github",
      message : "Enter engineer’s GitHub username: ",

    },
    new inquirer.Separator(),
    // -----------------------------------------------------
    {
      name: "menu",
      type: "checkbox",
      message: "Add team member or exit? select below",
      choices: ['add engineer', 'add intern', 'exit and build html']
    },
    // -----------------------------------------------------
    new inquirer.Separator("----intern Info----"),
    {
      type: "input",
      name:"Intern Name ",
      message: "Enter intern name: ",
      
    },
    
    {
      type: "input",
      name:"Intern ID",
      message: "Enter intern ID: ",
      
    },
    {
      type: "input",
      name:"Intern Email",
      message: "Enter intern email: ",
      
    },
    {
      type: "input",
      name:"Intern School",
      message: "Enter intern school: ",
    },
    // -----------------------------------------------------
    {
      name: "menu",
      type: "checkbox",
      message: "Add team member or exit? select below",
      choices: ['add engineer', 'add intern', 'exit and build html']
    },     
    // -----------------------------------------------------
  ])
  .then((answers) => {
    if (answers.wants_pizza) {
      console.log("The user wants free pizza");
    } else if (answers.confirm_answer) {
      // the user definitely doesn't want pizza
    } else {
      // the user changed their mind
      // run the function to ask this question again
    };
  })