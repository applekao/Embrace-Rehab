var anime = {};
anime.init = function(){
	var horizontalPanels = document.getElementsByClassName("panel");
	var panelToggleBtn = document.getElementsByClassName("panelToggle");
	for(i = 0; i < panelToggleBtn.length; i++){
		var currentDom = panelToggleBtn[0];
		currentDom.addEventListener("click",function(e){
		anime.switchToPanel(e.target);
		$(".panelToggle").removeClass("panelToggle_selected");
		e.target.className += " panelToggle_selected";
		});
	}
}
anime.switchToPanel = function(aim){
document.getElementById("mainScroll").style.webkitTransform = 
"translate(" + (parseInt(aim.attributes.switchAim.value) * (-50)) + ")";
}


