// ADMIN

console.log("hello weenies <3");

let body = document.body;
const container = document.getElementById('gridContainer');


// GRID CREATION

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++){ 
        let row = document.createElement("div"); 
        row.className = "row"; 
        for(let x = 1; x <= gridSize; x++){ 
            let cell = document.createElement("div"); 
            cell.className = "cell"; 
            cell.addEventListener('mouseover', colouring)
            row.appendChild(cell); 
        } 
        container.appendChild(row); 
      }
}
createGrid(16);


// COLOUR

let gridSquare = document.getElementsByClassName('row', 'cell');

function colouring(e) {
    let color = `rgb(${[0, 0, 0].map(channel => {
        return Math.floor(Math.random() * 256);
    }).join(',')})`
    Object.assign(e.target.style, {
        backgroundColor : color,
        opacity : 0.25
    });
}