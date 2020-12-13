
let studentData = require('./FactoryPatternBusinessLogic')

const student = []

student.push(studentData.create("Prajakta", 1));
student.push(studentData.create("Ekta", 2));
student.push(studentData.create("Shreya", 3));

function print() {
    console.log("Student name " + this.name + " and knowledge about " + this.type);
}
student.forEach(stu => {
    print.call(stu)
})