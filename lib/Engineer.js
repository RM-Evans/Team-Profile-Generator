

const Employee = require('./Employee');


class Engineer extends Employee {
    constructor() {

        super(
            { name: 'github', type: 'text', message: 'Github' }
        );
    }

    getAdditionalHtml() {
        return `<li> Github: <a href="https://github.com/${this.github}">${this.github}</a></li>`;
    }
}

module.exports = Engineer;;


// constructor(additionalprompts, name, email, github){
//     if(email || github){
//         super(additionalprompts, name, email)
//         this.github = github
//     } else {
//         super(
//             //{ name: 'github', type: 'text', message: 'Github' }
//             additionalprompts
//         )
