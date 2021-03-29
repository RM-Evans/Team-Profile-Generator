

const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(){
        
        super(
            { name: 'github', type: 'text', message: 'Github Username' }
        )
    }

    getAdditionalHtml() {
        return `- Github: <a href="https://github.com/${this.github}">${this.github}</a>`
    }
}

module.exports = Engineer