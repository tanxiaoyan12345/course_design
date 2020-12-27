$(function () {
    //加载图书的信息
    $.ajax({
        type: "post",
        url: "/getClothesCoreByMask",
        data: {},
        dataType: "json",
        async : false,
        success: function(data){
            var list = data.ClothCoreByMask;
            var tiepian = [];
            var shuimian = [];
            var sila = [];
            var nimo = [];
            for (var i = 0; i < list.length; i++){
                if(list[i].Cloth.subcategory === "贴片式"){
                    tiepian.push(list[i]);
                }else if(list[i].Cloth.subcategory === "睡眠面膜"){
                    shuimian.push(list[i]);
                }else if(list[i].Cloth.subcategory === "撕拉式"){
                    sila.push(list[i]);
                }else if(list[i].Cloth.subcategory === "泥膜"){
                    nimo.push(list[i]);
                }
            }
            for (var i = 0; i < tiepian.length; i++){
                $("#bestsale1").append(
                    "<div class='divClothes2'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+tiepian[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    tiepian[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    tiepian[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +tiepian[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < shuimian.length; i++){
                $("#bestsale2").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+shuimian[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    shuimian[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    shuimian[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +shuimian[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < sila.length; i++){
                $("#bestsale3").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+sila[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    sila[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    sila[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +sila[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < nimo.length; i++){
                $("#bestsale4").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+nimo[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    nimo[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    nimo[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +nimo[i].Cloth.id +")'>查看详情</button>"+
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

