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
//# sourceMappingURL=index.js.map