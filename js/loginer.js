$(function(){
	$("#name").blur(function(){
		$.get("checkUser.php",{"userName":$("#name").val()},function(data){
		console.log($("#phoneName").val());
		console.log(data);
			if(data.indexOf("1")>-1){
				$("#namehint").text("");
				$.cookie( "userName" , $("#phoneName").val()  , { path: '/', expires: 7 });
				location.href="homePage.html"
			}else{
				$("#namehint").text("该用户不存在");
			}
		});
	});
	
});



	$("#zhuinp1").blur(function(){	
		if(this.value==""){
			$("#zhusp1").html("<font color='red'>请输入内容</font>");
		}else{
			var str = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
			if(!str.test(this.value)){
				$("#zhusp1").html("<font color='red'>重新输入</font>");
			}else{
				$.get("mysql.php",{"userName":$("#zhuinp1").val()},function(data){
					console.log(data);
					if(data.indexOf("1")>-1) {
						$("#zhusp1").html("<font color='red'>用户名已存在</font>");
					} else if(data.indexOf("0")>-1) {
						$("#zhusp1").html("<font color='green'>用户名可以使用</font>");
						$("#zhusub").removeAttr("disabled");
					}
				});
			}
		}
	});