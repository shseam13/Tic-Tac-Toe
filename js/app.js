let turn0 = true;
let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let winner_alert = document.getElementById("winner-alert-id");

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = 'o';
            turn0 = false;
        }else{
            box.innerText = 'x';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

reset.addEventListener("click", () => {
    turn0 = true;
    for(let i = 0; i < boxes.length; i++){
        boxes[i].innerText = '';
        boxes[i].disabled = false;
        winner_alert.style.display = 'none';
        winner_alert.innerText = '';
    }
    reset.innerText = 'Reset';
});

// when winner found the other buttons should be disabled.
const boxDisabled = () =>{
    for(let i = 0; i < boxes.length; i++){
        boxes[i].disabled = true;
    }
}

const checkWinner = () =>{
    let winner = false;
    for(let i = 0; i < win.length; i++){
        const [a,b,c] = win[i];
        if(boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText && boxes[a].innerText !== ''){
            winner = true;
            winner_alert.style.display = 'block';
            winner_alert.innerText = `Winner is ${boxes[a].innerText.toUpperCase()}`;
            reset.innerText = 'Play Again';
            boxDisabled();
            break;
        }else{
            checkDraw()
        }
    }

}

const checkDraw = () =>{
    let draw = true;
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].innerText === ''){
            draw = false;
            break;
        }
    }
}

