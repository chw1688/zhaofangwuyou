$(".fen_l>ul>li").on("tap",function(){
    $(".fen_l>ul>li").find("span").css("color","#000");
    $(this).find("span").css("color","red");
    $(".fen_l>ul>li").find("i").css("color","#000");
    $(this).find("i").css("color","red");
    $(".fen_l>ul>li").find(" .tming").hide();
    $(this).find(" .tming").show();
    $(".fen_l>ul>li").find("i").removeClass("fa fa-sort-up").addClass("fa fa-sort-down");
    $(this).find("i").show().removeClass("fa fa-sort-down").addClass("fa fa-sort-up").css("top",".1rem");

})