const Employee = require ('./Employee')


class Manager extends Employee {
    constructor(){
        
        super(
            { name: 'officeNumber', type: 'number', message: 'Office Number' }
        )
    }

    getAdditionalHtml(){
        return `<li> Office Number: ${this.officeNumber} </li>`
    }
}
module.exports = Manager