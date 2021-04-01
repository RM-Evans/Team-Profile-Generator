const reporter = require('../lib/reporter');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const employees = [];

for (var i = 0; i < 15; i++) {
    let type;
    if (i % 2 === 0) {
        type = Manager;
    } else if (i % 3 === 0) {
        type = Engineer;
    } else {
        type = Intern;
    }
    const e = new type();
    e.id = i + 1;
    e.name = 'Bob_' + i;
    e.email = 'email' + i;

    if (i % 2 === 0) {
        e.officeNumber = 'Room ' + i;
    } else if (i % 3 === 0) {
        e.github = 'dev' + i;
    } else {
        e.school = 'School #' + i;
    }

    employees.push(e);
}




test('', async () => {
    reporter.writeReport(employees);
    console.log('Test Complete!');
});
