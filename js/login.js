var s1 = document.getElementsByClassName("s1");
var s2 = document.getElementsByClassName("s2");
var a1 = document.getElementsByClassName("a1");
var a2 = document.getElementsByClassName("a2");

a1[0].onmouseenter = function () {
    a1[0].style.color = "rgb(245,102,0)";
};
a1[0].onmouseleave = function () {
    a1[0].style.color = "rgb(102,102,102)";
};
a2[0].onmouseenter = function () {
    a2[0].style.color = "rgb(245,102,0)";
};
a2[0].onmouseleave = function () {
    a2[0].style.color = "rgb(102,102,102)";
};
var p = document.getElementsByClassName("p");

s2[0].onclick = function () {
    // p[0].style.border = "solid red 5px";
    s2[0].style.color = "rgb(245,102,0)";
    s1[0].style.color = "rgb(102,102,102)"
    p[0].style.display = "none";
    var l = document.getElementsByClassName("login");
    l[0].style.backgroundImage = "url('imgs/04.jpg')";
    l[0].style.backgroundRepeat = "no-repeat";
    l[0].style.backgroundPosition = "center";
};

s1[0].onclick = function () {
    s1[0].style.color = "rgb(245,102,0)";
    s2[0].style.color = "rgb(102,102,102)"
    p[0].style.display = "block";
    var l = document.getElementsByClassName("login");
    l[0].style.background = "white";
};