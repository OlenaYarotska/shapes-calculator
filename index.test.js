import { Square } from './index.js';

test('testSquare', () => {
    const square = new Square(2);
    expect(square.calcPerimeter()).toBe(8);
});

test('testArea', () => {
    const square = new Square(2);
    expect(square.calcArea()).toBe(4);
});
