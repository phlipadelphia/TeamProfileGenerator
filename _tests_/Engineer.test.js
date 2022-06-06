const Engineer = require("../lib/engineer");


// testing the constructer and the methods
test("Check Enginner Name", function(){
    let testObject = new Engineer("Philly")
    expect(testObject.name).toBe('Philly')
})

test("Check Engineer ID", function(){
    let testObject = new Engineer("Philly", 33)
    expect(testObject.id).toBe(33)
})

test("Check Engineer Email", function(){
    let testObject = new Engineer("Philly", 33, '123fake@madeup.com')
    expect(testObject.email).toBe('123fake@madeup.com')
})

test("Check getName", function(){
    let testObject = new Engineer("Philly")
    expect(testObject.getName()).toBe('Philly')
})

test("Check getId", function(){
    let testObject = new Engineer("Philly", 33)
    expect(testObject.getId()).toBe(33)
})

test("Check getEmail", function(){
    let testObject = new Engineer("Philly", 33, '123fake@madeup.com')
    expect(testObject.getEmail()).toBe('123fake@madeup.com')
})

test("Check getGithub", function(){
    let testObject = new Engineer("Philly", 33, '123fake@madeup.com', 'phlipadelphia')
    expect(testObject.getGithub()).toBe('phlipadelphia')
})

test("Check getRole", function(){
    let testObject = new Engineer("Philly", 33, '123fake@madeup.com', 'phlipadelphia')
    expect(testObject.getRole()).toBe('engineer')
})