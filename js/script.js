console.log("external JS is working");
$(document).ready(function(){
	console.log("jquery has loaded");

	$("#spinDiv").click(function(){
		$(this).toggleClass("rotateSpin gray yellow");
	});

});
