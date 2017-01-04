var index = 1;
tab = [false, false, false, false, false, false, false, false, false, false];

function init(element){
	element.css({"color": "grey" });
	element.css({"background-color": "white" });
}

$(".choix").click(function() {

	if(tab[index]==true){
		$(".choix").unbind();
	}
	else {
		 //bonne réponse - vert
		 $(".choix").bind();
		 tab[index]=true;
		 $(".reponse").css({ "background-color": "#4CAF50" });
		 $(".reponse").css({ "color": "#FFF" });
    //clique sur la mauvaise réponse - rouge
    	if ($(this).hasClass("reponse") == false) {
    		$(this).css({ "background-color": "#B71C1C" });
    		$(this).css({ "color": "#FFF" });	
    	}
	}
});