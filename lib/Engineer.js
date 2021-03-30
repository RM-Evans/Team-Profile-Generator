

const Employee = require('./Employee')


class Engineer extends Employee {
    constructor(){
        
        super(
            { name: 'github', type: 'text', message: 'Github' }
        )
    }

    getAdditionalHtml(){
        return `<li> Github: <a href="https://github.com/${this.github}">${this.github}</a></li>`
    }
}

module.exports = Engineer
