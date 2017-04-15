$('ul').on('click','li',function(){
	$(this).toggleClass('toogleLis');
})
$('ul').on('click','.delete',function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
})

$('input').on('keypress',function(e){
	if(e.which === 13){
		var newTodo = $(this).val();
		console.log(newTodo)
		$('ul').append('<li><span class="delete fa fa-trash"></span><span class="liClass">' +  newTodo + '</span></li>');
		$(this).val('');
	}
})
$('h3 span').on('click',function(){
	//$('input').toggleClass('plusIcon');
	$('input').fadeToggle(500);
})
