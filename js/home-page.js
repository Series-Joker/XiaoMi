// 搜索
var input2 = document.getElementsByClassName("input2")[0];
var icon = document.getElementsByClassName("icon-sousuo")[0];
input2.onmouseenter = function () {
    input2.style.backgroundColor = "rgb(255,103,0)";
    icon.style.color = "white";
}
icon.onmouseenter = function () {
    input2.style.backgroundColor = "rgb(255,103,0)";
    icon.style.color = "white";
    icon.style.cursor = "pointer";
}
input2.onmouseleave = function () {
    input2.style.backgroundColor = "white";
    icon.style.color = "#b0b0b0";
}
// 轮播图
// 三横线
var picture = document.getElementsByClassName("picture")[0];
var li = document.getElementsByClassName("li1");
// 点击
li[0].onclick = function () {change(1)};
li[1].onclick = function () {change(2)};
li[2].onclick = function () {change(3)};
li[3].onclick = function () {change(4)};
li[4].onclick = function () {change(5)};

li[0].style.border = "pink solid 5px";

function change(num) {
    if(num == 1){
        picture.style.background = "url(imgs/home01.jpg)";
        picture.style.backgroundSize = "contain";
        picture.style.backgroundRepeat = "no-repeat";
        li[0].style.border = "pink solid 5px";
        li[1].style.border = "#757575 solid 5px";
        li[2].style.border = "#757575 solid 5px";
        li[3].style.border = "#757575 solid 5px";
        li[4].style.border = "#757575 solid 5px";

    }
    else if(num == 2){
        picture.style.background = "url(imgs/home02.jpg)";
        picture.style.backgroundSize = "contain";
        picture.style.backgroundRepeat = "no-repeat";
        li[1].style.border = "pink solid 5px";
        li[0].style.border = "#757575 solid 5px";
        li[2].style.border = "#757575 solid 5px";
        li[3].style.border = "#757575 solid 5px";
        li[4].style.border = "#757575 solid 5px";
    }
    else if(num == 3){
        picture.style.background = "url(imgs/home03.jpg)";
        picture.style.backgroundSize = "contain";
        picture.style.backgroundRepeat = "no-repeat";
        li[2].style.border = "pink solid 5px";
        li[0].style.border = "#757575 solid 5px";
        li[1].style.border = "#757575 solid 5px";
        li[3].style.border = "#757575 solid 5px";
        li[4].style.border = "#757575 solid 5px";
    }
    else if(num == 4){
        picture.style.background = "url(imgs/home04.jpg)";
        picture.style.backgroundSize = "contain";
        picture.style.backgroundRepeat = "no-repeat";
        li[3].style.border = "pink solid 5px";
        li[0].style.border = "#757575 solid 5px";
        li[1].style.border = "#757575 solid 5px";
        li[2].style.border = "#757575 solid 5px";
        li[4].style.border = "#757575 solid 5px";
    }
    else{
        picture.style.background = "url(imgs/home05.jpg)";
        picture.style.backgroundSize = "contain";
        picture.style.backgroundRepeat = "no-repeat";
        li[4].style.border = "pink solid 5px";
        li[3].style.border = "#757575 solid 5px";
        li[1].style.border = "#757575 solid 5px";
        li[2].style.border = "#757575 solid 5px";
        li[0].style.border = "#757575 solid 5px";
    }
}
// 移入
li[0].onmouseenter = function () {strong(0)};
li[1].onmouseenter = function () {strong(1)};
li[2].onmouseenter = function () {strong(2)};
li[3].onmouseenter = function () {strong(3)};
li[4].onmouseenter = function () {strong(4)};

//移除
li[0].onmouseleave = function () {weak(0)};
li[1].onmouseleave = function () {weak(1)};
li[2].onmouseleave = function () {weak(2)};
li[3].onmouseleave = function () {weak(3)};
li[4].onmouseleave = function () {weak(4)};

function strong(num){
    li[num].style.border = "pink solid 5px";
}
function weak(num){
    li[num].style.border = "#757575 solid 5px";
}
// 大于小于图标
count = 0
function greater() {
    count += 1;
    if(count > 5){
        count = 1;
    }
    change(count);
}
function  lower() {
    count -= 1;
    if(count < 1){
        count = 5;
    }
    change(count);
}

// 轮播图
setInterval('greater()',3000);

//下载app
var a1 = document.getElementById("a1");
var d = document.getElementsByClassName("download")[0];
a1.onmouseenter = function () {
    d.style.display = "block";
}
// a1.onmouseleave = function () {
//     d.style.display = "none";
// }
// d.onmouseenter = function () {
//     d.style.display = "block";
// }
d.onmouseleave = function () {
    d.style.display = "none";
}

//购物车
var a2 = document.getElementsByClassName("a2")[0];

var shopping = document.getElementsByClassName("shopping")[0];
a2.onmouseenter = function () {
    shopping.style.display = "block";
}
a2.onmouseleave = function () {
    shopping.style.display = "none";
}
//nav导航
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var nav4 = document.getElementById("nav4");
var nav5 = document.getElementById("nav5");
var nav6 = document.getElementById("nav6");
var nav7 = document.getElementById("nav7");
var nav8 = document.getElementById("nav8");
var nav9 = document.getElementById("nav9");
var nav10 = document.getElementById("nav10");

var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");
var d6 = document.getElementById("d6");
var d7 = document.getElementById("d7");
var d8 = document.getElementById("d8");
var d9 = document.getElementById("d9");
var d10 = document.getElementById("d10");

d1.onmouseenter = function () {
    nav1.style.display = "block";
}
d1.onmouseleave = function () {
    nav1.style.display = "none";
}
d2.onmouseenter = function () {
    nav2.style.display = "block";
}
d2.onmouseleave = function () {
    nav2.style.display = "none";
}
d3.onmouseenter = function () {
    nav3.style.display = "block";
}
d3.onmouseleave = function () {
    nav3.style.display = "none";
}
d4.onmouseenter = function () {
    nav4.style.display = "block";

}
d4.onmouseleave = function () {
    nav4.style.display = "none";
}
d5.onmouseenter = function () {
    nav5.style.display = "block";

}
d5.onmouseleave = function () {
    nav5.style.display = "none";
}
d6.onmouseenter = function () {
    nav6.style.display = "block";

}
d6.onmouseleave = function () {
    nav6.style.display = "none";
}
d7.onmouseenter = function () {
    nav7.style.display = "block";

}
d7.onmouseleave = function () {
    nav7.style.display = "none";
}
d8.onmouseenter = function () {
    nav8.style.display = "block";

}
d8.onmouseleave = function () {
    nav8.style.display = "none";
}
d9.onmouseenter = function () {
    nav9.style.display = "block";

}
d9.onmouseleave = function () {
    nav9.style.display = "none";
}
d10.onmouseenter = function () {
    nav10.style.display = "block";

}
d10.onmouseleave = function () {
    nav10.style.display = "none";
}

nav1.onmouseleave = function () {
    nav1.style.display = "none";
}
nav1.onmouseenter = function () {
    nav1.style.display = "block";
}
nav2.onmouseleave = function () {
    nav2.style.display = "none";
}
nav2.onmouseenter = function () {
    nav2.style.display = "block";
}
nav3.onmouseleave = function () {
    nav3.style.display = "none";
}
nav3.onmouseenter = function () {
    nav3.style.display = "block";
}
nav4.onmouseleave = function () {
    nav4.style.display = "none";
}
nav4.onmouseenter = function () {
    nav4.style.display = "block";
}
nav5.onmouseleave = function () {
    nav5.style.display = "none";
}
nav5.onmouseenter = function () {
    nav5.style.display = "block";
}
nav6.onmouseleave = function () {
    nav6.style.display = "none";
}
nav6.onmouseenter = function () {
    nav6.style.display = "block";
}
nav7.onmouseleave = function () {
    nav7.style.display = "none";
}
nav7.onmouseenter = function () {
    nav7.style.display = "block";
}
nav8.onmouseleave = function () {
    nav8.style.display = "none";
}
nav8.onmouseenter = function () {
    nav8.style.display = "block";
}
nav9.onmouseleave = function () {
    nav9.style.display = "none";
}
nav9.onmouseenter = function () {
    nav9.style.display = "block";
}
nav10.onmouseleave = function () {
    nav10.style.display = "none";
}
nav10.onmouseenter = function () {
    nav10.style.display = "block";
}
