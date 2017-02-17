
		<?php
			header("content-type","text/html;charset=utf-8");
			
			//一、接收客户端的数据
			$userName = $_REQUEST["userName"];
			//二、连接数据库，进行判断
				//1、建立连接
				$conn = mysql_connect("localhost","root","qianfeng");
				
				//2、选择数据库
				mysql_select_db("shooper",$conn);
				
				
				//3、执行SQL语句
				$sqlstr = "select * from vipinfo where vipname='".$userName."'";
				$result = mysql_query($sqlstr,$conn);//执行查询的sql语句后，有返回值，返回的是查询结果
				
				//查询行数
				$query_num =mysql_num_rows($result);
				
				
				//4、关闭数据库
				mysql_close($conn);
				
			//三、返回
			if($query_num==0){
				echo "0";
			}else{
				echo "1";
			}
			
		?>

	

