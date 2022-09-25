var rnd1=Math.floor( Math.random()*6)+1;
var rnd2=Math.floor( Math.random()*6)+1;
var sourc1="images/dice" + rnd1 + ".png"
var sourc2="images/dice" + rnd2 + ".png"
document.querySelectorAll("img")[0].setAttribute("src",sourc1);
document.querySelectorAll("img")[1].setAttribute("src",sourc2);
if(rnd1<rnd2){
  document.querySelector("h1").style.fontSize="3rem";
  document.querySelector("h1").innerHTML="2nd player is the winner";
}
else if(rnd1>rnd2){
  document.querySelector("h1").style.fontSize="3rem";
  document.querySelector("h1").innerHTML="1st player is the winner";
}
else(
  document.querySelector("h1").innerHTML="!! draw !!"
)
