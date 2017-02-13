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
	//图片变亮变暗
	$(".content-img a ").hover(function(){
		var ord = $(".content-img a ").index(this);
		$(".content-img a img").eq(ord).css("opacity",0.5).animate({"opacity":1},800);
	},function(){
		$(".content-img a img").eq(ord).stop(true,true).css("opacity",1)
	});
});