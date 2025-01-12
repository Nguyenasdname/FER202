class Shape {
    constructor(color){
        this.color = color;
    }

    getArea(){
        
    }

    toString(){
        return `Color: ${this.color}`
    }
}

class Rectangle extends Shape {
    constructor(color, length, width) {
      super(color);
      this.length = length;
      this.width = width;
    }
  
    getArea() {
      return this.length * this.width;
    }
  
    toString() {
      return `Rectangle - ${super.toString()}, Length: ${this.length}, Width: ${this.width}`;
    }
  }

  class Triangle extends Shape {
    constructor(color, base, height) {
      super(color);
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return (this.base * this.height) / 2;
    }
  
    toString() {
      return `Triangle - ${super.toString()}, Base: ${this.base}, Height: ${this.height}`;
    }
  }