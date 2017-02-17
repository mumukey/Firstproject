<?php
	header("content-type","text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$userName = $_REQUEST['userName'];
	$userPass = $_REQUEST['pass'];
	echo "用户名:".$userName;
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","qianfeng");
	//2）、选择数据库（找目的地）
			mysql_select_db("shooper",$conn);
			
			//3）、传输数据（过桥）
			//insert语句
			$sqlstr = "insert into vipinfo(vipname,vippass) values('".$userName."','".$userPass."')";
			//执行语句
			//$sqlstr = "select * from vipinfo where vipname=".$userName;
			$result = mysql_query($sqlstr,$conn);//执行查询的sql语句后，有返回值，返回的是查询结果
		
			//查询行数
			$query_num =mysql_num_rows($result);
			
			//echo($sqlstr);
			
			mysql_query($sqlstr,$conn);
			
			//4）、关闭连接（拆桥）
			mysql_close($conn);

	
	//3、给客户端返回（响应）一个注册成功！
	//三、返回
	if($query_num==0){
		echo "0";
	}else{
		echo "1";
	}
	
?>
	



