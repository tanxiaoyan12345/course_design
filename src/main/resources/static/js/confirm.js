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
                $(".showAddress").append(
                    '<div class="addressCard">' +
                        '<div style="height: 30%;border-bottom: solid 1px #e5e5e5;font-weight: bold">'+
                            customer.region+"("+customer.name+")"+
                        '</div>'+
                        '<div>'+customer.address+'</div>'+
                    '</div>')
            }
        }
    });
    //获取url后的参数
    var url = location.search; //获取url中"?"符后的字串
    if(url!==""){
        var theRequest = new Object();
        if (url.indexOf("?") !== -1) {
            var str = url.substr(1);
            theRequest[str.split("=")[0]]=unescape(str.split("=")[1]);
        }
        var cartId = theRequest.item.split(',');
        for (var i = 0; i < cartId.length; i++){
            $.ajax({
                type: "post",
                url: "/getCartById",
                data: {
                    "cartId" : cartId[i]
                },
                dataType: "json",
                async: false,
                success: function (data) {
                    var cartItem = data.cartForId;
                    $(".showCartList").after(
                        "<div class='divCartItem' name=" + cartItem.cartInfo.id + ">\n" +
                        "<div class='divCartItem-item'>\n" +
                        "<div class='divCartItem-imgDiv'>\n" +
                        "<img src='"+ cartItem.clothesImg.image +"' style='height: 100%;width: 100%'>\n" +
                        "</div>\n" +
                        "<div class='divCartItem-title'>\n" +
                        cartItem.cartInfo.clothesName +
                        "</div>\n" +
                        "</div>\n" +
                        "<div class='divCartItem-little'>\n" +
                        "￥"+ cartItem.cartInfo.price + ".00" +
                        "</div>\n" +
                        "<div class='divCartItem-little'>\n" +
                        cartItem.cartInfo.number +"\n" +
                        "</div>\n" +
                        "<div class='divCartItem-little' name = " + cartItem.cartInfo.sumPrice +">\n" +
                        "￥"+ cartItem.cartInfo.sumPrice + ".00" +"\n" +
                        "</div>\n" +
                        "</div>");
                }
            });
        }
    }

    var sumPrice = 0;
    $(".divCartItem").each(function () {
        sumPrice = sumPrice + parseFloat($(this).children(".divCartItem-little").eq(2).attr("name"));
    });
    sumPrice = sumPrice.toFixed(2);
    $(".divCart-cleanCart-sumPrice span").text("共￥"+sumPrice+"元");
});

function confirm() {
    var list = "";
    $(".divCartItem").each(function () {
        list = list + $(this).attr("name") + ",";
    });
    list = list.substring(0,list.length-1);
    var confirmCartId = list.split(',');
    alert(confirmCartId.length);
    for (var i = 0; i < confirmCartId.length; i++){
        var isSuccess = false;
        $.ajax({
            type: "post",
            url: "/addNewOrder",
            data: {
                "cartId" : confirmCartId[i]
            },
            dataType: "json",
            async: false,
            success: function (data) {
                isSuccess = true;
            }
        });
        if(isSuccess){
            $.ajax({
                type: "post",
                url: "/deleteOneItem",
                data: {
                    "cartId" : confirmCartId[i]
                },
                dataType: "json",
                async: false,
                success: function (data) {

                }
            });
        }
    }
}