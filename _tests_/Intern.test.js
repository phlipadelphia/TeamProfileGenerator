const Intern = require("../lib/intern");


// testing the constructer and the methods
test("Check Intern Name", function(){
    let testObject = new Intern("Philly")
    expect(testObject.name).toBe('Philly')
})

test("Check Intern ID", function(){
    let testObject = new Intern("Philly", 33)
    expect(testObject.id).toBe(33)
})

test("Check Intern Email", function(){
    let testObject = new Intern("Philly", 33, '123fake@madeup.com')
    expect(testObject.email).toBe('123fake@madeup.com')
})

test("Check getName", function(){
    let testObject = new Intern("Philly")
    expect(testObject.getName()).toBe('Philly')
})

test("Check getId", function(){
    let testObject = new Intern("Philly", 33)
    expect(testObject.getId()).toBe(33)
})

test("Check getEmail", function(){
    let testObject = new Intern("Philly", 33, '123fake@madeup.com')
    expect(testObject.getEmail()).toBe('123fake@madeup.com')
})

test("Check getSchool", function(){
    let testObject = new Intern("Philly", 33, '123fake@madeup.com')
    expect(testObject.getSchool()).toBe('UofA')
})

test("Check getRole", function(){
    let testObject = new Intern("Philly", 33, '123fake@madeup.com', "UofA")
    expect(testObject.getRole()).toBe('Intern')
})