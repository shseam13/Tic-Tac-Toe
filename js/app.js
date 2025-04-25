let turn0 = true;
let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let winner_alert = document.getElementById("winner-alert-id");
// disable forwar history, so that the browser back button can be disabled.
window.history.forward(1);
// disabling right click.
document.addEventListener('contextmenu', event => event.preventDefault());

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

// checkWinner() function executes after each input and checkes if the innerText of the boxes matches the winning pattern we defined in 'win' array. Otherwise it calls the checkDraw() function autometically.
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



// draw functionalities if the value of 'i' is equal to the value of box 'length-1' then it should be a draw. Because there are no box left to input and still the checkWinner() function didn't do its work then the checkDraw() function will autometically executed.
const checkDraw = () =>{
    let draw = true;
    for(let i = 0; i < boxes.length; i++){
        console.log(i)
        if(boxes[i].innerText === ''){
            draw = false;
            break;
        }else if(i === boxes.length - 1){
            winner_alert.style.display = 'block';
            winner_alert.innerText = `It's a draw`;
            reset.innerText = 'Play Again';
            boxDisabled();
            break;
        }
    }
}

