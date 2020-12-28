$(function () {
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

    //加载购物车信息
    $.ajax({
        type: "post",
        url: "/getOrderByUserName",
        data: {},
        dataType: "json",
        async: false,
        success: function (data) {
            var orderItem = data.orderForOneUser;
            for (var i = 0; i < orderItem.length; i++){
                $(".showCartList").after(
                    "<div class='divCartItem'>\n" +
                    "<div class='divCartItem-item'>\n" +
                        "<div class='divCartItem-imgDiv'>\n" +
                            "<img src='"+ orderItem[i].ClothesImg.image +"' style='height: 100%;width: 100%'>\n" +
                        "</div>\n" +
                        "<div class='divCartItem-title'>\n" +
                            orderItem[i].orderInfo.clothesName+
                        "</div>\n" +
                    "</div>\n" +
                    "<div class='divCartItem-little'>\n" +
                        "￥"+ orderItem[i].orderInfo.price + ".00" +
                    "</div>\n" +
                    "<div class='divCartItem-little'>\n" +
                        orderItem[i].orderInfo.number+
                    "</div>\n" +
                    "<div class='divCartItem-little' >\n" +
                        "￥"+ orderItem[i].orderInfo.sumPrice + ".00" +
                    "</div>\n" +
                    "</div>");
            }
        }
    });
});
