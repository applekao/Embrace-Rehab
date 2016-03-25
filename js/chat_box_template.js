var chat = {

	template : null,

	roll : {
		reciver : "recive",
		sender : "send"
	}

};


chat.loadTemp = function( roll, message ){


	var chatTemp = 
					"<div class='panel panel-embrace-rehab chats " + roll + "' >"

					+

					message//Content

					+ "<div class = 'cheerBnt'> Cheer </div>"

					+ "</div>";
		

	$("#chatBox").append(chatTemp);
	if($("#chatBox").children().length > 1){
		document.getElementById('noMessageHolder').style.display = "none";
	}

}


chat.recive = function(message){

	chat.loadTemp(chat.roll.reciver, message);

}

chat.send = function(message){

	chat.loadTemp(chat.roll.sender, message);
	console.log("sdf");

}

function chatTest(){
	for(i = 0; i < 10; i++){
		if( i % 2 ==0 ){
			chat.recive("Hi!");
		}
		else{
			chat.send("Yo!");
		}
	}
}