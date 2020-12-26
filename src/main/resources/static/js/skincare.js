$(function () {
    //加载图书的信息
    $.ajax({
        type: "post",
        url: "/getCosmeticCoreBySkincare",
        data: {},
        dataType: "json",
        async : false,
        success: function(data){
            var list = data.CosmeCoreBySkincare;
            var jiemian = [];
            var mianshuang = [];
            var yanshuang = [];
            var fangshai = [];
            var jinghua = [];
            for (var i = 0; i < list.length; i++){
                if(list[i].Cosme.subcategory === "洁面"){
                    jiemian.push(list[i]);
                }else if(list[i].Cosme.subcategory === "面霜"){
                    mianshuang.push(list[i]);
                }else if(list[i].Cosme.subcategory === "眼霜"){
                    yanshuang.push(list[i]);
                }else if(list[i].Cosme.subcategory === "防晒"){
                    fangshai.push(list[i]);
                }else if(list[i].Cosme.subcategory === "精华"){
                    jinghua.push(list[i]);
                }
            }
            for (var i = 0; i < jiemian.length; i++){
                $("#bestsale1").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+jiemian[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    jiemian[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    jiemian[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +jiemian[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < mianshuang.length; i++){
                $("#bestsale2").append(
                    "<div class='divCosmetic'>\n"+
                        "<div class='divCosmeticImage'>\n"+
                            "<img src='"+mianshuang[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                        "</div>\n"+
                        "<div class='divCosmeticTitlePrice'>\n"+
                            "<div class='divCosmeticTitle'>\n"+
                                mianshuang[i].Cosme.name+
                            "</div>\n"+
                            "<div class='divCosmeticPrice'>\n"+"￥"+
                                mianshuang[i].Cosme.price+
                                "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                                "onclick='openNewBookDetail(" +mianshuang[i].Cosme.id +")'>查看详情</button>"+
                            "</div>\n"+
                        "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < yanshuang.length; i++){
                $("#bestsale3").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+yanshuang[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    yanshuang[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    yanshuang[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +yanshuang[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < fangshai.length; i++){
                $("#bestsale4").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+fangshai[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    fangshai[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    fangshai[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +fangshai[i].Cosme.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < jinghua.length; i++){
                $("#bestsale5").append(
                    "<div class='divCosmetic'>\n"+
                    "<div class='divCosmeticImage'>\n"+
                    "<img src='"+jinghua[i].CosmeImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divCosmeticTitlePrice'>\n"+
                    "<div class='divCosmeticTitle'>\n"+
                    jinghua[i].Cosme.name+
                    "</div>\n"+
                    "<div class='divCosmeticPrice'>\n"+"￥"+
                    jinghua[i].Cosme.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +jinghua[i].Cosme.id +")'>查看详情</button>"+
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

