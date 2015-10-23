
// smaccordion - Small multilevel JQuery accordion menu - PeteChapman.io/smaccordion
// Creative Commons 1.0 Universal
$(document).ready(function() {
	$('.menu ul').hide();
	$('.menu li a').click(
		function(evt) {
			evt.preventDefault();
			evt.stopPropagation();
			var openMe = $(this).next();
			var mySiblings = $(this).parent().siblings().find('ul');
			if (openMe.is(':visible')) {
				openMe.slideUp('normal');  
			} else {
				mySiblings.slideUp('normal');  
				openMe.slideDown('normal');
			}
	      }
	);
});