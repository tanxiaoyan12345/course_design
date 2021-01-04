$(function () {
    //加载图书的信息
    $.ajax({
        type: "post",
        url: "/getBestSaleClothesCore",
        data: {},
        dataType: "json",
        async : false,
        success: function(data){
            var list = data.bestSaleClothesCore;
            for (var i = 0; i < list.length;i++){
                $("#bestsale").append(
                    "<div class='divClothes'>\n"+
                        "<div class='divClothesImage'>\n"+
                            "<img src='"+list[i].bestSaleClothesImg.image+"'style='height: 100%; width: 100%'>"+
                        "</div>\n"+
                        "<div class='divClothesTitlePrice'>\n"+
                            "<div class='divClothesTitle'>\n"+
                                list[i].bestSaleClothes.name+
                            "</div>\n"+
                            "<div class='divClothesPrice'>\n"+"￥"+
                                list[i].bestSaleClothes.price+
                                "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                                "onclick='openNewBookDetail(" +list[i].bestSaleClothes.id +")'>查看详情</button>"+
                            "</div>\n"+
                        "</div>\n"+
                    "</div>");
            }
        }
    });
    //加载用户信息
    $.ajax({
        type: "post",
        url: "/getLoginCustomer",
        data: {},
        dataType: "json",
        async: false,
        success: function (data) {
            var customer = data.loginCustomer;
            if(customer != null){
                $(".navbar-login").remove();
                $(".navbar-register").remove();

                $(".navbar-loginregister").prepend(
                    '<div style="color: #ffffff">'+"欢迎你,"+customer.name+'</div>');
            }
        }
    });
});

function openNewBookDetail(id) {
    window.location.href = "/ClothesDetail?id="+id;
}

