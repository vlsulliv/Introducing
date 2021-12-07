const inquirer = require('inquirer');
// const {Employee} = require('./lib/Employee');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const util = require('./src/util')
const path = require('path');
const fs = require('fs');
const CheckboxPrompt = require('inquirer/lib/prompts/checkbox');


const addMember = ["1) add team member: Engineer", "2) add team member: Intern", "3) exit and generate team profile"];
let role = ["1) Manager", "2) Engineer", "3) Intern", "4) Exit"];

let split = () => {
  new inquirer.Separator()
};

let na = answers.name;
let id = answers.id;
let em = answers.email;

let initApp = () => {
  inquirer.prompt([{
      type: 'list',
      name: 'role',
      choices: role,
      message: 'what is your role in the project?'
    }, ])
    .then(answer => {
      switch (answers.role) {
        case 1:
          answer.role === Manager;
          result = getManager();
          break;
        case 2:
          answer.role === Intern;
          result = getIntern();
          break;
        case 3:
          answer.role === Engineer;
          result = getEngineer()
          break;
        case 4:
          answer.role === Exit;
          result = generatePage();
          break;
        default:
          result = "Exit"
          break;
      }}
    )
  }
  



let team = [];
let manager = () => {
    inquirer.prompt([{
          type: 'input',
          name: 'Name',
          message: 'Please enter name of team manager: ',
        },
        {
          type: 'input',
          name: 'ID',
          message: 'Enter managers employee ID: ',
        },
        {
          type: 'input',
          name: 'Email ',
          message: 'Enter managers email address: ',
        },
        {
          type: 'input',
          name: 'OfficeNumber',
          message: 'Enter managers office number: '
        },
        {
          name: 'menu',
          type: 'checkbox',
          message: 'Add team member or exit? select below',
          choices: addMember,
          default: 'exit and generate team profile'
        }
      ])
      .then((answers => {
        team.push(new Manager(na, id, em, answers.school))
      }))

      const generate = () => {
        fs.writeFileSync(outputPath, render(team), 'utf-8')
      }

      initApp();













        //   // -----------------------------------------------------
        //   // prompted to add team member or finish and build team html
        //   new inquirer.Separator('----engineer Info----'),
        //   {
        //     type: 'input',   
        //     name: 'Engineer name'
        //     message: 'Enter engineer’s name: ',
        //   },
        //   new inquirer.Separator(),
        //   {
        //     type: 'input',
        //     name: 'Engineer ID'
        //     message : 'Enter engineer’s ID: ',

        //   },
        //   new inquirer.Separator(),
        //   {
        //     type: 'input',
        //     name: 'Engineer Email',
        //     message : 'Enter engineer’s email: ',
        //   },
        //   new inquirer.Separator(),
        //   {
        //     type: 'input',
        //     name: 'Engineer Github',
        //     message : 'Enter engineer’s GitHub username: ',

        //   },
        //   new inquirer.Separator(),
        //   // -----------------------------------------------------
        //   {
        //     name: 'menu',
        //     type: 'checkbox',
        //     message: 'Add team member or exit? select below',
        //     choices: ['add engineer', 'add intern', 'exit and build html']
        //   },
        //   // -----------------------------------------------------
        //   new inquirer.Separator('----intern Info----'),
        //   {
        //     type: 'input',
        //     name:'Intern Name ',
        //     message: 'Enter intern name: ',

        //   },

        //   {
        //     type: 'input',
        //     name:'Intern ID',
        //     message: 'Enter intern ID: ',

        //   },
        //   {
        //     type: 'input',
        //     name:'Intern Email',
        //     message: 'Enter intern email: ',

        //   },
        //   {
        //     type: 'input',
        //     name:'Intern School',
        //     message: 'Enter intern school: ',
        //   },
        //   // -----------------------------------------------------
        //   {
        //     name: 'menu',
        //     type: 'checkbox',
        //     message: 'Add team member or exit? select below',
        //     choices: ['add engineer', 'add intern', 'exit and build html']
        //   },     
        //   // -----------------------------------------------------
        // ])
        // .then((answers => {
        //   let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        //   team.push(engineer)
        //   }));


        // function addEngineer(Engineer){
        //   let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        //   team.push(engineer)
      }