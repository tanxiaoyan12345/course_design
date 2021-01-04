$(function () {
    $.ajax({
        type: "post",
        url: "/getClothesCoreByshipin",
        data: {},
        dataType: "json",
        async : false,
        success: function(data){
            var list = data.ClothesCoreByshipin;
            var maozi = [];
            var weijin = [];
            var yaodai = [];
            for (var i = 0; i < list.length; i++){
                if(list[i].Clothes.subcategory === "maozi"){
                    maozi.push(list[i]);
                }else if(list[i].Clothes.subcategory === "weijin"){
                    weijin.push(list[i]);
                }else if(list[i].Clothes.subcategory === "yaodai"){
                    yaodai.push(list[i]);
                }
            }
            for (var i = 0; i < maozi.length; i++){
                $("#bestsale1").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+maozi[i].ClothesImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    maozi[i].Clothes.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    maozi[i].Clothes.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +maozi[i].Clothes.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < weijin.length; i++){
                $("#bestsale2").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+weijin[i].ClothesImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    weijin[i].Clothes.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    weijin[i].Clothes.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +weijin[i].Clothes.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < yaodai.length; i++){
                $("#bestsale3").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+yaodai[i].ClothesImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    yaodai[i].Clothes.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    yaodai[i].Clothes.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +yaodai[i].Clothes.id +")'>查看详情</button>"+
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
    window.location.href = "/ClothesDetail?id="+id;
}

