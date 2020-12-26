$(function () {
    //加载图书的信息
    $.ajax({
        type: "post",
        url: "/getCosmeticCoreByMask",
        data: {},
        dataType: "json",
        async : false,
        success: function(data){
            var list = data.CosmeCoreByMask;
            var tiepian = [];
            var shuimian = [];
            var sila = [];
            var nimo = [];
            for (var i = 0; i < list.length; i++){
                if(list[i].Cosme.subcategory === "贴片式"){
                    tiepian.push(list[i]);
                }else if(list[i].Cosme.subcategory === "睡眠面膜"){
                    shuimian.push(list[i]);
                }else if(list[i].Cosme.subcategory === "撕拉式"){
                    sila.push(list[i]);
                }else if(list[i].Cosme.subcategory === "泥膜"){
                    nimo.push(list[i]);
                }
            }
            for (var i = 0; i < tiepian.length; i++){
                $("#bestsale1").append(
                    "<div class='divCosmetic2'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+tiepian[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    tiepian[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    tiepian[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +tiepian[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < shuimian.length; i++){
                $("#bestsale2").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+shuimian[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    shuimian[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    shuimian[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +shuimian[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < sila.length; i++){
                $("#bestsale3").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+sila[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    sila[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    sila[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +sila[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < nimo.length; i++){
                $("#bestsale4").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+nimo[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    nimo[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    nimo[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +nimo[i].Cosme.id +")'>查看详情</button>"+
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

