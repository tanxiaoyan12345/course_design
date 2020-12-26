$(function () {
    //加载图书的信息
    $.ajax({
        type: "post",
        url: "/getBestSaleCosmeticCore",
        data: {},
        dataType: "json",
        async : false,
        success: function(data){
            var list = data.bestSaleCosmeticCore;
            for (var i = 0; i < list.length;i++){
                $("#bestsale").append(
                    "<div class='divCosmetic'>\n"+
                        "<div class='divCosmeticImage'>\n"+
                            "<img src='"+list[i].bestSaleCosmeImg.image+"'style='height: 100%; width: 100%'>"+
                        "</div>\n"+
                        "<div class='divCosmeticTitlePrice'>\n"+
                            "<div class='divCosmeticTitle'>\n"+
                                list[i].bestSaleCosme.name+
                            "</div>\n"+
                            "<div class='divCosmeticPrice'>\n"+"￥"+
                                list[i].bestSaleCosme.price+
                                "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                                "onclick='openNewBookDetail(" +list[i].bestSaleCosme.id +")'>查看详情</button>"+
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
    window.location.href = "/cosmeticDetail?id="+id;
}

