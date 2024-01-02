// get the dom elements
let screenbtm=document.getElementById("screen-bottom");
let circle=document.getElementsByClassName("circle");
let nav=document.getElementsByClassName("box");

// initialize variables
let counter=0;
let bubble='';

//set the timer
nav[0].innerHTML=7;
let timer=7;

// create 200 random bubbles
function createBubbles(){  
    bubble='';
    for(let i=0;i<200;i++){
    
    let num= Math.floor(Math.random()*100);
    bubble += `<div class='circle'>${num}</div>`;

    }
    // display bubbles on screen
    screenbtm.innerHTML=bubble;
}

// add event listener to bubbles
document.querySelector("#screen-bottom").addEventListener("click",function(details){
    
    // check if the target is a bubble
    if(details.target.className=="circle"){
        // count score
        counter+=parseInt(details.target.innerHTML);
        // update score
        nav[1].innerHTML=counter;
        // reload bubbles
        createBubbles();
       
    }
});


function gameOver(){
// display final score
screenbtm.innerHTML=`<h1 style="color:blue">Game Over!!!<br>Your Final Score is: ${nav[1].innerHTML} </h1>`;
}

// update the timer
function updateTime(){
        let time= setInterval(function(){
            if(timer>0){
                timer--;
                nav[0].innerHTML=timer;
            }
            else{
                 // stop timer
                clearInterval(time);
                //game over
                gameOver();
                
            }
         }, 1000);
    }
  
createBubbles();
updateTime();




