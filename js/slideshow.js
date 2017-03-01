/*
var createImage (img, caption){
	var img = new Image();
	img.src = src;
	img.caption = caption;
	return img;
}
var setImages(){
	imgArray[0]= {createImage("images/pic1.jpg","picture 1")};
	imgArray[1]= {createImage("images/pic2.jpg","picture 2")};
	imgArray[2]= {createImage("images/pic3.jpg","picture 3")};
	imgArray[3]= {createImage("images/pic4.jpg","picture 4")};
}*/
function createImgArray(){
	var imgArray = new Array();
	imgArray[0] = {src:"images/pic1.jpg",caption:"picture 1"};
	imgArray[1] = {src:"images/pic2.jpg",caption:"picture 2"};
	imgArray[2] = {src:"images/pic3.jpg",caption:"picture 3"};
	imgArray[3] = {src:"images/pic4.jpg",caption:"picture 4"};
	return imgArray;
}

function showImage(num,imgArray){
	var mainImg = document.getElementById("mainImg");
	mainImg.src = imgArray[num].src;
	var captionTxt = document.getElementById("captionText");
	captionTxt.innerHTML = imgArray[num].caption;
	for(var i = 0;i < imgArray.length;i++){
		document.getElementById('img'+i).className = "numOnLeave";
	}
	document.getElementById('img'+num).className = "numOnClick";
}

function changeImg(imgArray){
	var currentValue = null;
	var container = document.getElementById("slideNumbers");
	var links = container.getElementsByTagName("li");
	for(var i = 0; i < links.length;i++){
		links[i].onclick = function(){
			showImage(this.value,imgArray);
			currentValue = this.value;
		}
		
		var leftArrow = document.getElementById("leftArrow");
		var rightArrow = document.getElementById("rightArrow");
		leftArrow.onclick = function(){
			if(currentValue != 0){
				showImage(currentValue - 1,imgArray);
				currentValue--;
			}
			else if(currentValue == 0){ 
				currentValue = links.length -1;
				showImage(currentValue,imgArray);
			}
		}
		rightArrow.onclick = function(){
			if(currentValue != (links.length - 1) ){
				showImage(currentValue + 1,imgArray);
				currentValue++;
			}
			else if(currentValue == links.length -1){
				currentValue = 0;
				showImage(currentValue,imgArray);
			}
		}
	}

}	


window.onload = function(){
	var imgArray = createImgArray();
	changeImg(imgArray);
}