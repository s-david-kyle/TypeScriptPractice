"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    render() { }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log(`Drawing a circle with radius ${this.radius}`);
    }
}
let shape = new Circle(20, "red");
shape.render();
//# sourceMappingURL=index.js.map