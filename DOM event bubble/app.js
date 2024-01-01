// get the dom elements
let screenbtm=document.getElementById("screen-bottom");
let circle=document.getElementsByClassName("circle");
let nav=document.getElementsByClassName("box");
// initialize variables
let counter=0;
let bubble='';
// create 200 random bubbles
for(let i=0;i<200;i++){
    let num= Math.floor(Math.random()*100);
    bubble += `<div class='circle'>${num}</div>`;

}
// display bubbles on screen
screenbtm.innerHTML=bubble;


// add event listener to each bubble and update score
for(let i=0;i<circle.length;i++){
    circle[i].addEventListener("click",function(){
        // change color of bubble
        circle[i].style.backgroundColor="red";
        // count score
        counter = counter + parseInt(circle[i].innerHTML);
                // update score
                nav[1].innerHTML=counter;
    })
}
//set the timer
nav[0].innerHTML=20;
let timer=20;
// update timer
let time=setInterval(function(){
   if(timer>0){
       timer--;
       nav[0].innerHTML=timer;
   }
   else{
        // stop timer
       clearInterval(time);
       // display final score
       screenbtm.innerHTML='<h1 style="color:blue">Game Over!!!<br>Your Final Score is:' + nav[1].innerHTML + '</h1>';
       
   }
}, 1000);





