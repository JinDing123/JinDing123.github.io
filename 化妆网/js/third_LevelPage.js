var character = document.getElementsByClassName("character")[0];
    var d1 = document.getElementById("d1");
    var seamlessbox = document.getElementsByClassName("seamlessbox")[0];
    var seamlessImg = document.getElementsByClassName("seamlessImg")[0];
    var timer,
        timer1;
    seamlessImg.innerHTML += seamlessImg.innerHTML;
    d1.innerHTML += d1.innerHTML;
    function bindEvent () {
        timer1 = setInterval(go,20);
        timer = setInterval(characterGo,50);
    }
    bindEvent ();
    //图片无缝滚动
    function go () {
        if(seamlessbox.scrollLeft >= seamlessImg.offsetWidth / 2){
            seamlessbox.scrollLeft = 0;
        }else{
            seamlessbox.scrollLeft ++;
            // console.log(seamlessbox.scrollLeft);
        }
    }
    seamlessbox.onmouseover = function () {
        clearInterval(timer1);
    }
    seamlessbox.onmouseout = function () {
        timer1 = setInterval(go,20);
    }
    //文字无缝滚动
    function characterGo () {
        if(character.scrollTop >= d1.offsetHeight / 2){
            character.scrollTop = 0;
        }else{
            character.scrollTop ++;
        }
    }
    character.onmouseover = function () {
        clearInterval(timer);
    }
    character.onmouseout = function () {
        timer = setInterval(characterGo,50);
    }