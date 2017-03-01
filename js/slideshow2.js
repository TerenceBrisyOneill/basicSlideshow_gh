function createImgArray(){
	var imgArray = new Array();
	imgArray[0] = {src:"images/pic1.jpg",caption:"picture 1"};
	imgArray[1] = {src:"images/pic2.jpg",caption:"picture 2"};
	imgArray[2] = {src:"images/pic3.jpg",caption:"picture 3"};
	imgArray[3] = {src:"images/pic4.jpg",caption:"picture 4"};
	imgArray[4] = {src:"images/pic1.jpg",caption:"picture 1a"};
	imgArray[5] = {src:"images/pic2.jpg",caption:"picture 2a"};
	
	return imgArray;
}
//Creating links on the fly to display images, based on an array of images size
//The links are only li's with attributes: 'value' and 'id' 
//The links need to be placed in the div with id="slideNumbers"
function createLinks(imgArray){
	var linksLength = imgArray.length;
	var liContainer = document.getElementById("imgLi_s");
	var img = "img";
	for(var i = 0; i < linksLength; i++){
		var Li_Element = document.createElement("LI");
		Li_Element.setAttribute("VALUE", i);
		Li_Element.setAttribute("ID", img+i);
		Li_Element.innerHTML = (i+1);
		liContainer.appendChild(Li_Element);
	}	
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
	createLinks(imgArray);
	changeImg(imgArray);
}