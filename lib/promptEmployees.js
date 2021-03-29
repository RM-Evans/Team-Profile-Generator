const inquirer = require('inquirer')

const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const Choices = require('inquirer/lib/objects/choices')

// function to create employees
//@returns an instance of an Employee subclass

async function promptEmployeeDetails() {
    //ask them what role, so we can choose the subclass
    try {
        const { role } = await inquirer.prompt({
            type: 'checkbox',
            name: 'role',
            message: 'What role is the employee',
            choices: ['manager', 'engineer', 'intern']
        })
        //console.log(role)
    
        let impl
        if (role[0] === 'manager') {
            impl = new Manager()
        } else if (role[0] === 'engineer') {
            impl = new Engineer()
        } else if (role[0] === 'intern') {
            impl = new Intern()
        } else {
            throw new Error('Unexpected value of ${role}; goodbye!')
        }
    
        //now let subclass finish asking questions
        await impl.promptInfo()
        return impl
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    promptEmployeeDetails
}