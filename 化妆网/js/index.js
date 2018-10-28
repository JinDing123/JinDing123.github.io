var banul = document.getElementsByClassName("banul")[0];
    var banul_li = banul.getElementsByTagName("li");
    var bancount = document.getElementsByClassName("bancount")[0];
    var bancount_li = bancount.getElementsByTagName("li");
    var btn1 = document.getElementsByClassName("btn1")[0];
    var btn2 = document.getElementsByClassName("btn2")[0];
    var content_tab = document.getElementsByClassName("contenttab");
    var content_box = document.getElementsByClassName("box");
    var num = 0;
    var timer;
    // 选项卡
    function tabControl () {
        for(var i = 0; i < content_tab.length; i ++){
            (function (tabindex) {
                content_tab[tabindex].onmouseover = function () {
                for(var j = 0; j < content_tab.length;j ++){
                    content_tab[j].style.color = "#000";
                    content_box[j].style.display = "none";
                }
                content_tab[tabindex].style.color = "#fff";
                content_box[tabindex].style.display = "block";
            }
            } (i))
        }
    }
    tabControl();
    // 轮播图
    function show (a) {
        for(var i = 0; i < banul_li.length; i ++){
            banul_li[i].style.display = "none";
            bancount_li[i].className = "";
        }
        banul_li[a].style.display = "block";
        bancount_li[a].className = "active";
    }
    function autoShow () {
        num ++;
        if( num >= banul_li.length){
            num = 0;
        }
        show(num);
    }
    timer = setInterval(autoShow,1500);
    function onOver () {
        for(var i = 0; i < bancount_li.length; i ++){
            (function (index) {
                bancount_li[index].onmouseover = function () {
                clearInterval(timer);
                num = index;
                show(index);
                }
            } (i))
        }
    }
    onOver();
    function onOut () {
        for(var i = 0; i < bancount_li.length; i ++){
            bancount_li[i].onmouseout = function () {
                timer = setInterval(autoShow,1500);
            }
        }
    }
    onOut();
    btn1.onmouseover = function () {
        clearInterval(timer);
        btn1.onclick = function () {
        num --;
        if(num < 0 ){
            num = 3;
        }
        show(num);
        }
    }
    btn1.onmouseout = function () {
        timer = setInterval(autoShow,1500);
    }

    btn2.onmouseover = function () {
        clearInterval(timer);
        btn2.onclick = function () {
            num ++;
            if(num >= banul_li.length){
                num = 0
            }
        show(num);
        }
    }
    btn2.onmouseout = function () {
        timer = setInterval(autoShow,1500);
    }