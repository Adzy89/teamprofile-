const inquirer = require('inquirer');
const fs = require("fs");
const generateTeam = require('./src/page-tempate');


const Engineer = require('./lib/classes');
const Intern = require('./lib/classes');
const Manager = require('./lib/classes');


//created an empty array for new staff member data
const newStaffMemberData = [];

//created an array of objects to ask questions about the user 
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

//console logging the data answers
// if manger is selected this statement will run
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
          
// if engineer is selected this statement will run       
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
          
 // if intern is selected this statement will run           
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

//function to add member to team  and prompted with next question 
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
  