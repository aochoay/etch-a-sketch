const drawContainer = document.getElementById("container")
const button = document.querySelector("button")


function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = ""; 

    const squareSize = 480 / size; 

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.style.width = squareSize + "px";
        div.style.height = squareSize + "px";
        div.style.boxSizing = "border-box";
        div.style.backgroundColor = "black"
        div.style.opacity = 0;

        div.addEventListener("mouseover", () => {
            div.style.opacity = parseFloat(div.style.opacity) + 0.1
        })

        container.appendChild(div);
    }
}


button.addEventListener("click", () => {
    const squares = parseInt(prompt("Enter the grid size (1-100): "));

    if(squares > 0 && squares <= 100){
        createGrid(squares)
    } else {
        alert("Please enter a number between 1 and 100.")
    }
})

createGrid(16);

