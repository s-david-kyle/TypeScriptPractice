class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return "${this.firstName} ${this.lastName}";
  }

  walk(): void {
    console.log("I am walking");
  }
  talk(): void {
    console.log("I am talking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest(): void {
    console.log("I am taking a test");
  }
}

let student = new Student(1, "John", "Doe");
student.walk();
