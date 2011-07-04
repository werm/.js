$('html, body')
	.css('margin', '0')
	.css('padding', '0')

$('table#searchtable')
	.css('display', 'none')

$('#searchlegend').click(function(){
	$('table#searchtable').slideToggle('slow');
});

$('.sg_selected')
	.css('display', 'none')
	
$('#container')
	.css('width', '100%')

$('#topban')
	.css('padding', '20px 10px')
	.css('background', '#3875D7')
	.css('color', '#fff')
	
$('#topban a')
	.css('display', 'block')
	.css('text-indent', '-999em')

$('#topban h2')	
	.css('font-size', '2em')
	.css('text-transform', 'uppercase')
	
$('#leftbar')
	.css('text-align', 'left')
	
$('h4.ban')
	.css('background', '#3875D7')
	.css('color', '#fff')
	.css('padding', '4px 0')
	
$('h4.ban a')
	.css('color', '#fff')	

$('h5')	
	.css('font-size', '1em')