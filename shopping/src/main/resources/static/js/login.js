function login() {
    var username = $("#username").val();
    var password = $("#password").val();
    if(username === ""){
        alert("用户名不能为空!");
        document.getElementById("username").focus();
        return false;
    }else if(password === ""){
        alert("密码不能为空!");
        document.getElementById("password").focus();
        return false;
    }

    $.ajax({
        type : "post",
        url : "/loginCheck",
        data : {
            "username" : username,
            "password" : password
        },
        async: false,
        dataType: "json",
        success: function (data) {
            if(data.isLogin === "yes"){
                window.location.href = "/mainPage";
                alert("登录成功");
            }else{
                window.location.href = "/login";
                alert("用户名或密码错误，登录失败");
            }
            return false;
        }
    });
}