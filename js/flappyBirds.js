// $(function(){

//     //让小鸟动起来
// 	var $b1 = $("#b1");
// 	var $b2 = $("#b2");
// 	$("#test").click(function(){
// 		$b1.toggle(0.5);
// 		$b2.toggle(0.5);

// 	});
	

//    //让文字和小鸟一起上下抖动
// 	var $head = $(".head");
// 	$("#test1").click(function(){
// 		$head.animate({top : "3px"},200)
// 			 .animate({top : "0px"},200);
			 

// 	});


	
// 	setInterval(function(){
// 		$("#test1").trigger("click");
// 		$("#test").trigger("click");
		
// 	},100);


// 	//由于频率问题，下面的滚动条需要重新设置一个定时器，还需要对偏移量进行判断
// 	// setInterval(function(){
		
// 	// 	$banner.trigger("click");
// 	// },1);

// 	var $banner = $("#banner");
// 	var $banneroffset = $("#banner").offset();


// 	//这个设置样式的方法是没有错的
// 	// $banner.css("left" , "-600px");
	
	
// 	newoffset = new Object();
// 	newoffset.left = "-343";

// 	$banner.click(function(){
// 		var newLeft = parseInt($banneroffset.left);
        
//             if(newLeft<-686){
//             	alert("over");
//             	$(this).css("left" , "-343px");
//             	$(this).animate({left: "-=1px"},1);

            	
                
//             }
//             if(newLeft>-686){
//             	$(this).animate({left: "-=1px"},1);
            	
                
//             }
		
		
// 	});

	
// })
window.onload = function() {

	//让小鸟动起来
	function bird() {
		var birds = document.getElementById('active_birds').getElementsByTagName('img');

		var bird1 = birds[0];
		//默认一只小鸟是可见的
		bird1.style.visibility = "visible";

		var bird2 = birds[1];		
		//切换小鸟的可见状态
		function moveBirds(theBird) {
			if (theBird.style.visibility == "visible") {
				theBird.style.visibility = "hidden";
			} else {
				theBird.style.visibility = "visible";
			}
		}

		//使两只小鸟轮换出现，形成动态
		setInterval(
			function(){
				moveBirds(bird1);
				moveBirds(bird2);
			}, 300);
	}

	//让小鸟和字的那一整块一起动起来
	function words() {
		var img = document.getElementById('head');
		function moveImg() {

			//不断改变整块的偏移量，使上下移动
			setInterval(function(){
				if (img.style.top == "0px") {
					img.style.top = "3px";
				} else {
					img.style.top = "0px";
				}
			},300);
		}

		moveImg();
	}

	//让画面下面那一条也动起来
	
		
	function animate() {
		var bannerBlock = document.getElementById('banner');
		//设置一个初值
		bannerBlock.style.left = "0px";

		//间歇调用使图片偏移量增加的函数
		setInterval(function(){

			//对偏移量进行判断
			if (parseInt(bannerBlock.style.left) < -646) {
				bannerBlock.style.left = 0;
			}
			var newLeft = parseInt(bannerBlock.style.left) - 2;
			bannerBlock.style.left = newLeft + 'px';

			// console.log(bannerBlock.style.left);

			// return bannerBlock.style.left;

		},25);
			 
			
			

	}






	
				
	words();


	bird();
	animate();
	
	



}






