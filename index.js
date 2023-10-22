const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

// Questions for the user to create the logo
const questions = [
  {
    type: "input",
    message: "Enter the text for your logo (1-3 characters).",
    name: "text"
  },
  {
    type: "input",
    message: "Choose the text color (hexadecimal number or color keyword).",
    name: "textColor"
  },
  {
    type: "list",
    message: "Choose a shape for your logo:",
    name: "shape",
    choices: [
      "Circle",
      "Square",
      "Triangle",
    ]
  },
  {
    type: "input",
    message: "What color would you like your shape? (Choose hexadecimal number or enter color keyword)",
    name: "shapeColor"
  },
];


// Check if the text input is 1-3 characters long
function textCheck(data) {
  if (data.text.length > 3 || data.text.length < 1) {
    console.error("Enter 1-3 characters for your text.");
    init();
  } else {
    createLogo(data);
  }
};


// Create the SVG logo by piecing together the SVG file code
function createLogo(data) {

  // Starting part of the code that defines width and height
  let svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

  // Add shape code and fill color
  if (data.shape === "Circle") {
    svg += `<circle cx="150" cy="115" r="80" fill="${data.shapeColor}"/>`;
  } else if (data.shape === "Square") {
    svg += `<rect x="70" y="30" width="160" height="160" fill="${data.shapeColor}"/>`;
  } else if (data.shape === "Triangle") {
    svg += `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>`;
  }
  // Add text and text color
  svg += `<text x="150" y="125" text-anchor="middle" font-size="50" fill="${data.textColor}">${data.text}</text>`;
  svg += `</svg>`;

  // Write the SVG file. Display an error if an error occurred.
  fs.writeFile("logo.svg", svg, (err) => {
    err ? console.error(err) : console.log("Generated logo.svg");
  })
};


// Function to start questions
function init() {
  inquirer.prompt(questions)
    .then(textCheck);
};

// Function call to initialize app
init();