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
    }
    ])
}