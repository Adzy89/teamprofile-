const inquirer = require('inquirer');
const fs = require("fs");
const generateTeam = require('./src/page-tempate');


const Engineer = require('./lib/classes');
const Intern = require('./lib/classes');
const Manager = require('./lib/classes');



const newStaffMemberData = [];


async function questions() {
    const { answers } = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your role?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ])


if (answers.role === "Manager") {
    const managerAns = await inquirer
    .prompt([
        {
        type: "input",
        message: "What is your office number",
        name: "officeNumber",
        },
        ])
    const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        managerAns.officeNumber
        );
    newStaffMemberData.push(newManager);
          
    
} else if (answers.role === "Engineer") {
    const githubAns = await inquirer
    .prompt([
        {
        type: "input",
        message: "What is your GitHub user name?",
        name: "github",
        }
        ])
    const newEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        githubAns.github
        );
        newStaffMemberData.push(newEngineer);
          
          
} else if (answers.role === "Intern") {
    const internAns = await inquirer
    .prompt([
        {
        type: "input",
        message: "What university did you attend?",
        name: "school",
        },
        ])
          
    const newIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        internAns.school
        );
    newStaffMemberData.push(newIntern);          
    
    }
};

async function promptQuestions() {
    await questions()
    const addMemberAns = await inquirer
      .prompt([
        {
          name:'addMember',
          type: 'list',
          choices: ['Add a new member', 'Create team'],
          message: "What would you like to do next?"
        }
      ])
  
      if (addMemberAns.addMember === 'Add a new member') {
        return promptQuestions()
      }
      return createTeam();
  }  
  
  promptQuestions();
  
  function createTeam () {
    console.log("new guy", newStaffMemberData)
    fs.writeFileSync(
    ".teamprofile\teamprofile-\dist\index.html",
      generateTeam(newStaffMemberData),
      "utf-8"
    );
  }
  