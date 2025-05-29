import { Square, createShape, Shape, Circle } from './index.js';

test('testSquare', () => {
    const square = new Square(2);
    expect(square.calcPerimeter()).toBe(8);
});

test('testArea', () => {
    const square = new Square(2);
    expect(square.calcArea()).toBe(4);
});

test('testCreateShape', () => {
    const shape = createShape("Square TopRight 1 1 Side 1");
    expect(shape.type).toBe("Square");
});

test('testToString', () => {
    const square = new Square(2);
    expect(square.toString()).toBe("Square Perimeter: 8 Area: 4");
});

test('testCreateShapeInstance', () => {
    const shape = createShape("Square TopRight 1 1 Side 1");
    expect(shape).toBeInstanceOf(Square);
    expect(shape).toBeInstanceOf(Shape);
});

test('testCreateShapeCircleInstance', () => {
    const shape = createShape("Circle Center 1 1 Radius 2");
    expect(shape).toBeInstanceOf(Circle);
    expect(shape).toBeInstanceOf(Shape);
});