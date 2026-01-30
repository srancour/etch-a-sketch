// To shorten log command later on
const log = console.log;

const grid = document.getElementById("grid");

let numberRows = 16;
let numberColumns = 16;

let rows = document.querySelectorAll(".row");
let cells = document.querySelectorAll(".column");

function makeGrid (rows, columns) {
    log(rows, columns);
    for (i = 0; i < rows; i++) {
        const makeRow = document.createElement("div");
        makeRow.className = "row";

        grid.appendChild(makeRow);
        for (j = 0; j < columns; j++) {
            const makeColumn = document.createElement("div");
            makeColumn.className = "column";
            
            makeRow.appendChild(makeColumn);
        }
    }
    rows = document.querySelectorAll(".row");
    cells = document.querySelectorAll(".column");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", (event) => {
            // base project
            // cell.classList.add("filled");

            // extra credit 1
            let hexValue = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            cell.style.backgroundColor = hexValue;
        });
    });
}

makeGrid(numberRows, numberColumns);

const selectButton = document.getElementById("select");

selectButton.addEventListener("click", (event) =>{
    let height;
    let width;
    function setWidth(){
        width = prompt("Set width of grid");

        if (width !== null && width !== "") {
            width = Number(width);
            if (Number.isInteger(width)){
                if (width <= 100 && width >= 1) {
                    return;
                } else {
                    alert("You must choose a number between 1 and 100");
                    setWidth();
                }
            } else {
                alert("You must put in a number");
                setWidth();
            }
        } else {
            alert("You must set a width for the grid");
            setWidth();
        }
    }

    function setHeight(){
        height = prompt("Set height of grid");

        if (height !== null && height !== "") {
            height = Number(height);
            if (Number.isInteger(height)){
                if (height <= 100 && height >= 1) {
                    return;
                } else {
                    alert("You must choose a number between 1 and 100");
                    setHeight();
                }
            } else {
                alert("You must put in a number");
                setHeight();
            }
        } else {
            alert("You must set a height for the grid");
            setHeight();
        }
    }
    setWidth();
    setHeight();
    rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.remove();
    });
    makeGrid(height, width);
});