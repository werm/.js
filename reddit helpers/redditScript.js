$(function(){
	$('body').wrapInner('<div id="wrapper" />');
	$('#wrapper').append('<a class="top" href="#" title="Back to top">Top</a>');
	$('.side').append('<span class="waypoint"></span>');
		$('.top').addClass('hidden');
		$.waypoints.settings.scrollThrottle = 30;
		$('#wrapper').waypoint(function(event, direction) {
			$('.top').toggleClass('hidden', direction === "up");
		}, {
			offset: '-100%'
		}).find('.tabmenu').waypoint(function(event, direction) {
			$(this).parent().toggleClass('sticky', direction === "down");
			event.stopPropagation();
		});
	});
$(function(){
	$('.waypoint').waypoint(function(event, direction) {
		$('#wrapper').toggleClass('fullWidth', direction === "down");
		event.stopPropagation();
});
});