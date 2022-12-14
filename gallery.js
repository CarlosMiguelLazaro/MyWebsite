var picFullBg = document.getElementById("picFullBg");
var picFullImg = document.getElementById("picFullImg");
function openPicFull(Img){
	picFullBg.style.display = "flex";
	picFullImg.src = Img;
}
function closePicFull(){
	picFullBg.style.display = "none";
}