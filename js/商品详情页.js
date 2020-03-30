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
li[0].style.border = "#757575 solid 2px";

function change(num) {
    if(num == 1){
        picture.style.background = "url(imgs/shop1.jpg)";
        picture.style.backgroundSize = "contain";
        li[0].style.border = "#757575 solid 2px";
        li[1].style.border = "gainsboro solid 2px";
        li[2].style.border = "gainsboro solid 2px";

    }
    else if(num == 2){
        picture.style.background = "url(imgs/shop2.jpg)";
        picture.style.backgroundSize = "contain";
        li[1].style.border = "#757575 solid 2px";
        li[0].style.border = "gainsboro solid 2px";
        li[2].style.border = "gainsboro solid 2px";
    }
    else{
        picture.style.background = "url(imgs/shop3.jpg)";
        picture.style.backgroundSize = "contain";
        li[2].style.border = "#757575 solid 2px";
        li[0].style.border = "gainsboro solid 2px";
        li[1].style.border = "gainsboro solid 2px";
    }
}
// 移入
li[0].onmouseenter = function () {strong(0)};
li[1].onmouseenter = function () {strong(1)};
li[2].onmouseenter = function () {strong(2)};
//移除
li[0].onmouseleave = function () {weak(0)};
li[1].onmouseleave = function () {weak(1)};
li[2].onmouseleave = function () {weak(2)};
function strong(num){
    li[num].style.border = "#757575 solid 2px";
}
function weak(num){
    li[num].style.border = "gainsboro solid 2px";
}
// 大于小于图标
count = 0
function greater() {
    count += 1;
    if(count > 3){
        count = 1;
    }
    change(count);
}
function  lower() {
    count -= 1;
    if(count < 1){
        count = 3;
    }
    change(count);
}

// 轮播图
setInterval('greater()',2000);

//
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