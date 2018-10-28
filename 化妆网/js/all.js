$(function () {
        //弹窗部分
        $(function(){
            $("#headp").click(function(){
                layer.open({
                    icon : 1,
                    type : 1,
                    title : "登录",
                    area : ["420px" , "270px"],
                    content : $("#dloginbox")
                })
            })
        });
        //客服部分
        $(".advisebox").animate({
                "bottom" : "0px",
                // "right" : "10px"
            },3000,function () {
                $(".advise1_p1").click(function () {
                    $(".advisebox").slideUp(2000);
                })
            });

})