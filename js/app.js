$(document).ready(function() {
	$('.graphic-photo-container span').click(function(){
		$('.graphic-photo').toggleClass('graphic-blur');
		$('.hide-on-click').toggle();
	});

	$('.graphic-photo').click(function(){
		$('.graphic-photo').toggleClass('graphic-blur');
		$('.hide-on-click').toggle();
	});
});