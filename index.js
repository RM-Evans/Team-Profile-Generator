
const inquirer = require('inquirer')

//const Manager = require('/lib/Manager.js')
const { promptEmployeeDetails } = require('./lib/promptEmployees')
const reporter = require('./lib/reporter')

const employees = []

//prompt end user for 'next' command

async function askAction() {
    const answers = await inquirer.prompt({
        type:'checkbox',
        name: 'action',
        message: 'What do you want to do?',
        choices: ['Create Employee', 'Generate Report']
    })

    //return simple string (employee, report)
    const [ choice ] = answers.action
    if( choice === 'Create Employee'){
        return 'employee'
    } if ( choice === 'Generate Report'){
        return 'report'
    }
}

//async method so we can await
async function execute(){
    let action
    //loop asking for what to do
    do {
        //ask what to do
        action = await askAction()
        switch(action){

            case 'employee':
                const e = await promptEmployeeDetails()
                employees.push(e)
                break;

            case 'report':
                
                break;

            default:
                console.log(`Error: not sure what to do with action "${action}"`)
                break;
            
        }
    } while ( action !== 'report' )

    //console.log({ employees })

    if( employees.length < 1 ){
        console.log('No employees entered; skipping report')
    } else {
        reporter.writeReport(employees)
    }
}

execute()
















//__________________________________________________
// let team = []
// function init() {
//     inquirer.prompt([
//         {
//             type: 'checkbox',
//             name: 'employeeRole',
//             message: 'What is the role of the Employee?',
//             choices: ['manager', 'engineer', 'Intern', "I'm done"]
//             //if 'im done' ge
//         }
//     ]).then(answers => {
// //console.log(answers.employeeRole[0])
//         if (answers.employeeRole[0] === 'manager') {
//             //team.push(new Manager(answers.name, answers.email, id, officeNumber))
//             inquirer.prompt([
//                 {
//                     type: 'input',
//                     name: 'name',
//                     message: "what is your name?"
//                 },
//                 {
//                     type: 'input',
//                     name: 'email',
//                     message: 'What is your email address?'
//                 },
//                 {
//                     type: 'input',
//                     name: 'officeNumber',
//                     message: 'What is your office number?'
//                 }
//             ]).then(() => console.log('hi'))



//         } else if (answers.employeeRole[0] === 'engineer') {
            

//             inquirer.prompt([
//                 {
//                     type: 'input',
//                     name: 'name',
//                     message: "what is your engineer's name?"
//                 },
//                 {
//                     type: 'input',
//                     name: 'email',
//                     message: 'What is your email address?'
//                 },
//                 {
//                     type: 'input',
//                     name: 'github',
//                     message: 'What is your github?'
//                 }
//             ]).then((engineerAnswers) => {
//                 team.push(new Engineer(engineerAnswers.name, engineerAnswers.email, engineerAnswers.github))
//                 console.log(team)
//             })

//         } else if (answers.employeeRole[0] === 'Intern') {
//             team.push(new Intern(answers.name, answers.email))

//             inquirer.prompt([
//                 {
//                     type: 'input',
//                     name: 'name',
//                     message: "what is your engineer's name?"
//                 },
//                 {
//                     type: 'input',
//                     name: 'email',
//                     message: 'What is your email address?'
//                 },
//                 {
//                     type: 'input',
//                     name: 'school',
//                     message: 'What is your office number?'
//                 }
//             ]).then(() => console.log('hi'))
//         }

//     })
    
// }
// init()
// //I'm done -> are you sure done? if y, then generate html. if n, then init()


// function generateHTML(team) {
//     let html = ''
//     for (let member of team) {
//         html += `
//     <h1>${member.name}</h1>
//     `
//         if (member.getRole() === 'Engineer') {
//             html += `<h2>github:${member.github}</h2>`
//         } else if (member.getRole() === 'Intern') {
//             html += `<h2>github:${member.github}</h2>`
//         }
//     }


// }
