$(function() {
	$(document).on('click', '[data-toggle]', function(event) {
		event.preventDefault();
		var element = $(this);
		$(element.data('toggle')).toggleClass('hide');
	});
});