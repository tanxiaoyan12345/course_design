$(function () {
    //获取url后的参数
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") !== -1) {
        var str = url.substr(1);
        theRequest[str.split("=")[0]]=unescape(str.split("=")[1]);
    }

    $.ajax({
        type: "post",
        url: "/getOneCosmeticDetail",
        data: {
            "id" : theRequest.id
        },
        dataType: "json",
        async: false,
        success: function (data) {
            var cosmeticDetail = data.OneCosmeDetail;
            //左半部分图片部分
            $(".showImgLeft").append("<img src='"+ cosmeticDetail.cosmeImg.image + "' style='height: 100%;width: 100%'>");

            //右半部分信息内容
            $(".showTxtRight").append(
                "<div class='divbrand'>\n" +
                    "品牌|" +cosmeticDetail.cosme.brand +
                "</div>\n" +
                "<div class='divtitle'>\n" +
                    cosmeticDetail.cosme.name +
                "</div>\n" +
                "<div class='divprice'>\n" +
                    "<p>售价</p>\n"+
                    "<div style='color: #a94442;font-size: 20px;padding-left: 15%;font-weight: bold'>\n" +
                        "￥" + cosmeticDetail.cosme.price +".00\n" +
                    "</div>\n" +
                "</div>\n" +
                "<div class='divregion'>\n" +
                    "<div class='right'>运费</div>" +
                    "<div class='left'style='font-weight: bold;'>至&nbsp" + cosmeticDetail.cosme.region +"&nbsp免运费</div>\n" +
                "</div>\n" +
                "<div class='divregion'>\n" +
                    "<div class='right'>服务</div>" +
                    "<div class='left' style='font-weight: bold;'>本商品由&nbsp" + cosmeticDetail.cosme.warehouse +"&nbsp发货</div>\n" +
                "</div>\n" +
                "<div class='divregion'>\n" +
                "<div class='right'>说明</div>" +
                "<div class='left' style='font-weight: bold;'>" +
                "<span class='glyphicon glyphicon-ok-circle'></span>会员9折&nbsp" +
                "<span class='glyphicon glyphicon-ok-circle'></span>正品保障&nbsp" +
                "<span class='glyphicon glyphicon-ok-circle'></span>支持七天无理由退款&nbsp" +
                "<span class='glyphicon glyphicon-remove-circle'></span>不可用券优惠</div>\n" +
                "</div>\n" +
                "<div class='divbtn'>\n" +
                    "<div class='rightbtn'>\n"+
                        "<button type='submit' class='btnAddcart' onclick='addCart("+ cosmeticDetail.cosme.id +","+ 1 +",)'>加入购物车</button>\n" +
                    "</div>\n"+
                    "<div class='leftbtn'>\n"+
                        "<button type='submit' class='btnPurchase'>立即购买</button>\n" +
                    "</div>\n"+
                "</div>");


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

function addCart(bookId, num) {
    $.ajax({
        type: "post",
        url: "/getLoginCustomer",
        data: {},
        dataType: "json",
        async: false,
        success: function (data) {
            var customer = data.loginCustomer;
            if(customer != null){
                $.ajax({
                    type: "post",
                    url: "/addToCart",
                    data: {
                        "cosmeticId" : bookId,
                        "num" : num
                    },
                    dataType: "json",
                    async: false,
                    success: function (data) {
                        alert(data.addToCartResult);
                    }
                });
            }
        }
    });
}