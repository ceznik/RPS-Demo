$(document).ready(function(){
	//alert("so far so good");


// handle play button event
	$("#btn-play").click(function(){
		//alert("play button clicked");
		$(".jumbotron").hide("slow");
		$("#name-input-container:hidden").show("slow");
		$("#game-area:hidden").show("slow");
	});
// handle new player added
	$("#btn-start").click(function(){
		var player = $("#player-name").val().trim();
		$("#name-input-group").hide("slow");
		$("#name-input-container").html("<div>Greetings " + player + " you are playing</div>");
	});


});