
var i = 1;
$('#page' + i).show();

$('#next').on('click', function(){
		i++;
		var nextPage = $('#page' + i).show();
		$(nextPage).prev().hide();
});

$('#previous').on('click', function(){
		i--;
		var prevPage = $('#page' + i).show();
		$(prevPage).next().hide();
});



