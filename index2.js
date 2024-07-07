let boxes = document.querySelectorAll(".box");
let reset_btn= document.querySelector(".reset");
let new_game = document.querySelector(".new");
let msg_c = document.querySelector(".msg");
let congo = document.querySelector("#win");

let a = true;

let win_pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(a){
            box.innerHTML = "X";
            a = false;
        }
        else{
            box.innerHTML = "O";
            a = true;
        }
        box.disabled = true
        check_winner()
    });
});

const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}

const show_winner = (winner) =>{
    congo.innerText = `Winner is ${winner}`
    msg_c.classList.remove("hide");
    disabledboxes();
}

const show_tie = () => {
    congo.innerText = `Tie!`;
    msg_c.classList.remove("hide");
    disabledboxes();
};

const check_winner = () =>{
    for(let pattern of win_pattern){
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if(pos1 != "" && pos2 != "" && pos3 != "" ){
            if(pos1 == pos2 && pos2 == pos3){
                console.log('Winner ',pos1);
                show_winner(pos1);
                return;
            }
        }
    }
    let fill = true;
    for (let box of boxes) {
        if (box.innerHTML === "") {
            fill = false;
            break;
        }
    }

    if (fill) {
        show_tie();
    }
};


const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}
const resetGame = () =>{
    a = true;
    enableBoxes();
    msg_c.classList.add("hide");
}

reset_btn.addEventListener("click", resetGame);
new_game.addEventListener("click", resetGame);