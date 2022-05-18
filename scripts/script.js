const canvas = document.querySelector(".canvas");
const slider = document.querySelector(".slider-range");
const sliderText = document.querySelector(".slider-text");

function changeSlider() {
    sliderText.textContent = slider.value;
    changeGrid(slider.value);
} 

function addSlider(num) {
    slider.value = num;
    sliderText.textContent = num;
    slider.addEventListener("input", changeSlider);
}

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

function changeGrid(num) {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    addGrid(num)
}


addGrid(16)
addSlider(16)