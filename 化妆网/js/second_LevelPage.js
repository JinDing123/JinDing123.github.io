$(function () {
        //飘雪部分
        var minSize = 6;
        var maxSize = 66;
        var newOn = 100;
        var flakeColor = "#fff";
        var flake = $("<div></div>").css({"position" : "absolute","top" : "-50px"}).html("*");
        $(function(){
            var documentHeight = $(document).height();
            var documentWidth = $(document).width();
            setInterval(function(){
                var startPositionLeft = Math.random() * documentWidth;
                var startOpacity =0.7 + Math.random() * 0.3;
                var endPositionTop = documentHeight;
                var endPositionLeft = Math.random() * documentWidth;
                var durationFall = 2000 + Math.random() * 3000;
                var sizeflake = minSize + Math.random() * maxSize;
                flake.clone().appendTo('body').css({
                    "left" : startPositionLeft,
                    "opacity" : startOpacity,
                    "font-size" : sizeflake,
                    "color" : flakeColor,
                }).animate({
                    "top" : "800px",
                    "left" : endPositionLeft,
                    "opacity" : 0.5
                },durationFall,function(){
                    $(this).remove();
                });
            },newOn)
        })
        //加入购物车部分
        var inpronum = 0;
        $(".p5 a").click(function () {
            inpronum ++;
            var addImg = $(this).parent().parent().find("img");
            var cloneImg = addImg.clone();
            cloneImg.appendTo($("body")).css({
                "width" : "206px",
                "height" : "252px",
                "position" : "absolute",
                "left" : addImg.offset().left,
                "top" : addImg.offset().top,
                "opacity" : 0.5,
                "z-index" : 100
            }).animate({
                "left" : $(".car").offset().left,
                "top" : $(".car").offset().top,
                "width" : "50px",
                "height" : "50px",
            },800,function () {
                $(this).remove();
                $("#dprocount").html(inpronum);
                $(".msg").fadeIn(1000).fadeOut(1000);
            })
        })
})