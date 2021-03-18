'use strict';

(function () {
	function scrollMenu(){
		var elemntFixed= $('.box-header-wrap');
		var windowScroll;
		var headerH = $('.box-header-wrap').innerHeight();
		var lastScrollTop = headerH;
			$( window ).on('scroll load',function() {
				windowScroll = $(window).scrollTop()
				if(windowScroll < headerH){
					$(elemntFixed).removeClass('show');
				}else{
					if(windowScroll > lastScrollTop ){
						$(elemntFixed).addClass('fixed');
						$(elemntFixed).removeClass('show');
					}else{
						$(elemntFixed).removeClass('fixed');
						$(elemntFixed).addClass('show');
					}
					lastScrollTop = windowScroll;
				}
		});
	}
	scrollMenu()

	var backTop = function (scroll) {
		var winW = $(window).width(),
			winH = $(window).height(),
			posFooter = $('.footer-bottom').offset().top + 40,
			containerW = $('.box-footer .container').width(),
			scrollTop = scroll + winH,
			pTop = $('.pnavi');
		if (scrollTop <= posFooter && scroll > 100 ){
			pTop.addClass('pnavi_fixed');;
		} else {
			pTop.removeClass('pnavi_fixed');
		}
	}
	$(window).on('scroll', function () {
		backTop($(this).scrollTop());
	})
	$(".pnavi a").click(function () {
		$("html, body").animate({scrollTop: 0}, 1000);
		$('.box-header-wrap').removeClass('fixed');
	 });
	 $(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top -20
		}, 500);
	});

	var mq = window.matchMedia( "(max-width: 640px)" );
	function appendElement(e) {
		moveElement(e)
		if (e.matches) {
			$('.our-products-list').slick({
				slidesToShow: 1.5,
				slidesToScroll: 1,
				infinite: false,
				arrows: false,
				fade: false,
				dots: true,
				centerMode: true,
				centerPadding: '10px',
			  });
		}else{
			if($('.our-products-list.slick-initialized').length){
				$('.our-products-list').slick('unslick');
			}
		}
	}
	$(document).ready(function(){
		appendElement(mq);
		mq.addListener(appendElement);
	});
	function moveElement(e){
		if (e.matches) {
			$(".gnavi").appendTo('.smart-menu-wrap');
		}else{
			$(".gnavi").insertBefore('.header-rgt .select-langu');
		}
	}
	$('.smart-menu-btn').on('click',function(){
		$('.smart-menu-wrap').fadeIn();
	})
	$('.btn-close').on('click',function(){
		$('.smart-menu-wrap').fadeOut();
	});
	 // Function which adds the 'animated' class to any '.animatable' in view
	 var doAnimations = function() {
    
		// Calc current offset and get all animatables
		var offset = $(window).scrollTop() + $(window).height(),
			$animatables = $('.animatable');
		
		// Unbind scroll handler if we have no animatables
		if ($animatables.length == 0) {
		  $(window).off('scroll', doAnimations);
		}
		
		// Check all animatables and animate them if necessary
			$animatables.each(function(i) {
		   var $animatable = $(this);
				if (($animatable.offset().top + $animatable.innerHeight()) < offset) {
			$animatable.removeClass('animatable').addClass('animated');
				}
		});
	
		};
	  
	  // Hook doAnimations on scroll, and trigger a scroll
		$(window).on('scroll', doAnimations);
	  $(window).trigger('scroll');
	
})();