const Inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/intern');

const promptEmployees = employeeData => {

    if (!employeeData.team) {
        employeeData.team = []
    }
    console.log(`
    ==============================
    ADD A NEW EMPLOYEE TO THE TEAM
    ==============================
    `);

    return Inquirer.prompt([
        {
        type: 'text',
        name: 'name',
        message: "What is the employee's name?",
        validate: management => {
            if (management) {
                return true; 
            } else {
                console.log('please enter the name of the employee');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'id',
        message: `Please enter the employee's Numerical id`,
        validate: numId => {
            if (numId) {
                return true;
            } else {
                console.log(`Please enter the employee's numerical id`)
                return false;
            }
        }
    },
    {
      type: 'text',
      name: 'Email',
      message: "Please enter employee's Email",
      validate: managerEmail => {
          const email = managerEmail.split('.com');
          if (email.length = 2) {
              return true;
          } else {
              console.log("please enter valid Email for employee's Email")
              return false
          } 
      }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'would you like to add another employee',
        default: false
    }
    ])
    .then(teamData => {
        Inquirer.prompt({
        type: 'list',
        name: 'role',
        message: `What is this employee's roll?`,
        choices: ['Engineer', 'Intern']
        })
        .then(({roll}) => {
            if (roll === 'Engineer') {
                Inquirer.prompt({
                    type: 'text',
                    name: 'github',
                    message: `What is the employee's github username?`

                })
                .then(({github}) => {
                    teamData.push(github);
                    employeeData.team.push(teamData);
                    console.log(employeeData);
                })
            } else {
                Inquirer.prompt({
                    type: 'text',
                    name: 'school',
                    message: 'What school is this employee attending?'
                })
                .then(({school}) => {
                    teamData.push(school);
                    employeeData.team.push(teamData);
                    console.log(team)
                })
            }
        })
        if(teamData.confirmAddEmployee) {
            return promptEmployees(employeeData);
        } else {
            return employeeData;
        }
    })
};

module.exports = promptEmployees();