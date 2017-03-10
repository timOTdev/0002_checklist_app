$("ul").on("click", "li", function() {	
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var newTask = $(this).val();
		$(this).val("");
		$("ul").append("<li>" + newTask + " <span><i class='fa fa-minus-square-o'></i></span></li>")
	}
})

$(".fa-plus-square-o").click(function() {
	$("input[type='text']").fadeToggle();
});