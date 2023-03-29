// ADMIN

console.log("hello weenies <3");

let body = document.body;

// Buttons
const rainbow = document.getElementById('rainbow');
const green = document.getElementById('green');
const reset = document.getElementById('reset');



// GRID CREATION

// Default Grid
// function createGrid(gridSize) {
//     for (let i = 0; i < gridSize; i++){ 
//         let row = document.createElement("div"); 
//         row.className = "row"; 
//         for(let x = 1; x <= gridSize; x++){ 
//             let cell = document.createElement("div"); 
//             cell.className = "cell"; 
//             row.appendChild(cell); 
//         } 
//         container.appendChild(row); 
//       }
// }

function createGrid(size) {

    let container = document.querySelector('.gridContainer');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        // square.addEventListener("mouseover", coloring);
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

// Stained Glass Mosaic Grid
function createGridRainbow(gridSize) {
    for (let i = 0; i < gridSize; i++){ 
        let row = document.createElement("div"); 
        row.className = "row"; 
        for(let x = 1; x <= gridSize; x++){ 
            let cell = document.createElement("div"); 
            cell.className = "cell"; 
            cell.addEventListener('mouseover', colouringRainbow)
            row.appendChild(cell); 
        } 
        container.appendChild(row);
      }
}

// Black Pen
function createGridBlack(gridSize) {
    for (let i = 0; i < gridSize; i++){ 
        let row = document.createElement("div"); 
        row.className = "row"; 
        for(let x = 1; x <= gridSize; x++){ 
            let cell = document.createElement("div"); 
            cell.className = "cell"; 
            cell.addEventListener('mouseover', colouringBlack)
            row.appendChild(cell); 
        } 
        container.appendChild(row);
      }
}

// Green
function createGridGreen(gridSize) {
    for (let i = 0; i < gridSize; i++){ 
        let row = document.createElement("div"); 
        row.className = "row"; 
        for(let x = 1; x <= gridSize; x++){ 
            let cell = document.createElement("div"); 
            cell.className = "cell"; 
            cell.addEventListener('mouseover', colouringGreen)
            row.appendChild(cell); 
        } 
        container.appendChild(row);
      }
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

// Blue Mode
function colouringBlue(e) {
    let a = Math.random() * 254;
    let b = Math.floor(a / 8) * 8;
    let color = `rgb(${[0, 0, b]})`;
    Object.assign(e.target.style, {
        backgroundColor : color,
    });
}

// Green Mode
function colouringGreen(e) {
    let a = Math.random() * 254;
    let b = Math.floor(a / 8) * 8;
    let color = `rgb(${[0, b, 0]})`;
    Object.assign(e.target.style, {
        backgroundColor : color,
    });
}