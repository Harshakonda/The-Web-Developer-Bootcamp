$('li').on('click',function(){
	$(this).toggleClass('toogleLis');
})
$('li').on('mouseover',function(even){
	event.stopPropagation();
	$(this).children('.delete').fadeOut(1000);
})
$('.delete').on('click',function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
})

$('input').keypress(function(e){
	if(e.which === 13){
		var newTodo = $(this).val();
		console.log(newTodo)
		$('ul').append('<li><span class="delete fa fa-trash"></span><span class="liClass">' +  newTodo + '</span></li>');
		$(this).val('');
	}
})
$('h3 span').on('click',function(){
	$('input').toggleClass('plusIcon');
})
