
var search=$('.search').click(function () {
    $('.mask').show();
    $('html,body').css({overflow:"hidden"});
    $('.bag-laber').addClass("active");
    $('.item,.search').transition({scale:(0.5 ,0.5),opacity:0},function () {
        $(this).addClass('none');
        if($(this).is('.search')){
            $('.search-box').css({display:"inline-block"}).transition({x:0},200);
            $('.kuaixuan').children().transition({x:0},200);
        }

    });
});
$('.item,.icon').hover(function () {
    $(this).css({opacity:0.6});
},function () {
    $(this).css({opacity:1});
})
var close=$('.bag-laber');
close.click(function () {
    if($(this).is(".active")){
        $('.mask').hide();
        $('html,body').css({overflowY:"auto"});
        $('.bag-laber').removeClass("active");
        // $('.bag-input').blur();
        $('.item,.search').transition({opacity:1,scale:(1,1)},function () {
            $(this).removeClass("none");
            if($(this).is('.search')) {
                $('.search-box').transition({x: 640},0).css({display: "none"});
                $('.kuaixuan').children().transition({x:628},0);
            }
        });
        // $('.shoplist').addClass("obj none");
        $('.shoplist').addClass("active");

    }else{
       // $('.bag-input').focus();
        $('.shoplist').removeClass("active");
    }

});
$('.smallnav').click(function () {
    $(this).children().toggleClass('active');
    $('.bag').toggleClass('active');
    $('.small-mask').slideToggle();
    $('.item2').toggleClass('active');
    $('.search-box2').toggleClass('active');
    if($('.search-box2').is('.active')){
        $("html,body").css({overflow:"hidden"});
    }else{
        $("html,body").css({overflow:"visible"});
    }
    //     .toggle(function () {
    //     $('this').slideDown();
    //     $('html,body').css({overflow:"hidden"});
    // },function () {
    //     $('this').slideUp();
    //     $('html,body').css({overflow:""});
    // });
});

$(function() {
    $('#banner').fullpage({
        //是否使用决定是否使用控制箭头向左或向右移动幻灯片。默认为true
        controlArrows:true,
        // 默认值：true，是否在窗口改变大小后，自动调整网页中字体的大小。
        resize:false,

        //默认值：700，每个屏幕滚动动画执行的时间，时间的单位为毫秒（ms）。
        // scrollingSpeed:1000,

        //是否垂直居中
        'verticalCentered': false,
        //是否使用css3动画
        'css3': true,
        //背景色
        'sectionsColor': ['#254875', '#00FF00', '#254587', '#695684'],
        //是否动画滚动
        autoScrolling:true,
        //默认值：true，定义水平的幻灯片是否循环切换
        loopHorizontal:true,

        //锚链接，名字可修改
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#myMenu',
        //是否出现导航
        'navigation':false,
        //导航位置
        'navigationPosition': 'right',


        //导航名称
        'navigationTooltips': ['111', '222', '333', '444'],
        //上滑是否从第一页跳到最后一页
        loopTop:true,
        //下滑是否从最后一页跳到第一页
        loopBottom:true,
        //是否满屏不调整位置
        fitToSection:false,
        showActiveTooltip:true,
        slidesNavigation:true,
        slidesNavPosition:"bottom"


       });


    $("#banner").height(750).css({background:"transparent"});
    $(".section").height(750).css({height:750,background:"transparent"});

    if($(window).width()<720){
        $("#banner").height(450).css({background:"transparent"});
        $(".section").height(450).css({height:450,background:"transparent"});
    }

    // $('.fp-controlArrow').css({background:"#000"});
   var t=setInterval(function () {
       $.fn.fullpage.moveSlideRight();
   },3000);
    $('.fp-slidesNav').click(function () {
        clearInterval(t)
    })
});

$('.footheight h6').click(function () {
    if($(this).children().is(":visible")){

        $(this).children().toggleClass("active");
        $(this).next("div").slideToggle();
    }
});
$(window).resize(function () {
    if($(window).width()>720){
        $(".footheight h6+div").css({display:"block"});
    }else{
        $(".footheight h6+div").css({display:"none"});
        $('.footheight h6').children().removeClass("active");
    }
})






