const canvas = document.querySelector(".canvas");

function addColour(e) {
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
     console.log(e.target.style)
}

function addGrid(num) {
    canvas.style["grid-template-columns"] = `repeat(${num}, 1fr)`
    canvas.style["grid-template-row"] = `repeat(${num}, 1fr)`
    for(let i = 0; i < num*num; i++) {
        const grid = document.createElement("div");
        grid.classList.add("box");
        canvas.appendChild(grid);
        grid.addEventListener("mouseenter", addColour)
    }
}

addGrid(16)