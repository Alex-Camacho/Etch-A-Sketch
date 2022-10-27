//DEFAULT SIZE 16x16
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

//16x16 button

let button16 = document.getElementById("16px");
button16.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square")
    
    squares.forEach(square => {  //Quita .square previos
        square.remove();
    });

    columns = 16;
    rows = 16;
    setSquares();
    document.getElementById("container").style.gridTemplateColumns = "repeat(16, auto)" ;
})

//64x64 button
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


//Clear button
let clearbutton = document.getElementById("clear");
clearbutton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.style.backgroundColor = "white";
    })
})



//Rainbow button
let rainbow = document.getElementById("rainbow");
rainbow.addEventListener("click", () => {
    
    container.addEventListener("mouseover", (event) => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.target.style.backgroundColor = "#" + randomColor;
    })
})


//Pencil button
let pencil = document.getElementById("pencil");
pencil.addEventListener("click", () => {
container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "grey";
})
});