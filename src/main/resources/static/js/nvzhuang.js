$(function () {
    //加载图书的信息
    $.ajax({
        type: "post",
        url: "/getClothesCoreBynvzhuang",
        data: {},
        dataType: "json",
        async : false,
        success: function(data){
            var list = data.ClothesCoreBynvzhuang;
            var chunzhuang = [];
            var xiazhuang = [];
            var qiuzhuang = [];
            var dongzhuang = [];
            for (var i = 0; i < list.length; i++){
                if(list[i].Clothes.subcategory === "春装"){
                    chunzhuang.push(list[i]);
                }else if(list[i].Clothes.subcategory === "夏装"){
                    xiazhuang.push(list[i]);
                }else if(list[i].Clothes.subcategory === "秋装"){
                    qiuzhuang.push(list[i]);
                }else if(list[i].Clothes.subcategory === "冬装"){
                    dongzhuang.push(list[i]);
                }
            }
            for (var i = 0; i < chunzhuang.length; i++){
                $("#bestsale1").append(
                    "<div class='divClothes2'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+chunzhuang[i].ClothesImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    chunzhuang[i].Clothes.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    chunzhuang[i].Clothes.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +chunzhuang[i].Clothes.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < xiazhuang.length; i++){
                $("#bestsale2").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+xiazhuang[i].ClothesImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    xiazhuang[i].Clothes.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    xiazhuang[i].Clothes.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +xiazhuang[i].Clothes.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < qiuzhuang.length; i++){
                $("#bestsale3").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+qiuzhuang[i].ClothesImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    qiuzhuang[i].Clothes.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    qiuzhuang[i].Clothes.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +qiuzhuang[i].Clothes.id +")'>查看详情</button>"+
                    "</div>\n"+
                    "</div>\n"+
                    "</div>");
            }
            for (var i = 0; i < dongzhuang.length; i++){
                $("#bestsale4").append(
                    "<div class='divClothes'>\n"+
                    "<div class='divClothesImage'>\n"+
                    "<img src='"+dongzhuang[i].ClothesImg.image+"'style='height: 100%; width: 100%'>"+
                    "</div>\n"+
                    "<div class='divClothesTitlePrice'>\n"+
                    "<div class='divClothesTitle'>\n"+
                    dongzhuang[i].Clothes.name+
                    "</div>\n"+
                    "<div class='divClothesPrice'>\n"+"￥"+
                    dongzhuang[i].Clothes.price+
                    "<button type='submit' class='btn btn-danger btn-sm' style='float: right'" +
                    "onclick='openNewBookDetail(" +dongzhuang[i].Clothes.id +")'>查看详情</button>"+
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

