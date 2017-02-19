/*$(function(){
	$("#phoneName").blur(function(){
		$.get("checkUser.php",{"userName":$("#phoneName").val()},function(data){
		//console.log($("#phoneName").val());
		//console.log(data);
		
			if(data.indexOf("1")>-1){
				$("#hinter").text("该用户已被注册");
			}else{
				$("#hinter").text("可以注册");
				//$("#btn").removeAttr("disabled");
			}
		});
	});
	$("#btn").click(function(){
		$.post("regSave.php",{"userName":$("#phoneName").val(),"pass":$("#userPass").val()},function(data){
		
			if(data.indexOf("1")>-1){
				//设置cook

				$.cookie( "userName" , $("#phoneName").val()  , { path: '/', expires: 7 });
				//$.cookie( "userName" , $("#userId").val()  , { path: '/', expires: 7 });
			    
			    location.href="homePage.html"
				}
			});
		});
});*/

//正则判断+
$(function(){
	var order = 0
	$("#phoneName").blur(function(){
		if(this.value == ""){		//判断不能为空
			$("#hinter").text("请输入用户名");
		}else{
			var str=/^1\d{10}$/ig;
			if(!str.test(this.value)){  //正则判断是否符合
				$("#hinter").text("不是手机号");
			}else{
				$.get("checkUser.php",{"userName":$("#phoneName").val()},function(data){
					if(data.indexOf("1")>-1){    //数据库是否已经存在
						$("#hinter").text("该用户已被注册");
					}else{
						$("#hinter").text("可以注册");
						order++;
						//console.log(order+"用户名");
					}
				});
			}
		}
	});
	$("#userPass").blur(function(){
		
		if(this.value == ""){
			$("#hinter1").text("请输入密码");
		}else{
			var str1 = /^\S{6,20}$/;
			if(!str1.test(this.value)){
				$("#hinter1").text("密码格式不对");
			}else{
				order++;
				//console.log(order+"密码");
			}
		}
	});
	
	$("#userPassWord").blur(function(){
		//console.log($("#userPass").val())
		if(this.value == ""){
			$("#hinter2").text("请输入确认密码");
		}else if( this.value != $("#userPass").val()){
			$("#hinter2").text("密码不一致");
		}else{
			order++;
			//console.log(order+"确认密码");
		}
	});
	
	$("#btn").click(function(){
		//console.log(order);
		if(order == 3){
			console.log("order");
			$.post("regSave.php",{"userName":$("#phoneName").val(),"pass":$("#userPass").val()},function(data){
				if(data.indexOf("1")>-1){
					$.cookie( "userName" , $("#phoneName").val()  , { path: '/', expires: 7 });
				    location.href="homePage.html"
				}
			});
		}
		
	});
	
	
});
