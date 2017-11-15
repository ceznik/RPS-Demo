$(document).ready(function(){
	//alert("so far so good");


// handle play button event
	$("#btn-play").click(function(){
		//alert("play button clicked");
		$(".jumbotron").hide("slow");
	});

	$("#btn-start").click(function(){
		console.log($("#player-name").val());
	});
});