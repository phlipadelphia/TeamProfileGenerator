const Manager = require("../lib/Manager");

// testing the constructer and the methods
test("Check Manager Name", function(){
    let testObject = new Manager("Philly")
    expect(testObject.name).toBe('Philly')
})

test("Check Manager ID", function(){
    let testObject = new Manager("Philly", 33)
    expect(testObject.id).toBe(33)
})

test("Check Manager Email", function(){
    let testObject = new Manager("Philly", 33, '123fake@madeup.com')
    expect(testObject.email).toBe('123fake@madeup.com')
})

test("Check getName", function(){
    let testObject = new Manager("Philly")
    expect(testObject.getName()).toBe('Philly')
})

test("Check getId", function(){
    let testObject = new Manager("Philly", 33)
    expect(testObject.getId()).toBe(33)
})

test("Check getEmail", function(){
    let testObject = new Manager("Philly", 33, '123fake@madeup.com')
    expect(testObject.getEmail()).toBe('123fake@madeup.com')
})

test("Check getPhone", function(){
    let testObject = new Manager("Philly", 33, '123fake@madeup.com', "555-555-5555")
    expect(testObject.getPhone()).toBe('UofA')
})

test("Check getRole", function(){
    let testObject = new Manager("Philly", 33, '123fake@madeup.com', "555-555-5555")
    expect(testObject.getRole()).toBe('Manager')
})