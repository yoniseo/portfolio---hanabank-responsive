$(document).on('ready', function() {
	var $sw = true;
	$('#mall_slider .container').slick({ //mall 첫번째 슬라이드
		arrows: true,
		dots: true,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 4000,
		swipe: false,
		slide: 'div'
	});
	$('#mall_slider .container .play_stop_btn').click(function(){
	  	if($sw==true){
	   		$(this).addClass('on'); 
	   		$('#mall_slider .container').slick('slickPause'); 
	  	} else {
	   		$(this).removeClass('on');
	   		$('#mall_slider .container').slick('slickPlay');
	  	}
	  
	  	$sw = !$sw;
	});
	$('.hanaB_slider').slick({ //mall 두번째 슬라이드
		arrows: false,
		dots: true,
		speed: 500,
		vertical: true,
		autoplay: false,
		swipe: false,
		slide: 'div'
	});
});