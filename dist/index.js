"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return "${this.firstName} ${this.lastName}";
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
let student = new Student(1, "John", "Doe");
student.walk();
//# sourceMappingURL=index.js.map