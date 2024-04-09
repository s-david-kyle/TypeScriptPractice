"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("I am walking");
    }
    talk() {
        console.log("I am talking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("I am taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
class Prinipal extends Person {
    get fullName() {
        return "Prinipal " + super.fullName;
    }
}
printNames([
    new Person("John", "Doe"),
    new Student(1, "Jane", "Doe"),
    new Teacher("John", "Smith"),
    new Prinipal("Jane", "Smith"),
]);
//# sourceMappingURL=index.js.map