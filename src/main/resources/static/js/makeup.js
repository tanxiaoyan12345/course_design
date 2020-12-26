$(function () {
    //加载图书的信息
    $.ajax({
        type: "post",
        url: "/getCosmeticCoreByMakeup",
        data: {},
        dataType: "json",
        async : false,
        success: function(data){
            var list = data.CosmeCoreByMakeup;
            var yanyin = [];
            var fendi = [];
            var meibi = [];
            var kouhong = [];
            var yanxian = [];
            var saihong = [];
            for (var i = 0; i < list.length; i++){
                if(list[i].Cosme.subcategory === "眼影"){
                    yanyin.push(list[i]);
                }else if(list[i].Cosme.subcategory === "粉底液"){
                    fendi.push(list[i]);
                }else if(list[i].Cosme.subcategory === "眉笔"){
                    meibi.push(list[i]);
                }else if(list[i].Cosme.subcategory === "口红"){
                    kouhong.push(list[i]);
                }else if(list[i].Cosme.subcategory === "眼线"){
                    yanxian.push(list[i]);
                }else if(list[i].Cosme.subcategory === "腮红"){
                    saihong.push(list[i]);
                }
            }
            for (var i = 0; i < yanyin.length; i++){
                $("#bestsale1").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+yanyin[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    yanyin[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    yanyin[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +yanyin[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < fendi.length; i++){
                $("#bestsale2").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+fendi[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    fendi[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    fendi[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +fendi[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < meibi.length; i++){
                $("#bestsale3").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+meibi[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    meibi[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    meibi[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +meibi[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < kouhong.length; i++){
                $("#bestsale4").append(
                    "<div class='divCosmetic2'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+kouhong[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    kouhong[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    kouhong[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +kouhong[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < yanxian.length; i++){
                $("#bestsale5").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+yanxian[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    yanxian[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    yanxian[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +yanxian[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < saihong.length; i++){
                $("#bestsale6").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+saihong[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    saihong[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    saihong[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +saihong[i].Cosme.id +")'>查看详情</button>"+
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

