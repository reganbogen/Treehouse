//prevent spoilerphobes from seeing spoilers
//Solution: hide spoilers and reveal them through user interaction


//1, hide Spoiler
$(".spoiler span").hide();
//2, add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3, when button pressed
$("button").click(function(){
	//3.1, show the spoiler next to the button clicked
	$(this).prev().show();
	//3.2, get rid of button
	$(this).remove();
});
	