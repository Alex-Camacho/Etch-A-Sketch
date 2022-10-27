let container = document.getElementById("container");

var columns = 16;
var rows = 16;

for(i = 1; i <= columns; i++){
    for(j = 1; j <= rows; j++){
        var square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    }
}

function setSquares(){
for(i = 1; i <= columns; i++){
    for(j = 1; j <= rows; j++){
        var square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    }
}
}

let button64 = document.getElementById("64px");
button64.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square")
    
    squares.forEach(square => {  //Quita .square previos
        square.remove();
    });

    columns = 64;
    rows = 64;
    setSquares();
    document.getElementById("container").style.gridTemplateColumns = "repeat(64, auto)" ;
})

container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
})

container.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "grey";
})






