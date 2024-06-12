$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(".nav>ul>li>ul").stop().slideDown();
    });
    $(".nav>ul>li").mouseout(function(){
        $(".nav>ul>li>ul").stop().slideUp();
    });
})
setInterval(function(){
    $(".sliderWrap").delay(2000);
    $(".sliderWrap").animate({marginLeft:-1200});
    $(".sliderWrap").delay(2000);
    $(".sliderWrap").animate({marginLeft:-2400});
    $(".sliderWrap").delay(2000);
    $(".sliderWrap").animate({marginLeft:-0});
})
$(function(){
    $(".tab a:nth-child(2)").click(function(){
        $(".notice").hide();
    });
    $(".tab a:nth-child(2)").click(function(){
        $(".gallery").show();
    });
    $(".tab a:nth-child(1)").click(function(){
        $(".gallery").hide();
    });
    $(".tab a:nth-child(1)").click(function(){
        $(".notice").show();
    });
    $(".tab a:nth-child(2)").click(function(){
        $(".tab a:nth-child(1)").css("background-color","white"),
        $(".tab a:nth-child(1)").css("color","black"),
        $(".tab a:nth-child(2)").css("background-color","black"),
        $(".tab a:nth-child(2)").css("color","white")
    });
    $(".tab a:nth-child(1)").click(function(){
        $(".tab a:nth-child(2)").css("background-color","white"),
        $(".tab a:nth-child(2)").css("color","black"),
        $(".tab a:nth-child(1)").css("background-color","black"),
        $(".tab a:nth-child(1)").css("color","white")
    });
});


$(function(){
$(".notice ul li a:nth-child(1)").click(function(){
    $(".pop").show();
});
$(".btn a").click(function(){
    $(".pop").hide();
});
});