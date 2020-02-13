$(function () {

// moblie
/****************************************************** 
*******************************************************/
    $('button.mo_menu_open').on('click', function() {
        $('.shadow, #moblie').addClass('on');
        $('html').css('overflow-y','hidden');

        $('button.mo_menu_close').on('click', function () {
            $('.shadow, #moblie').removeClass('on');
            $('html').css('overflow-y','scroll');
        });

        /****************************************************** 
        * 용도 : 모바일 네비게이션에 iScroll 적용
        * 플러그인 iScroll을 이용하여 모바일에서 swipe효과를 준다.
        *******************************************************/
        var $moHeight = $(window).height();
        $('.mo_left_scroll').css('height', $moHeight-70); //윈도우창 높이에서 .mo_header의 높이만큼(70px) 뺀 값 = .mo_left_scroll의 높이
        $('.mo_right_scroll').css('height', $moHeight-70);

        var $moLeft = new IScroll('.mo_left_scroll', {mouseWheel:false, click:true, momentum:true});
        var $moRight = new IScroll('.mo_right_scroll', {mouseWheel:false, click:true, momentum:true});
        $('.mo_left_scroll>ul>li').on('touchstart', function(){
                 $moLeft.refresh();
        });
        $('.mo_right_scroll>ul>li').on('touchstart', function(){
                 $moRight.refresh();
        });

        /****************************************************** 
        * 용도 : 클릭 시 css 변경
        * li의 기본 배경값을 transparent로 두고 클릭시 #fff로 바뀌게 한다. 선택된 li의 형제들은 기본배경값으로 돌아간다.
        *******************************************************/
        $('.mo_left_scroll .depth1>li').on('click', function () {
            $('.mo_left_scroll .depth1>li').each(function(i) {
                $('.mo_left_scroll .depth1>li').eq(i).css('background','transparent');
            });
            $(this).css('background','#fff');

            /****************************************************** 
            * 용도 : 상응하는 index값을 찾아 css 변경
            * .mo_left_scroll .depth1>li에 상응하는 .mo_right_scroll .depth2의 값을 찾아 li이를 클릭했을 시 depth2의 내용이 보여지게 한다.
            *******************************************************/
            var $inDex = $(this).index();
            $('.mo_right_scroll .depth2').css({'display':'none'});
            $('.mo_right_scroll .depth2').eq($inDex).css({'display':'block'});
        });

        /****************************************************** 
        * gnb열면 기본값으로 다시 셋팅
        *******************************************************/
        // var inDex = $('.mo_left_scroll .depth1>li').index();
        $('.mo_right_scroll .depth2').css({'display':'none'});
        $('.mo_right_scroll .depth2').eq(0).css({'display':'block'});
        $('.mo_left_scroll .depth1>li').each(function(i) {
            $('.mo_left_scroll .depth1>li').eq(i).css('background','transparent');
        });
        $('.mo_left_scroll .depth1>li').eq(0).css('background','#fff');
    });




// header
/****************************************************** 
* 용도 : 링크 막기
* .side_link .not를 눌러도 링크속성이 동작하지 않는다.  
*******************************************************/
    $('.side_link .not').bind('click', false);

    $('.side_link .not').on('click', function () {
        $('.side_link').toggleClass('active');
    });

/****************************************************** 
* 용도 : 특정 자식을 둔 부모 요소를 찾아서 클래스 추가
* .depth3를 자식요소로 가지고 있는 .depth2를 찾아 클래스를 추가한다.
* .stage3를 자식요소로 가지고 있는 li를 찾아 클래스를 추가한다.
*******************************************************/
    $('.depth3').parent().addClass('depth_icon'); //gnb
    $('.stage3').parent().addClass('stage_add');  //allmenu

/****************************************************** 
* 용도 : 클래스 추가
* .button.all_btn을 누르면 #all_menu에 on클래스가 부여된다.  
*******************************************************/
    $('button.all_btn').on('click', function () {
        $('#all_menu').toggleClass('on');
    });



// sidebar
/****************************************************** 
* 용도 : 윈도우창 스크롤시 특정 영역 변화
* #header에서 141만큼 스크롤 했을 때 #sidebar의 css가 바뀌고,
  아닐 경우 원상태로 돌아간다.
*******************************************************/
    $(window).scroll(function () {
        var $header = $("#header").offset().top;
        if ($(this).scrollTop() - 141 >= $header) {
            $('#sidebar').css('position','fixed');
            $('#sidebar').css('padding-top','0');
        } else {
            $('#sidebar').css('position','absolute');
            $('#sidebar').css('padding-top','141px');
        }
    });

/****************************************************** 
* 용도 : 링크 막기 / 클래스 추가
*******************************************************/
    $('a.sb_btn, .mymenu_first').bind('click', false);

    $('a.sb_btn').on('click', function () {
        $('#sidebar').toggleClass('on');
    });

    $('.mymenu_first').on('click', function () {
        $('#sidebar.on .mymenu_popup').toggleClass('show');
    });

    $('.hana_go').on('click', function () {
        $('#sidebar.on .go_hana_popup').toggleClass('show');
    });

/****************************************************** 
* 용도 : 클릭시 위치 이동
* .scroll_top을 클릭하면 페이지 맨 상단으로 이동한다.
*******************************************************/
    $('.scroll_top, .mo_scroll_top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });



// footer
/****************************************************** 
* 용도 : 동작 중단, 클릭시 형제 요소 효과 주기 및 클래스 추가
* event.preventDefault(); : a에 걸려있는 링크를 중단시켜 동작하지 않게 한다.
* hide : .family_sel을 감춘다.
* siblings : 클릭시 this의 형제요소 .family_sel을 찾아 toggle효과를 준다.
* toggleClass : 클릭시 this에 click클래스를 toggle형태로 추가한다.
* html : 요소의 html(문자)값을 가져온다.
*******************************************************/
    // $(".family_list > ul > li > a").on("click", function(event) {
    //     event.preventDefault(); 
    // });
    $('.family_list > ul > li > a').bind('click', false);

    $('.family_sel').hide();
    $('.brand_famliy > a, .hana_famliy > a, .global_famliy > a').on('click', function () {
        $(this).siblings('.family_sel').toggle();
        $(this).toggleClass('click');
    });
    // $(".family_sel > li > a").on("click", function() {
    //     $(this).parents(".family_sel").toggle();

    //     var selB = $(this).html();
    //     $(this).parents(".family_sel").siblings("a").html(selB);
    // });

});