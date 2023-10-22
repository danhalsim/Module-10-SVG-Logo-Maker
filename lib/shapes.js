class Circle {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="red"/><text x="150" y="125" text-anchor="middle" font-size="50" fill="black">aaa</text></svg>`
    }
};

class Square {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="30" width="160" height="160" fill="yellow"/><text x="150" y="125" text-anchor="middle" font-size="50" fill="white">bbb</text></svg>`
    }
};

class Triangle {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="125" text-anchor="middle" font-size="50" fill="gray">ccc</text></svg>`
    }
};

module.exports = { Circle, Square, Triangle }