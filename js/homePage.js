//轮播图
$(function(){
	var $imgLen = $(".carous-img ul li").size();
	var ord = 0;
	var myTime = null;
	myTime = setInterval(nextImg,1000);
	$(".carous").mouseover(function(){ 
		clearInterval(myTime);
		$(".btn-prev").show();
		$(".btn-next").show();
	});
	$(".carous").mouseout(function(){  
		$(".btn-prev").hide();
		$(".btn-next").hide();
		myTime = setInterval(nextImg,1000);
	});
	$(".carous-btn ul li").mouseover(function(){
		clearInterval(myTime);
		ord = $(this).index();
		showImg();
	});
	$(".btn-next").click(function(){
		nextImg();
	});
	$(".btn-prev").click(function(){
		prevImg();
	});
	function showImg(){
		$(".carous-img ul li").eq(ord).fadeIn(1000).siblings().fadeOut(1000);
		$(".carous-btn ul li").eq(ord).addClass("active").siblings().removeClass();
	}
	function nextImg(){
		ord++;
		if(ord>$imgLen){
			ord=0;
		}
		showImg();
	}
	function prevImg(){
		ord--;
		if(ord<0){
			ord=$imgLen;
		}
		showImg();
	}
	
//	function firstShow(){
//		$(".carous-img ul li").eq(index).find(".img1").animate({left:0},1000,function(){
//			$(".carous-img ul li").eq(index).find(".img2").animate({left:550},1000);
//		});
//	}
//	firstShow(); //页面加载后显示第一张图片
//	function changeImg(){
//		index++;
//		if(index == $imgLen){
//			index = 0;
//		}
//		$(".carous-img ul li").eq(index).fadeIn(500).siblings().fadeOut(500);
//		$(".carous-img .carous-btn li").eq(index).addClass("active").siblings().removeClass();
//		firstShow();
//		$(".carous-img ul li").eq(index).siblings().find(".img1").css("left","-10");
//		$(".carous-img ul li").eq(index).siblings().find(".img2").css("left","570");
//	}
//选项卡
	$(".shoopBar .shoopCate dl:even").css("background","#463b7f");
	$(".shoopBar .shoopCate dl:odd").css("background","#382f6b");
	$(".shoopCate dl").hover(function(){
		var ord = $(".shoopCate dl").index(this);
		$(".shoopCate dl").eq(ord).css("background","#fff");
		$(".shoopBar .shoopCate dl").eq(ord).css("color",'#000');
		
		$(".shoopCate dl dd").not($(".shoopCate dl dd").eq(ord)).css("display","none");
		$(".shoopCate dl dd").eq(ord).css("display","block");
	},function(){
		$(".shoopBar .shoopCate dl:even").css("background","#463b7f");
	    $(".shoopBar .shoopCate dl:odd").css("background","#382f6b");
	    $(".shoopBar .shoopCate dl").css("color",'#fff');
		$(".shoopCate dl dd").css("display","none");
	});
	//global 图片移动效果
	$(".global-bigimg-fr ul li").hover(function(){
		var ord = $(".global-bigimg-fr ul li").index(this);
		console.log(ord);
		$(".global-bigimg-fr ul li div a img").eq(ord).animate({"left":-50},300);
	},function(){
		$(".global-bigimg-fr ul li div a img").stop(true,true).animate({"left":0},100);
	});
	//图片亮度变化
	$(".imger").hover(function(){
		var ord = $(".imger").index(this);
		$(".imger").eq(ord).css("opacity",0.7).animate({"opacity":1},500);
	},function(){
		$(".imger").css("opacity",1)
	});
	//闪购图片移动效果
	$(".diver").hover(function(){
		var ord = $(".diver").index(this);
		$(".diver a").eq(ord).animate({"left":-50},300);
		$(".diver i").eq(ord).animate({"left":110},300);
	},function(){
		$(".diver a").stop(true,true).animate({"left":0},300);
		$(".diver i").stop(true,true).animate({"left":180},300);
	});
	//轮播图改变left实现
	var lens = $(".bott-car-ul li").size();
	var ord = 0;
	var mytime = null;
	console.log(lens);
	mytime = setInterval(nextImg,3000);
	function nextImg(){
		ord++;
		if(ord == lens-4){
			
			$(".bott-car-ul").css("left","0px");
			ord = 0;
		}
		console.log(ord);
		$(".bott-car-ul").animate({left:-(ord)*229+"px"},1000);
	}

	
});