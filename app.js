let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level =0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false)
    {
    console.log("game started");
    started=true;
    levelup();
    }
})
function gameFlash(btn)
{
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash")
},250)
}
function btnFlash(btn)
{
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash")
},250)
}
function levelup()
{
    userSeq=[];
    level++;
    h2.innerText="LEVEL"+level;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
   gameFlash(randBtn);
}
function checkAns(idx){
    console.log("current level",level);
    if(userSeq[idx]==gameSeq[idx])
    {
      if(userSeq.length==gameSeq.length)
      {
        setTimeout(levelup,1000);
      }
    }else{
        h2.innerHTML=`GAME OVER YOUR SCORE WAS <b>${level} </b>  <br> PRESS AGAIN ANY KEY TO START`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    console.log(this);
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}
function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}