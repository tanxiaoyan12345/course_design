$(function () {
    //加载图书的信息
    $.ajax({
        type: "post",
        url: "/getClothesCoreByMakeup",
        data: {},
        dataType: "json",
        async : false,
        success: function(data){
            var list = data.ClothCoreByMakeup;
            var yanyin = [];
            var fendi = [];
            var meibi = [];
            var kouhong = [];
            var yanxian = [];
            var saihong = [];
            for (var i = 0; i < list.length; i++){
                if(list[i].Cloth.subcategory === "眼影"){
                    yanyin.push(list[i]);
                }else if(list[i].Cloth.subcategory === "粉底液"){
                    fendi.push(list[i]);
                }else if(list[i].Cloth.subcategory === "眉笔"){
                    meibi.push(list[i]);
                }else if(list[i].Cloth.subcategory === "口红"){
                    kouhong.push(list[i]);
                }else if(list[i].Cloth.subcategory === "眼线"){
                    yanxian.push(list[i]);
                }else if(list[i].Cloth.subcategory === "腮红"){
                    saihong.push(list[i]);
                }
            }
            for (var i = 0; i < yanyin.length; i++){
                $("#bestsale1").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+yanyin[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    yanyin[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    yanyin[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +yanyin[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < fendi.length; i++){
                $("#bestsale2").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+fendi[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    fendi[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    fendi[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +fendi[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < meibi.length; i++){
                $("#bestsale3").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+meibi[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    meibi[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    meibi[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +meibi[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < kouhong.length; i++){
                $("#bestsale4").append(
                    "<div class='divClothes2'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+kouhong[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    kouhong[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    kouhong[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +kouhong[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < yanxian.length; i++){
                $("#bestsale5").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+yanxian[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    yanxian[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    yanxian[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +yanxian[i].Cloth.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < saihong.length; i++){
                $("#bestsale6").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+saihong[i].ClothImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    saihong[i].Cloth.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    saihong[i].Cloth.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +saihong[i].Cloth.id +")'>查看详情</button>"+
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

