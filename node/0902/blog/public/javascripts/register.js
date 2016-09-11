/**
 * Created by mac on 16/9/3.
 */
(function(){
    //阻止表单的默认提交事件
    var confirmPasswordAlert=$("#confirm-password-alert");
    var alertDiv=$('#alert-div');

    $("#register-form").on("submit",function(e){
        e.preventDefault();

     //两次密码不能相同   如果不相同,提示,  相同,无提示信息
        if(this.password.value!=this.passwordconfirm.value){
            confirmPasswordAlert.text('两次输入密码不相同');
            return;
        }
        confirmPasswordAlert.empty();
     //Post方法向后台api/register服务器  传输数据 done(data)返回的数据
        $.post("/api/register",{
            register:this.register.value,
            password:md5(this.password.value)
        }).done(function(data){
            console.log(data);
            switch(data.state){
                case 1:
                    location.href="/";
                    break;
                case 2:
                    alertDiv.text('无法添加用户');
                    break;
                case 1062:
                    alertDiv.text("用户已存在");
                    break;
                default:
                    alertDiv.text('错误');
            }
        }).fail(function(){
            alertDiv.text('无法连接服务器!');
        });
    })
})();