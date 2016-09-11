/**
 * Created by mac on 16/9/1.
 */
(function(){
    function Main(){
        //注册时的表单事件
        this.Register();
    }

    Main.prototype.Register=function(){
        //姓名获取焦点值为空,失去焦点不为空
        $('.name1')
            .bind('focus',function(){
                $(this).val(" ");
            })
            .bind('blur',function(){
                if($(this).val()==" "){
                    $(this).next("span").text("姓名不能为空")
                }
            });

        //姓名获取焦点值为空,失去焦点不为空
        $('.password1')
            .bind('focus',function(){
                $(this).val(" ");
            })
            .bind('blur',function(){
                if($(this).val()==" "){
                    $(this).next("span").text("密码不能为空")
                }
            });
        //注册事件

        $("#form1").on('submit',function(event){
            event.preventDefault();
            var $ms=$('.message1');
            $ms.text('正在注册用户信息');

            $.post("users/login",
                {
                    name: $(".name1").val(),  //this.name.value
                    password:  $(".password1").val()   //this.password.val()
                }
            ).done(function(data){
                switch(data.status){
                    case 0:
                        $ms.text("用户注册成功");

                        break;
                    case 1:
                        $ms.text('用户注册失败');
                        break;
                    default :
                        $ms.text("未知错误");
                        break;
                }


            }).fail(function(){
                console.log(arguments);
                message.html('无法连接服务器');
            })
        })

    };

    new Main();
})();
