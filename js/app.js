$(document).ready(function() {
	$('.graphic-photo-container span').click(function(){

		$('.graphic-photo').toggleClass('graphic-blur');
		$('.hide_on_click').toggle(function() {
		});
	});
	$('.graphic-photo').click(function(){

		$('.graphic-photo').toggleClass('graphic-blur');
		$('.hide_on_click').toggle(function() {
		});
	});
});