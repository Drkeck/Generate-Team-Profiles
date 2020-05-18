const Inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');
const EmployeeProfileGen = require('./src/EmployeeProfileGen');
const HtmlGen = require('./src/HtmlGen');

Inquirer
    .prompt([{
        type: 'text',
        name: 'name',
        message: 'What is the Team Managers name?',
        validate: management => {
            if (management) {
                return true; 
            } else {
                console.log('please enter the name of the Team Manager');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'id',
        message: `Please enter the manager's Numerical id`,
        validate: numId => {
            if (numId) {
                return true;
            } else {
                console.log(`Please enter the manager's numerical id`)
                return false;
            }
        }
    },
    {
      type: 'text',
      name: 'Email',
      message: 'Please enter the managers Email',
      validate: managerEmail => {
          const email = managerEmail.split('.com');
          if (email.length = 2) {
              return true;
          } else {
              console.log('please enter valid Email for managers Email')
              return false
          } 
      }
    },
    {
        type: 'text',
        name: 'officeNumber',
        message: 'Please enter the office number for the acting manager',
        validate: manageNum => {
            if (manageNum) {
                return true;
            } else {
                console.log('Enter the office number for the acting manager')
                return false;
            }
        }
    }])
    .then(info => {
        const manager1 = new Manager(info.name, info.id, info.Email, info.officeNumber);
    })
    .then(

    )
