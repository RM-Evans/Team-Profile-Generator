
const inquirer = require('inquirer')

//const Manager = require('/lib/Manager.js')

let team = []
function init() {
    inquirer.prompt([
        {
            type: 'checkbox',
            name: 'employeeRole',
            message: 'What is the role of the Employee?',
            choices: ['manager', 'engineer', 'Intern']
        }
    ]).then(answers => {

        if (answers.employeeRole === 'manager') {
            //team.push(new Manager(answers.name, answers.email, id, officeNumber))
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "what is your name?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email address?'
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is your office number?'
                }
            ])



        } else if (answers.employeeRole === 'engineer') {
            team.push(new Engineer(answers.name, answers.email))

            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "what is your engineer's name?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email address?'
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is your office number?'
                }
            ])

        } else if (answers.employeeRole === 'Intern') {
            team.push(new Intern(answers.name, answers.email))

            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "what is your engineer's name?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email address?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is your office number?'
                }
            ])
        }

    }
    }
}
init()


function generateHTML(team) {
    let html = ''
    for (let member of team) {
        html += `
    <h1>${member.name}</h1>
    `
        if (member.getRole() === 'Engineer') {
            html += `<h2>github:${member.github}</h2>`
        } else if (member.getRole() === 'Intern') {
            html += `<h2>github:${member.github}</h2>`
        }
    }


}
