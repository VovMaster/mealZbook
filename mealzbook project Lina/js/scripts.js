$(document).ready(function() {
	$('.fade2').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  /*cssEase: 'linear'*/
	});
	$(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });
});