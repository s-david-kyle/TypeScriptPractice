class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  protected walk(): void {
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
    this.walk();
    console.log("I am taking a test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

class Prinipal extends Person {
  override get fullName() {
    return "Prinipal " + super.fullName;
  }
}

printNames([
  new Person("John", "Doe"),
  new Student(1, "Jane", "Doe"),
  new Teacher("John", "Smith"),
  new Prinipal("Jane", "Smith"),
]);
