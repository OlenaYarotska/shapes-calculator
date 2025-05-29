class Shape {
    constructor(type) {
        this.type = type;
    }
    calcPerimeter() {
        
    }
    calcArea() {
        
    }
    toString() {
        const perimeter = Math.round(this.calcPerimeter());
        const area = Math.round(this.calcArea());
        return `${this.type} Perimeter: ${perimeter} Area: ${area}`;
    }
};

class Square extends Shape{
    side;

    constructor(side) {
        super("Square");
        this.side = side;
    }
    calcPerimeter() {
        return 4 * this.side;
    }
    calcArea() {
        return this.side * this.side; 
    }
};

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    calcPerimeter() {
        return 2 * (this.width + this.height);
    }
    calcArea() {
        return this.width * this.height;
    }
};

class Circle extends Shape {
    radius;

    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    calcPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    calcArea() {
        return Math.PI * this.radius * this.radius;
    }
};

class Triangle extends Shape {
    side1;
    side2;
    side3;

    constructor(x1, y1, x2, y2, x3, y3) {
        super("Triangle");
        this.side1 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        this.side2 = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
        this.side3 = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
    }
    calcPerimeter() {
     return this.side1 + this.side2 + this.side3;
    }
    calcArea() {
        const halfPerimeter = this.calcPerimeter / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.side1) * (halfPerimeter - this.side2) * (halfPerimeter - this.side3));
    }
};

export function createShape(line) {
    const arrayOfWords = line.split(" ");
    const shapeType = arrayOfWords[0];

    const isNumber = index => {
        const n = parseFloat(arrayOfWords[index]);
        return n;
    }
    switch (shapeType) {
        case "Square":
            const side = isNumber(5);
            return new Square(side);
        case "Rectangle":
            const topRightX = isNumber(2);
            const topRightY = isNumber(3);
            const bottomLeftX = isNumber(5);
            const bottomLeftY = isNumber(6);
            const width = Math.abs(topRightX - bottomLeftX);
            const height = Math.abs(topRightY - bottomLeftY);
            return new Rectangle(width, height);
        case "Circle":
            const radius = isNumber(5);
            return new Circle(radius);
        case "Triangle":
            const x1 = isNumber(2);
            const y1 = isNumber(3);
            const x2 = isNumber(5);
            const y2 = isNumber(6);
            const x3 = isNumber(8);
            const y3 = isNumber(9);
            return new Triangle(x1, y1, x2, y2, x3, y3);
        default:
            return null;
    };
}

function calcResults() {
    const input = document.getElementById("input").value;
    const lines = input.split("\n");
    let output = [];

    for (let line of lines) {
        const trimmedLine = line.trim();

        if (trimmedLine) {
        const shape = createShape(trimmedLine);
            if (shape) {
                output.push(shape.toString());
            } else {
                output.push("Input is not correct"); 
            }
        } else {
            output.push("")
        }
    }
    document.getElementById("output").innerText = output.join("\n");
};
export { Square, Shape };

// function calcParams(type, calcPerimeter, calcArea) {
//     return {
//         type: type,
//         calcPerimeter: calcPerimeter,
//         calcArea: calcArea,
//         toString: function () {
//             // return `${this.type} Perimeter: ${this.calcPerimeter().toFixed(2)} Area: ${this.calcArea().toFixed(2)}`;
//             const perimeter = Math.round(this.calcPerimeter());
//             const area = Math.round(this.calcArea());
//             return `${this.type} Perimeter: ${perimeter} Area: ${area}`;
//         }
//     }
// };

// function calcSquare(side) {
//     return calcParams(
//         "Square",
//         () => 4 * side,
//         () => side * side
//     );
// };

// function calcRectangle(width, height) {
//     return calcParams(
//         "Rectangle",
//         () => 2 * (width + height),
//         () => width * height
//     );
// };

// function calcCircle(radius) {
//     return calcParams(
//         "Circle",
//         () => 2 * Math.PI * radius,
//         () => Math.PI * radius * radius,
//     );
// };

// function calcTriangle(x1, y1, x2, y2, x3, y3) {
//     const side1 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//     const side2 = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
//     const side3 = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);

//     const perimeter = () => side1 + side2 + side3;

//     const area = () => {
//         const halfPerimeter = perimeter() / 2;
//         return Math.sqrt(halfPerimeter * (halfPerimeter - side1) * (halfPerimeter - side2) * (halfPerimeter - side3));
//     };
//     return calcParams("Triangle", perimeter, area);
// };

// function createShape(line) {
//     const arrayOfWords = line.split(" ");
//     const shapeType = arrayOfWords[0];

//     if (shapeType === "Square") {
//         const side = parseFloat(arrayOfWords[5]);
//         return calcSquare(side);
//     } else if (shapeType === "Rectangle") {
//         const topRightX = parseFloat(arrayOfWords[2]);
//         const topRightY = parseFloat(arrayOfWords[3]);
//         const bottomLeftX = parseFloat(arrayOfWords[5]);
//         const bottomLeftY = parseFloat(arrayOfWords[6]);
//         const width = Math.abs(topRightX - bottomLeftX);
//         const height = Math.abs(topRightY - bottomLeftY);
//         return (calcRectangle(width, height));
//     } else if (shapeType === "Circle") {
//         const radius = parseFloat(arrayOfWords[5]);
//         return calcCircle(radius);
//     } else if (shapeType === "Triangle") {
//         const x1 = parseFloat(arrayOfWords[2]);
//         const y1 = parseFloat(arrayOfWords[3]);
//         const x2 = parseFloat(arrayOfWords[5]);
//         const y2 = parseFloat(arrayOfWords[6]);
//         const x3 = parseFloat(arrayOfWords[8]);
//         const y3 = parseFloat(arrayOfWords[9]);
//         return calcTriangle(x1, y1, x2, y2, x3, y3);
//     }
//     return null;
// };

// function calcResults() {
//     const input = document.getElementById("input").value;
//     const lines = input.split("\n");
//     let output = "";

//     for (let line of lines) {
//         line = line.trim();
//         if (line) {
//             const shape = createShape(line);
//             if (shape) {
//                 output += shape.toString() + "\n";
//             } else {
//                 output += "Input is not correct"
//             }
//         }
//     }
//     document.getElementById("output").innerText = output;
// };


