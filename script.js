let boxex = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn button");
let display = document.querySelector(".turn span");
let newBtn = document.querySelector(".show-winner button");
let winBox = document.querySelector(".show-winner");
let winText = document.querySelector(".show-winner h1");

let player_O = true;
let turn_count = 0;

let winning_pattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


const checkWinner = () => {
    winning_pattern.forEach(pattern => {
         if (boxex[pattern[0]].innerHTML == "O" && boxex[pattern[1]].innerHTML == "O" && boxex[pattern[2]].innerHTML == "O") {
            winText.innerHTML = "Hurray! Player O won...";
            winBox.style.visibility = "visible";
         }
         else if (boxex[pattern[0]].innerHTML == "X" && boxex[pattern[1]].innerHTML == "X" && boxex[pattern[2]].innerHTML == "X") {
            winText.innerHTML = "Hurray! Player X won...";
            winBox.style.visibility = "visible";
         }
         else if (turn_count == 9) {
            winText.innerHTML = "Game Draw !!!";
            winBox.style.visibility = "visible";
         }
    })
}

const display_OX = (box) => {
    if (player_O == true) {
        box.innerHTML = "O";
        player_O = false;
        display.innerHTML = "Player X";
    }
    else{
        box.innerHTML = "X";
        player_O = true;
        display.innerHTML = "Player O";
    }
    box.removeEventListener("click", box.handleclick);
    turn_count++;
    checkWinner();
}

boxex.forEach(box => {
    box.handleclick = () => display_OX(box);
    box.addEventListener("click", box.handleclick); 
});

resetBtn.onclick = () => {
    boxex.forEach(box => {
        box.innerHTML = "";
        box.handleclick = () => display_OX(box);
        box.addEventListener("click", box.handleclick); 
    });
    turn_count = 0;
    player_O = true;
    display.innerHTML = "Player O";
};

newBtn.onclick = () => {
    boxex.forEach(box => {
        box.innerHTML = "";
        box.handleclick = () => display_OX(box);
        box.addEventListener("click", box.handleclick); 
    });
    player_O = true;
    display.innerHTML = "Player O";
    winBox.style.visibility = "hidden";
};