// ADMIN

console.log("hello weenies <3");

let body = document.body;

// Buttons
const rainbow = document.getElementById('rainbow');
const green = document.getElementById('green');
const reset = document.getElementById('reset');

function createGrid(size) {

    let container = document.querySelector('.gridContainer');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", coloring);
        square.style.backgroundColor = "white";
        container.insertAdjacentElement("beforeend", square);
    } 
}

createGrid(16);

// Change grid size
function changeGridSize(input){
    if (input < 2) {
        return console.log("That number is too low of a number you idiotic clownfish");
    } else if (input > 100) {
        return console.log("That number is too high you absolute codfish");
    } else {
    createGrid(input);
    }
}

// Function to make the divs change color
function coloring() {
    if(color == 'random'){
        this.style.backgroundColor = `rgb(${[0, 0, 0,].map(channel => {
            return Math.floor(Math.random() * 400);
        })})`;
    } else {
    this.style.backgroundColor = color;
    }
}

// Making color buttons work

let color = 'teal';

function changeColor(option){
    color = option;
}


// COLOUR FUNCTIONS

// Rainbow Stained Glass Mosaic Mode
function colouringRainbow(e) {
    let color = `rgb(${[0, 0, 0].map(channel => {
        return Math.floor(Math.random() * 256);
    }).join(',')})`
    Object.assign(e.target.style, {
        backgroundColor : color,
        opacity : 0.25
    });
}