// To shorten log command later on
const log = console.log;

const grid = document.getElementById("grid");

let numberRows = 16;
let numberColumns = 16;

function makeGrid (rows, columns) {
    log(rows, columns);
    for (i = 0; i < rows; i++) {
        const makeRow = document.createElement("div");
        makeRow.className = "row";

        grid.appendChild(makeRow);
        log("row");
        for (j = 0; j < columns; j++) {
            const makeColumn = document.createElement("div");
            makeColumn.className = "column";
            
            makeRow.appendChild(makeColumn);
        }
    }
}

makeGrid(numberRows, numberColumns);