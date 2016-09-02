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
        slidesToScroll: 1,
        responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 630,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 460,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
	    ]
    });


	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	new ScrollMagic.Scene({triggerElement: "#parallax1"}).setTween(".parallax-bg", {y: "100%", ease: Linear.easeNone}).addTo(controller);


	var wow = null;
	// Elements Animation
	if($('.wow').length){
		wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       50,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();

	}



	$('.page-up').click(function(){
		$('html, body').animate({ scrollTop: 0 }, 500);
		return false
	});
});