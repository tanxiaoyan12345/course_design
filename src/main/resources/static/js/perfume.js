$(function () {
    //加载图书的信息
    $.ajax({
        type: "post",
        url: "/getCosmeticCoreByPerfume",
        data: {},
        dataType: "json",
        async : false,
        success: function(data){
            var list = data.CosmeCoreByPerfume;
            var nanxiang = [];
            var nvxiang = [];
            var zhongxingxiang = [];
            for (var i = 0; i < list.length; i++){
                if(list[i].Cosme.subcategory === "男香"){
                    nanxiang.push(list[i]);
                }else if(list[i].Cosme.subcategory === "女香"){
                    nvxiang.push(list[i]);
                }else if(list[i].Cosme.subcategory === "中性香"){
                    zhongxingxiang.push(list[i]);
                }
            }
            for (var i = 0; i < nanxiang.length; i++){
                $("#bestsale1").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+nanxiang[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    nanxiang[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    nanxiang[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +nanxiang[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < nvxiang.length; i++){
                $("#bestsale2").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+nvxiang[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    nvxiang[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    nvxiang[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +nvxiang[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < zhongxingxiang.length; i++){
                $("#bestsale3").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+zhongxingxiang[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    zhongxingxiang[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    zhongxingxiang[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +zhongxingxiang[i].Cosme.id +")'>查看详情</button>"+
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

