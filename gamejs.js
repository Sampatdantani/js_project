let boxes = document.querySelectorAll(".box");
let rstbtn=document.querySelector("#rstbtn");
let msgc=document.querySelector(".msgc");
let msg=document.querySelector("#msg");
let resetbtn=document.querySelector("#rstbtn");

let turno=true ;

const winPatter=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked")
        if(turno){
            box.innerText = "O";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    })
})

const disableBoxes=()=>{
     for(let box of boxes){
        box.disabled=true;
     }
}

const showwinner =(winner)=>{
    msg.innerText =`congratulation,Winner is ${winner}`;
    msgc.classList.remove("hide");
    disableBoxes();
}

const checkwinner = ()=>{
    for(let pattern of winPatter){
           let pos1 = boxes[pattern[0]].innerText;
           let pos2 = boxes[pattern[1]].innerText;
           let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner is",pos1);
                showwinner(pos1);
            }
        }
    }
}

const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame=()=>{
    turno=turno;
    enablebtn();
    msgc.classList.add("hide");

}
rstbtn.addEventListener("click",resetgame);