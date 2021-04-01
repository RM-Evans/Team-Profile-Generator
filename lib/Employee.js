const inquirer = require('inquirer');

class Employee {

    constructor(...additionalPrompts) {
        this.additionalPrompts = additionalPrompts;
    }

    async promptInfo() {
        try {

            const answers = await inquirer.prompt([
                { name: 'id', type: 'number', message: 'Employee ID' },
                { name: 'name', type: 'text', message: 'Employee name' },
                { name: 'email', type: 'text', message: 'Employee email' },
                ...this.additionalPrompts
            ]);

            delete this.additionalPrompts;
            Object.assign(this, answers);
        } catch (error) {
            console.log(error);
        }
    }

    getRole() {
        return this.constructor.name;
    }

    getRowHtml() {
        return `
            <div class="employeeCard">
                <ul>
                    <li class="name"> Name: ${this.name} </li>
                    <li class="id"> ID: ${this.id} </li>
                    <li class="role"> Role: ${this.getRole()}
                    <li class="email"> Email: <a href="mailto:${this.email}">${this.email}</a>  </li>
                    ${this.getAdditionalHtml()} 
                </ul>
            </div>
        `;
    }

    getAdditionHtml() {
        return '';
    }
}

module.exports = Employee;;












//____________________________________________
// class Employee {
//     constructor(name, id, email)  {
//         this.name = name
//         this.id = id
//         this.email = email

//     // this.getRole = () => {
//     //     return 'Employee'
//     // }
//     }
// }

// module.exports = Manager

// const Employee = new Manager('name', email, phoneNumber)