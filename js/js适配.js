var setRem=function(){
    var screenW=document.documentElement.clientWidth;
    var uiWidth=375;
    var nowRem=screenW/uiWidth;
    var html=document.getElementsByTagName("html")[0];
    html.style.fontSize=parseInt(nowRem * 100)+"px";
};
setRem();
var timer;
window.onresize=function(){
    clearTimeout(timer);
    timer=setTimeout(function(){
        setRem();
    },100)
};