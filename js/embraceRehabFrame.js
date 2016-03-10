var anime = {};

window.addEventListener("load",function(){

	console.log("frame_loaded!");
	anime.init();

});


anime.init = function(){
	var horizontalPanels = document.getElementsByClassName("panel");

	for(i = 0; i < horizontalPanels.length; i++){
		var currentDom = horizontalPanels[i];
		currentDom.addEventListener("click",function(){
		anime.switchToPanel(currentDom)});
		console.log(currentDom);
	}
}

anime.switchToPanel = function(aim){
console.log(aim.attributes.switchAim);
document.getElementById("mainScroll").style.webkitTransform = 
"translate(" + (aim.childElementCount * (-50)) + "%)";

}


