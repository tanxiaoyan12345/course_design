function register() {
    var username = $("#username").val();
    var password = $("#password").val();
    var name = $("#name").val();
    var address = $("#address").val();
    var region = $("#region").val();
    if(username === ""){
        alert("用户名不能为空!");
        document.getElementById("username").focus();
        return false;
    }else if(password === ""){
        alert("密码不能为空!");
        document.getElementById("password").focus();
        return false;
    }else if(name === ""){
        alert("真实姓名不能为空!");
        document.getElementById("name").focus();
        return false;
    }else if(address === ""){
        alert("地址不能为空!");
        document.getElementById("address").focus();
        return false;
    }else if(region === ""){
        alert("所在区域不能为空!");
        document.getElementById("region").focus();
        return false;
    }

    $.ajax({
        type : "post",
        url : "/registerCheck",
        data : {
            "username" : username,
            "password" : password,
            "name" : name,
            "address" : address,
            "region" : region
        },
        async: false,
        dataType: "json",
        success: function (data) {
            if(data.isRegister === "yes"){
                window.location.href = "/mainPage";
                alert("注册成功");
            }else{
                window.location.href = "/register";
                alert("用户名重复，注册失败");
            }
            return false;
        }
    });
}