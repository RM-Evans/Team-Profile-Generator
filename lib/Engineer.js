

const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email)
    super(name, id, email)
    //this.github = github
    //this.name = name
    // this.email = email
    // this.phoneNumber = phoneNumber

    getRole() {
        return 'Engineer'
    }
}
