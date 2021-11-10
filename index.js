<<<<<<< HEAD
inquirer
  .prompt([
    {
      name: "wants_pizza",
      type: "confirm",
      message: "Do you want a free pizza?",
    },
    {
      name: "confirm_answer",
      type: "confirm",
      message: "Are you sure?",
      when: (answers) => answers.wants_pizza === false,
    },
  ),
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
  }
  .then((answers) => {
    if (answers.wants_pizza) {
      console.log("The user wants free pizza");
    } else if (answers.confirm_answer) {
      // the user definitely doesn't want pizza
    } else {
      // the user changed their mind
      // run the function to ask this question again
    } 
=======


const inquirer = require("inquirer");
const fs = require("fs")
const Engineer = require("./classes/Engineer");
const Manager = require("./classes/Manager");
const Intern = require("./classes/Inter");



inquirer
  .prompt([
    {
      name: "wants_pizza",
      type: "confirm",
      message: "Do you want a free pizza?",
    },
    {
      name: "confirm_answer",
      type: "confirm",
      message: "Are you sure?",
      when: (answers) => answers.wants_pizza === false,
    },
  ),
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
  }
  .then((answers) => {
    if (answers.wants_pizza) {
      console.log("The user wants free pizza");
    } else if (answers.confirm_answer) {
      // the user definitely doesn't want pizza
    } else {
      // the user changed their mind
      // run the function to ask this question again
    } 
>>>>>>> 879af14 (create project dir structure and create classes)
  });