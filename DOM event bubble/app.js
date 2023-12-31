


let bubble="";
for(let i=0;i<200;i++){
    let num= Math.floor(Math.random()*100);
    bubble += `<div class='circle'>${num}</div>`;

}



let a=document.getElementById("screen-bottom");
a.innerHTML=bubble;
let counter=0;
let b=document.getElementsByClassName("circle");
let c=document.getElementsByClassName("box");
for(let i=0;i<b.length;i++){
    b[i].addEventListener("click",function(){
        b[i].style.backgroundColor="red";
        counter = counter + parseInt(b[i].innerHTML);
        console.log(counter);
        c[1].innerHTML=counter;
    })
}


