$(document).on('ready', function() {
	//슬랙 슬라이더
	var $sw = true;
    $('#main_slider, .event_slider').slick({
    	arrows: true,
    	dots: true,
    	speed: 800,
    	autoplay: true,
    	autoplaySpeed: 4000,
    	swipe: false,
    	slide: 'div',
    });
    $('#main_slider .play_stop_btn').click(function(){
      	if($sw==true){
       		$(this).addClass('on'); 
       		$('#main_slider').slick('slickPause'); 
      	} else {
       		$(this).removeClass('on');
       		$('#main_slider').slick('slickPlay');
      	}
      
      	$sw = !$sw;
    });
    $('.event_slider .play_stop_btn').click(function(){
      	if($sw==true){
       		$(this).addClass('on'); 
       		$('.event_slider').slick('slickPause'); 
      	} else {
       		$(this).removeClass('on');
       		$('.event_slider').slick('slickPlay');
      	}
      
      	$sw = !$sw;
    });

    //시간에 따른 슬라이드 내용 변화
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var txt;
    var img;
    
	if ( 0 < day && day < 6 ) {
		if ( 24 >= hour && hour >= 18 ) {
			txt = "열심히 오늘 하루를 보낸 당신!" + "<br>" + "좋은 일들만 가득했기를~";
			img = "image/nw_bg_main_evening.png";
		} else if ( 18 > hour && hour >= 12 ) {
			txt = "오늘 점심 어떠셨나요?" + "<br>" + "즐거운 오후 보내세요!";
			img = "image/nw_bg_main_afternoon.png";
		} else if ( 12 > hour && hour >= 0 ) {
			txt = "당신을 응원합니다" + "<br>" + "오늘도 화이팅 하세요!"
			img = "image/nw_bg_main_morning.png";
		} else {
			return;
		}
    } else {
    	txt = "드디어 기다렸던 주말!" + "<br>" + "소중한 사람과 함께하세요";
    	img = "image/nw_bg_main_weekend.png";
    }
    document.getElementById("changeH2").innerHTML = txt;
    document.getElementById("changeImg").src = img;
	});

//링크막기
// $(".family_sel > li > a").on("click", function(event) {
// 	event.preventDefault(); 
// });


//카테고리 효과
// $(".family_sel > li > a").on("click", function() {
// 	var selB = $(this).html();
// 	$(this).parents("li").children("a").html(selB);
// });