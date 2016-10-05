var i = 1;
var pageIndex = $('.main-sentence').length;
$('#page' + i).show();
$('#previous').prop('disabled', true);


$('#next').on('click', function(){
		i++;
		$('#previous').prop('disabled', false);
		if( i <= pageIndex ){
			var nextPage = $('#page' + i).show();
			$(nextPage).prev().hide();
		}
		if( i == pageIndex ){
			$('#next').prop('disabled', true);
		}
		//	console.log(i);
});


$('#previous').on('click', function(){
		i--;
		var prevPage = $('#page' + i).show();
		$(prevPage).next().hide();
		$('#next').prop('disabled', false);

		if(i == 1){
			$('#previous').prop('disabled', true);
		}
});

