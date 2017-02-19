/*$(function(){
	$("#name").blur(function(){
		$.get("checkUser.php",{"userName":$("#name").val()},function(data){
			if(data.indexOf("1")>-1){
				$("#namehint").text("");
				$.cookie( "userName" , $("#phoneName").val()  , { path: '/', expires: 7 });
				location.href="homePage.html"
			}else{
				$("#namehint").text("该用户不存在");
			}
		});
	});
	
});*/

//用户名和密码判断
$(function(){
	$("#name").blur(function(){
		$.get("checkUser.php",{"userName":$("#name").val()},function(data){
			console.log(data);
			if(data.indexOf("1")>-1){
				$("#namehint").text("用户存在");
				$.cookie( "userName" , $("#phoneName").val()  , { path: '/', expires: 7 });
			}else{
				$("#namehint").text("该用户不存在");
			}
		});
	});
});


	