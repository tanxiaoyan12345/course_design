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
                $.ajax({
                    type: "post",
                    url: "/getCartByUsername",
                    data: {},
                    dataType: "json",
                    async: false,
                    success: function (data) {
                        var cartItem = data.cartForOneUser;
                        for (var i = 0; i < cartItem.length; i++){
                            $(".showCartList").after(
                                "<div class='divCartItem' name=" + cartItem[i].cartInfo.id + ">\n" +
                                "<div class='divCartItem-checkone'>\n" +
                                "<input type='checkbox' name='checkOne'>\n" +
                                "</div>\n" +
                                "<div class='divCartItem-item'>\n" +
                                "<div class='divCartItem-imgDiv'>\n" +
                                "<img src='"+ cartItem[i].clothesImg.image +"' style='height: 100%;width: 100%'>\n" +
                                "</div>\n" +
                                "<div class='divCartItem-title'>\n" +
                                cartItem[i].cartInfo.clothesName +
                                "</div>\n" +
                                "</div>\n" +
                                "<div class='divCartItem-little'>\n" +
                                "￥"+ cartItem[i].cartInfo.price + ".00" +
                                "</div>\n" +
                                "<div class='divCartItem-little'>\n" +
                                cartItem[i].cartInfo.number +"\n" +
                                "</div>\n" +
                                "<div class='divCartItem-little' name = " + cartItem[i].cartInfo.sumPrice +">\n" +
                                "￥"+ cartItem[i].cartInfo.sumPrice + ".00" +"\n" +
                                "</div>\n" +
                                "<div class='divCartItem-little'>\n" +
                                "<button type='button' class='btn btn-primary' onclick='deleteOneItem(" +
                                cartItem[i].cartInfo.id +")'>删除</button>\n" +
                                "</div>\n" +
                                "</div>");
                        }
                    }
                });
            }else{
                window.location.href = "/login";
            }
        }
    });


    //设置checkbox以及总价格
    $(".divCartItem input:checkbox").click(function () {
        calculatePrices();
    });

    $(".divCart-cleanCart-checkAll input:checkbox").click(function () {
        if ($(this).prop("checked")) {
            $('.divCartItem input:checkbox').attr("checked", true);
            calculatePrices();
        } else {
            $('.divCartItem input:checkbox').attr("checked", false);
            calculatePrices();
        }
    });
});

function calculatePrices() {
    var sumPrice = 0;
    $(".divCartItem input:checkbox:checked").parents(".divCartItem").each(function () {
        sumPrice = sumPrice + parseFloat($(this).children(".divCartItem-little").eq(2).attr("name"));
    });
    sumPrice = sumPrice.toFixed(2);

    $(".divCart-cleanCart-sumPrice span").text("共￥"+sumPrice+"元");
}

function deleteOneItem(id) {
    $.ajax({
        type: "post",
        url: "/deleteOneItem",
        data: {
            "id" : id
        },
        dataType: "json",
        async: false,
        success: function (data) {
            $(".divCartItem[name="+id+"]").remove();
        }
    });
}

function count() {
    var list = "";
    $(".divCartItem input:checkbox:checked").parents(".divCartItem").each(function () {
        list = list + $(this).attr("name") + ",";
    });

    list = list.substring(0,list.length-1);

    if(list!==""){
        window.location.href = "/confirm?item="+list;
    }
}
