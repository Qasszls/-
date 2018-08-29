
    cc=setInterval(lc,2000);
    zz=setInterval(lb,2000);
    i=0;
    function lb(){

        $("ul.ulb li").eq(i).animate({opacity:1},2000);
        $("ul.ulb li").eq(i).siblings().animate({opacity:0.1},2000);
        $("ul.ulb").css({top:-i*284});
        i++;
        if(i==4){i=0;}
    };
    $("div.z1").mouseover(function(){
        clearInterval(zz);
    });
    $("div.z1").mouseout(function(){
        zz=setInterval(lb,2000)
    });
    function lc(){
        $("ul.dian li").eq(i).css({background:"white"});
        $("ul.dian li").eq(i).siblings().css({background:"rgba(0,0,0,0.3)"});
    };
    $("ul.dian li").mouseover(function(){
        $(this).css({background:"white"});
        $(this).siblings().css({background:"rgba(0,0,0,0.3)"});
        clearInterval(cc);
    });
    $("ul.dian li").mouseout(function(){
        $(this).css({background:"white"});
        $(this).siblings().css({background:"rgba(0,0,0,0.3)"});
        cc=setInterval(lc,2000);
    });
    $("ul.dian li:nth-child(1)").mouseover(function(){
        $("ul.ulb").css({top:0,opacity:1})
    });
    $("ul.dian li:nth-child(2)").mouseover(function(){
        $("ul.ulb").css({top:-284,opacity:1})
    });
    $("ul.dian li:nth-child(3)").mouseover(function(){
        $("ul.ulb").css({top:-568,opacity:1})
    });
    $("ul.dian li:nth-child(4)").mouseover(function(){
        $("ul.ulb").css({top:-852,opacity:1})
    });

    $("div.bt1").click(function(){
        var zc=$("ul.ulb").css("top");
        if(zc==0+"px"){
            $("ul.ulb").css({top:-852+"px"})};
        if(zc==-284+"px"){
            $("ul.ulb").css({top:0+"px"})};
        if(zc==-568+"px"){
            $("ul.ulb").css({top:-284+"px"})};
        if(zc==-852+"px"){
            $("ul.ulb").css({top:-568+"px"})};
    });
    $("div.bt2").click(function(){
        var zc=$("ul.ulb").css("top");
        if(zc==0+"px"){
            $("ul.ulb").css({top:-284+"px"})};
        if(zc==-284+"px"){
            $("ul.ulb").css({top:-568+"px"})};
        if(zc==-568+"px"){
            $("ul.ulb").css({top:-852+"px"})};
        if(zc==-852+"px"){
            $("ul.ulb").css({top:0+"px"})};
    });

