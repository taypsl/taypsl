$(document).ready(function () {
	$('header').fadeIn(1000).removeClass('hidden');
	$('.wrapper').fadeIn(1500).removeClass('hidden');

	$('.icon-scroll-to-top').addClass('hidden');
	// on mouseover, fade in project info
	$('.project-item').mouseover(function() {
		console.log('mouseover')
		$(this).children('.project-item-info').css({'visibility': 'visible', 'opacity': '0.9'})
	});

	//on mouseout, fade out project info
	$('.project-item').mouseout(function() {
		console.log('mouseout')
		$(this).children('.project-item-info').css({'visibility': 'hidden', 'opacity': '0', 'transition': 'visibility 0s, opacity 0.5s linear'})
	});

	// scroll to top button appears
	// $(window).scroll(function(){
	// 	if ($(this).scrollTop() > 800) {
	// 		$('.icon-scroll-to-top').fadeIn();
	// 	} else {
	// 		$('.icon-scroll-to-top').fadeOut();
	// 	}
	// });


	$(document).scroll(function() {

	  var y = $(this).scrollTop();
	  if (y > 800) {
	  	$('.icon-scroll-to-top').fadeIn(1000).removeClass('hidden');
	    $('.icon-scroll-to-top').fadeIn();
	  } else {
	    $('.icon-scroll-to-top').fadeOut();
	  }
	});

	// on click of link, scroll to page location
	$(".links a, .name, .icon-scroll-to-top").click(function(e){
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
	});


})


