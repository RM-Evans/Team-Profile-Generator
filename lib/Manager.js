const Employee = require ('./Employee')


class Manager extends Employee {
    constructor(){
        super(
            { name: 'officeNumber', type: 'number', message: 'Office Number' }
        )
    
    }
    getAdditionalHtml(){
        return `- Office Number: ${this.officeNumber}`
    }
}

module.exports = Manager