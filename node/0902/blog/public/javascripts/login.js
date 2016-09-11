/**
 * Created by mac on 16/9/4.
 */

(function(){
    var alertDiv=$('#alert-div');
    //阻止默认提交事件
    $('#login-form').on("submit",function(e){
        e.preventDefault();

        $.post('/api/login',{
            register:this.login.value,
            password:md5(this.password.value)
        }).done(function(data){
            switch (data.state){
                case 1:
                    location.href="/";
                    break;
                case 3:
                    alertDiv.text('用户名不存在');
                    break;
                case 4:
                    alertDiv.text("密码错误");
                    break;
                default :
                    alertDiv.text('未知错误');
                    break;
            }
        }).fail(function(){
            alertDiv.text(' 无法链接服务器');
        })
    });


    

})();