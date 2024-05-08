let box = document.querySelectorAll(".box");
let btn = document.getElementById("btn");
let win = document.getElementById("win");
let pl1 = document.getElementById("player1");
let pl2 = document.getElementById("player2");
let player1 = true;
let pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

btn.addEventListener("click", () => {
    box.forEach(boxs => {
        boxs.innerText = "";
        win.innerText = "";
        boxs.disabled = false;
        player1 = true;
    });
    btn.style.visibility = 'hidden';
    box.forEach(boxs => {
        boxs.addEventListener("click", () => {
            if (boxs.innerText === "") {
                if (player1) {
                    boxs.innerText = "x";
                    player1 = false;
                } else {
                    boxs.innerText = "o";
                    player1 = true;
                }
                boxs.disabled = true;
                check();
            }
        });
    });
    
});
function check(){
    for(let patterns of pattern){
        let p1 = box[patterns[0]].innerText;
        let p2 = box[patterns[1]].innerText;
        let p3 = box[patterns[2]].innerText;
        
        if(p1 !="" && p2 !="" && p3 !=""){
            if(p1==p2 && p2==p3){
                if(p1=="x"){
                    win.innerText=`${pl1.value} is winner!!`;
                    dis();
                    btn.style.visibility = 'visible';
                }
                else if(p1=="o"){
                    win.innerText=`${pl2.value} is winner!!`;
                    dis();
                    btn.style.visibility = 'visible';
                }
            }
            else if([...box].every(box => box.innerText)){
                win.innerText=`Draw!!`;
                btn.style.visibility = 'visible';
            }
        }
        
    }
};

function dis(){
    for(let boxes of box){
        boxes.disabled=true;
    }
}

