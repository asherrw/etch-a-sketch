console.log("hello weenies <3");

let body = document.body;
const container = document.getElementById('gridContainer');

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++){ 
        let row = document.createElement("div"); 
        row.className = "row"; 
        for(let x = 1; x <= gridSize; x++){ 
            let cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
            // cell.innerText = (i * gridSize) + x;
            row.appendChild(cell); 
        } 
        container.appendChild(row); 
      } 

    }
