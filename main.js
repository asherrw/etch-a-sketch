let color = 'teal';

function createGrid(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", coloring);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
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

// Color buttons
function changeColor(choice) {
    color = choice;
}

// Reset button
function reset() {
let board = document.querySelector('.board');
let squares = board.querySelectorAll('div');
squares.forEach((div) => div.style.backgroundColor = 'white');
}