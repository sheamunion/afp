$(document).ready(function() {
	function toggleClasses() {
		$('.graphic-photo').toggleClass('graphic-blur');
		$('.hide-on-click').toggle();
	}

	$('.graphic-photo-container span').click(function(){
		toggleClasses();
	});

	$('.graphic-photo').click(function(){
		toggleClasses();
	});
});