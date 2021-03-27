
const inquirer = require('inquirer')

//const Manager = require('/lib/Manager.js')

let team = []
function init() {
    inquirer.prompt([
        {
            type: 'checkbox',
            name: 'employeeRole',
            message: 'What is the role of the Employee?',
            choices: ['manager', 'engineer', 'Intern', "I'm done"]
            //if 'im done' ge
        }
    ]).then(answers => {
//console.log(answers.employeeRole[0])
        if (answers.employeeRole[0] === 'manager') {
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
            ]).then(() => console.log('hi'))



        } else if (answers.employeeRole[0] === 'engineer') {
            

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
                    name: 'github',
                    message: 'What is your github?'
                }
            ]).then((engineerAnswers) => {
                team.push(new Engineer(engineerAnswers.name, engineerAnswers.email, engineerAnswers.github))
                console.log(team)
            })

        } else if (answers.employeeRole[0] === 'Intern') {
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
            ]).then(() => console.log('hi'))
        }

    })
    
}
init()
//I'm done -> are you sure done? if y, then generate html. if n, then init()


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
