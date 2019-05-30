var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    direction:'horizontal',
    loop: true, // 循环模式选项
    initialSlide:1,
    // 切换效果
    effect : 'coverflow',
    autoplay:{
        stopOnLastSlide:true,
    },
    pagination: {
        el: '.swiper-pagination',
    },

});

/*
var map = new BMap.Map("container");
// 创建地图实例
var point = new BMap.Point(116.404, 39.915);
// 创建点坐标
map.centerAndZoom(point, 15);
// 初始化地图，设置中心点坐标和地图级别
*/



     function initialize() {
        var map = new BMap.Map("container");
        var point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
        window.setTimeout(function(){
            map.panTo(new BMap.Point(116.409, 39.918));
        }, 2000);
    }
initialize()

/*
function loadScript() {
    var script = document.createElement("script");
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=e6psFIdgeiiNh6kIa4dSljucocZZjK0k & callback=initialize";
    $("#allmap").appendChild(script);
}
window.onload = loadScript;
*/
