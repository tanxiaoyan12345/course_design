$(function () {
    //加载图书的信息
    $.ajax({
        type: "post",
        url: "/getClothesCoreByPerfume",
        data: {},
        dataType: "json",
        async : false,
        success: function(data){
            var list = data.ClothCoreByPerfume;
            var nanxiang = [];
            var nvxiang = [];
            var zhongxingxiang = [];
            for (var i = 0; i < list.length; i++){
                if(list[i].Cloth.subcategory === "男香"){
                    nanxiang.push(list[i]);
                }else if(list[i].Cloth.subcategory === "女香"){
                    nvxiang.push(list[i]);
                }else if(list[i].Cloth.subcategory === "中性香"){
                    zhongxingxiang.push(list[i]);
                }
            }
            for (var i = 0; i < nanxiang.length; i++){
                $("#bestsale1").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+nanxiang[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    nanxiang[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    nanxiang[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +nanxiang[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < nvxiang.length; i++){
                $("#bestsale2").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+nvxiang[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    nvxiang[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    nvxiang[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +nvxiang[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < zhongxingxiang.length; i++){
                $("#bestsale3").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+zhongxingxiang[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    zhongxingxiang[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    zhongxingxiang[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +zhongxingxiang[i].Cloth.id +")'>查看详情</button>"+
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

