const Employee = require("../lib/employee");

const philly = new Employee(
    "philly",
    "33",
    "123fake@madeup.com",
    "phlipadelphia"
)
// test the constructer
test('verify constructor takes values', () => {
    expect(philly.theirname).toBe('philly')
    expect(philly.id).toBe('33')
    expect(philly.email).toBe('123fake@madeup.com')
    expect(philly.github).toBe('phlipadelphia')
})


// testing the constructer and the methods
test("Check Employee Name", function(){
    let testObject = new Employee("Philly")
    expect(testObject.name).toBe('Philly')
})

test("Check Employee ID", function(){
    let testObject = new Employee("Philly", 33)
    expect(testObject.id).toBe(33)
})

test("Check Employee Email", function(){
    let testObject = new Employee("Philly", 33, '123fake@madeup.com')
    expect(testObject.email).toBe('123fake@madeup.com')
})

test("Check getName", function(){
    let testObject = new Employee("Philly")
    expect(testObject.getName()).toBe('Philly')
})

test("Check getId", function(){
    let testObject = new Employee("Philly", 33)
    expect(testObject.getId()).toBe(33)
})

test("Check getEmail", function(){
    let testObject = new Employee("Philly", 33, '123fake@madeup.com')
    expect(testObject.getEmail()).toBe('123fake@madeup.com')
})