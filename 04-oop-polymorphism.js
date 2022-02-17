class Shape{
    draw(){
        return "Draw a shape";
    }
}

class Circle extends Shape{
    constructor(){
        super();
    }

    draw(){
        return "Draw a Circle"
    }
}

class Square extends Shape{
    constructor(){
        super();
    }
    draw(){
        return "Draw a Square"
    }
}

class ShapeClone extends Shape{
    constructor(){
        super();
    }
}

var shape = new Shape();
var shapeClone = new ShapeClone();
console.log(shape.draw());
console.log(shapeClone.draw());
console.log('============');
var circle = new Circle();
var square = new Square();
console.log(circle.draw());
console.log(square.draw());