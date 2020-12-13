const ProgrammerLife = require("./SingletonPatternBusinessLogic.js");

let firstprogrammerInstance = ProgrammerLife.getInstance();
let secondprogrammerInstance = ProgrammerLife.getInstance();

firstprogrammerInstance.sleeping();
console.log(firstprogrammerInstance.Activity());

secondprogrammerInstance.notsleeping();
console.log(secondprogrammerInstance.Activity());