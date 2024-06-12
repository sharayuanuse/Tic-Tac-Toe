let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //playerX, playerO

const winPatterns = [
    // Horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // Vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //Diagonal
    [0,4,8],
    [2,4,6]
]; 

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.style.color = "yellow";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "white";
            turnO = true
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}
const showWinner = (winner) => {
    msg.innerText = "Congratulations, Winner is " + winner;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;

        if(pos1 != '' && pos2 != '' && pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);