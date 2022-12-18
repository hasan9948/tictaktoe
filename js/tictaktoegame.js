const btn = document.querySelector("button")
const cells = document.querySelectorAll(".cell")
const board = document.querySelector(".board")
const winningmessage = document.querySelector(".winning-message")
const h1 = document.querySelector("h1")
const h2=document.querySelector("h2")
const winningcombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let count=0;
start()
///start funtion
function start(){
    h2.textContent="x's turn"
    board.classList.add("x")
}
var currenttrun;
//////// event
cells.forEach((cell) => {
    cell.addEventListener("click", clicked, { once: true })
})
function clicked(e) {
    // console.log("cliked",e.target)
    cell = e.target;
    const currentclass = currenttrun ? "circle" : "x"
    addmark(cell, currentclass)
    swapclass(currenttrun)
    hovermark()
    count =count+1
    console.log(count)
    const a= winner(currentclass); /////////winner
    if (a) {
        h2.textContent=""
        winningmessage.style.display="flex"
        const text=currenttrun?"x wins !":"0 wins !"
        h1.textContent=text
    }
    if (count==9&&!a) {
        winningmessage.style.display="flex"
        h1.textContent="draw !"
        
    }
}

//// adding mark
function addmark(cell, currentclass) {
    cell.classList.add(currentclass)
}
//swap class

function swapclass(currentclass) {
    if (currenttrun) {
        currenttrun = !currenttrun
        console.log(currenttrun)
    }
    else {
        currenttrun = true
        console.log(currenttrun)
    }
}
// hovermark
function hovermark(){
    if (board.classList.contains("x")) {
        board.classList.remove("circle")
        board.classList.add("circle")
        board.classList.remove("x")
        h2.textContent=" o' turn"
        console.log("hover1")
    }else{
        board.classList.remove("x")
        board.classList.add("x")
        board.classList.remove("circle")
        h2.textContent=" x' turn"

        console.log("hover2")

    }
}


// winner class

function winner(currentclass){
return winningcombination.some((combinations)=>{
    return combinations.every((index)=>{
        return cells[index].classList.contains(currentclass)
    })
})
}


//// restart btn

btn.addEventListener("click",()=>{
    cells.forEach((cell) => {
        cell.addEventListener("click", clicked, { once: true })
    })  
    winningmessage.style.display="none"
    h1.textContent=""
    cells.forEach((cell)=>{
        cell.classList.remove("x")
        cell.classList.remove("circle")
    })
    board.classList.remove("x")
    board.classList.remove("circle")
    start()
    console.log(currenttrun)
    currenttrun=false
count=0


})