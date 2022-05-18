const canvas = document.querySelector(".canvas");

function addColour(color) {

}

function addGrid(num) {
    canvas.style["grid-template-columns"] = `repeat(${num}, 1fr)`
    canvas.style["grid-template-row"] = `repeat(${num}, 1fr)`
    for(let i = 0; i < num*num; i++) {
        const grid = document.createElement("div");
        grid.classList.add("box");
        canvas.appendChild(grid);
        grid.addEventListener("hover", addColour)
    }
}

addGrid(16)