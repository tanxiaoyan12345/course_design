$(function () {
    //加载图书的信息
    $.ajax({
        type: "post",
        url: "/getClothesCoreBySkincare",
        data: {},
        dataType: "json",
        async : false,
        success: function(data){
            var list = data.ClothCoreBySkincare;
            var jiemian = [];
            var mianshuang = [];
            var yanshuang = [];
            var fangshai = [];
            var jinghua = [];
            for (var i = 0; i < list.length; i++){
                if(list[i].Cloth.subcategory === "洁面"){
                    jiemian.push(list[i]);
                }else if(list[i].Cloth.subcategory === "面霜"){
                    mianshuang.push(list[i]);
                }else if(list[i].Cloth.subcategory === "眼霜"){
                    yanshuang.push(list[i]);
                }else if(list[i].Cloth.subcategory === "防晒"){
                    fangshai.push(list[i]);
                }else if(list[i].Cloth.subcategory === "精华"){
                    jinghua.push(list[i]);
                }
            }
            for (var i = 0; i < jiemian.length; i++){
                $("#bestsale1").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+jiemian[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    jiemian[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    jiemian[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +jiemian[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < mianshuang.length; i++){
                $("#bestsale2").append(
                    "<div class='divClothes'>\n"+
                        "<div class='divClothesImage'>\n"+
                            "<img src='"+mianshuang[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                        "</div>\n"+
                        "<div class='divClothesTitlePrice'>\n"+
                            "<div class='divClothesTitle'>\n"+
                                mianshuang[i].Cloth.name+
                            "</div>\n"+
                            "<div class='divClothesPrice'>\n"+"￥"+
                                mianshuang[i].Cloth.price+
                                "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                                "onclick='openNewBookDetail(" +mianshuang[i].Cloth.id +")'>查看详情</button>"+
                            "</div>\n"+
                        "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < yanshuang.length; i++){
                $("#bestsale3").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+yanshuang[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    yanshuang[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    yanshuang[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +yanshuang[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < fangshai.length; i++){
                $("#bestsale4").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+fangshai[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    fangshai[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    fangshai[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +fangshai[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < jinghua.length; i++){
                $("#bestsale5").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+jinghua[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    jinghua[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    jinghua[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +jinghua[i].Cloth.id +")'>查看详情</button>"+
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
    window.location.href = "/clothesDetail?id="+id;
}

