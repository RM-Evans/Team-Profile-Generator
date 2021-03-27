const Manager = require('../lib/manager.js')

test('make sure manager is fine or something like that', () => {
    //make a test manager
    const manager = new Manager('brad', 'brad@yahoo.com')

    expect(manager.name).toEqual('brad')
    expect(manager.email).toEqual('brad@yahoo.com')
    expect('manager.phoneNumber').toEqual(1234)

    //GG

})

test('test methods', () => {
    const manager = new Manager('brad', 'brad@yahoo.com')

    expect(manager.getName)
})