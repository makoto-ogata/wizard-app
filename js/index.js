function pageAction (){
	var i = 1;
	var pageIndex = $('.main-sentence').length;
	$('.page-number').text(i + '/' + pageIndex);
	$('#previous').prop('disabled', true);
	$('.main-sentence:nth-child(1)').show();

	$('#next').on('click', function(){
			i++;
			$('#previous').prop('disabled', false);
			if( i <= pageIndex ){
				var nextPage = $('.main-sentence:nth-child(' + i + ')').show();
				$(nextPage).prev().hide();
				$('.page-number').text(i + '/' + pageIndex);
			}
			if( i == pageIndex ){
				$('#next').prop('disabled', true);
			}
			//	console.log(i);
	});


	$('#previous').on('click', function(){
			i--;
			var prevPage = $('.main-sentence:nth-child(' + i + ')').show();
			$(prevPage).next().hide();
			$('#next').prop('disabled', false);
			$('.page-number').text(i + '/' + pageIndex);

			if(i == 1){
				$('#previous').prop('disabled', true);
			}
	});
}



function sentence (){

	var sentenceContent = {
		url: 'sentence.json',
		dataType: 'json',
		success: function(result) {
				$.each( result, function(index, elem){
						$('<div class="main-sentence"><h3>'+ elem.title +'</h3><p>' + elem.content + '</p></div>').appendTo('.content-sentence');
				});
				pageAction();
		},
		error: function(){
			alert('読み込めませんでした');
		}
	}

	$.ajax(sentenceContent);
}

sentence();

/*
var i = 1;
var pageIndex = $('.main-sentence').length;
$('#previous').prop('disabled', true);
$('.main-sentence:nth-child(1)').show();

$('#next').on('click', function(){
		i++;
		$('#previous').prop('disabled', false);
		if( i <= pageIndex ){
			var nextPage = $('.main-sentence:nth-child(' + i + ')').show();
			$(nextPage).prev().hide();
		}
		if( i == pageIndex ){
			$('#next').prop('disabled', true);
		}
		//	console.log(i);
});


$('#previous').on('click', function(){
		i--;
		var prevPage = $('.main-sentence:nth-child(' + i + ')').show();
		$(prevPage).next().hide();
		$('#next').prop('disabled', false);

		if(i == 1){
			$('#previous').prop('disabled', true);
		}
});
*/
