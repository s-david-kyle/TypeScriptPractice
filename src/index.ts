abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log(`Drawing a circle with radius ${this.radius}`);
  }
}

let shape = new Circle(20, "red");
shape.render();
