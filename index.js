const inquirer = require("inquirer");
const fs = require("fs")
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const path = require('path');
const fs = require('fs')

let team = [];


inquirer.prompt([
    {
      name: "Enter team name or project",
      type: "input",
      message: "You will not enter Manager information"
    },
    {   
      name: "Enter managers name: ",
      type: "input",
    },
    {   
      name: "manager's employee ID: ",
      type: "input",
    },
    {   
      name: "Enter manager's email address: ",
      type: "input",
    },
    {   
      name: "Enter manager's office number: ",
      type: "input",
    },
    // prompted to add team member or finish and build team html
    {   
      name: "Enter engineer’s name: ",
      type: "input",
    },
    {
      name : "engineer’s ID: ",
      type: "input",
    },
    {
      name : "engineer’s email: ",
      type: "input",
    },
    {
      name : "engineer’s GitHub username: ",
      type: "input",
    },
    // Go back to menu
    {
      name : "Intern name: ",
      type: "input",
    },
    
    {
      name : "Intern ID: ",
      type: "input",
    },
    {
      name : "Intern email: ",
      type: "input",
    },
    {
      name : "Intern school: ",
      type: "input",
    },
    // back to menu

    {
      name: "confirm_answer",
      type: "confirm",
      message: "Are you sure?",
      when: (answers) => answers.wants_pizza === false,
    },
  {
    name: "confirm_answer",
    type: "confirm",
    message: "Are you sure?",
    when: (answers) => answers.wants_pizza === false,
    },
  {
    name: "confirm_answer",
    type: "confirm",
    message: "Are you sure?",
    when: (answers) => answers.wants_pizza === false,
  }])
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