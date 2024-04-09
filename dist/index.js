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
        super("John", "Doe");
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
//# sourceMappingURL=index.js.map