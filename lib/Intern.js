const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        super(
            { name: 'school', type: 'text', message: 'What School do you go to?' }
        );
    }

    getAdditionalHtml() {
        return `<li> School: ${this.school} </li>`;
    }
}

module.exports = Intern;