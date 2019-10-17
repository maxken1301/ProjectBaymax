var image = document.getElementById("imgB");
var butt = document.getElementById("butt");
var butt02 = document.getElementById("butt02");
butt.addEventListener('click',function xx(){
	hidestuff("messageBox");

document.getElementById("message").textContent = "";
$(image).css("max-width", "700px");
$(image).css("max-height", "900px");
image.src = "img/final/punch.gif";
setTimeout(de, 1000);
setTimeout(cImg, 2000);

})
function de(){
	var audio = new Audio('balalala.mp3');
audio.play();
}





function cImg(){
image.src = "img/final.gif";
showstuff("messageBox");
}

function showstuff(boxid){
   document.getElementById(boxid).style.visibility="visible";
}
 
function hidestuff(boxid){
   document.getElementById(boxid).style.visibility="hidden";
}
function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}




