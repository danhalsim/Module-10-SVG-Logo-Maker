const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
    test("Circle render method should return a valid SVG string", () => {
        const circle = new Circle();
        const svg = circle.render();
        expect(svg).toMatch(/<svg/);
        expect(svg).toMatch(/<circle/);
        expect(svg).toMatch(/<text/);
    });
});

describe("Square", () => {
    test("Square render method should return a valid SVG string", () => {
        const square = new Square();
        const svg = square.render();
        expect(svg).toMatch(/<svg/);
        expect(svg).toMatch(/<rect/);
        expect(svg).toMatch(/<text/);
    });
});

describe("Triangle", () => {
    test("Triangle render method should return a valid SVG string", () => {
        const triangle = new Triangle();
        const svg = triangle.render();
        expect(svg).toMatch(/<svg/);
        expect(svg).toMatch(/<polygon/);
        expect(svg).toMatch(/<text/);
    });
});