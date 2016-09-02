$(function(){
	var newsBtn=$('.news-btn a');
	newsBtn.first().addClass('news-cur');  /*设定初始按钮*/
	newsBtn.click(function(){            /*news点击换图片的效果*/
		$(this).addClass('news-cur').siblings().removeClass('news-cur');
		var n=newsBtn.index($(this))
		if(n==0){
			$(this).parent().parent().siblings().children('div').animate({left:'0'},600);
		}else{
			
			$(this).parent().parent().siblings().children('div').animate({left:'-640px'},600);
		}
	})
	var showBtn=$('.show-btn ul li i');								
	var showList=$('.show-pic ul li');
	var count=showBtn.parent().length;								

	showBtn.parent().first().find('i').addClass('showbtn-cur');     /*设定showpic初始按钮*/
	showList.first().css({display:'block',opacity:1});				/*设定showpic初始pic*/
	
	showBtn.click(function(){ 
		clearTimeout(tOut);
		clearInterval(autoInter);        /*消除autoPlay的interval堆积效应*/
		if(!showList.is(':animated') && !$(this).hasClass('showbtn-cur')){   
			/*!!重要!!此句后半句为了防止连点出现白色闪动，消除p等于prevP时的显示bug*/               
			var p=$('.show-btn ul li').index($(this).parent());			/*当前索引值*/
			var prevP=$('.show-btn ul li').index($('.showbtn-cur').parent());     /*之前被选中按钮的索引值*/
			           
				$(this).addClass('showbtn-cur').parent().siblings().find('i').removeClass('showbtn-cur');
				showList.eq(p).css({display:'block'}).addClass('show-cur').siblings().removeClass('show-cur').end().animate({opacity:1},700);
				var tOut=setTimeout(function(){
					showList.eq(prevP).css({display:'none',opacity:0});         
					/*设定之前pic消失的时间间隔*/
				},700)
		}
		autoInter=setInterval(autoPlay,2000);
	})
	
	function autoPlay(){     /*设定自动变换图片的函数 及 时间间隔*/
		var t=$('.show-btn ul li').index($('.showbtn-cur').parent());
		t=t+1;
		if (t==count) {t=0};
		if(!showList.is(':animated')){ 
			showBtn.eq(t).trigger('click');
		}
	}
	autoInter=setInterval(autoPlay,2000);

	$('.prev-pic').click(function(){   /*图片查看左箭头*/
		var h=$('.show-btn ul li').index($('.showbtn-cur').parent());   
		h--;
		if (h==-1) {h=count-1};
		if(!showList.is(':animated')){ 
			showBtn.eq(h).trigger('click');
		}
	})
	$('.next-pic').click(function(){	/*图片查看右箭头*/
		var o=$('.show-btn ul li').index($('.showbtn-cur').parent());   
		/*h、o、p是否能够统一下？*/
		o++;
		if (o==count) {o=0};
		if(!showList.is(':animated')){ 
			showBtn.eq(o).trigger('click');
		}
	})
	/*$('.nav-btn').click(function(){
		$(this).css({background:'url(http://res.nie.netease.com/nie/gw/15v1/img/spriter/topBar_1_z_e7632fe.png) -34px 0'})
	})*/
	var cliTimes=0;
	$('.nav-btn').click(function(){
		if(cliTimes%2==0){
			$('.btn-menu').css({display:'block',overflow:'hidden',height:'0'}).animate({height:'605px'},200);
			$(this).css({background:'#282b2d'});
			$(this).find('i').css({background:'url(http:\/\/res.nie.netease.com/nie/gw/15v1/img/spriter/topBar_1_z_e7632fe.png) -34px 0'});
			cliTimes++;
		}else{
			$('.btn-menu').animate({height:'0'},200);
			$(this).css({background:'#cf1132'});
			$(this).find('i').css({background:'url(http:\/\/res.nie.netease.com/nie/gw/15v1/img/spriter/topBar_1_z_e7632fe.png) 0 0'});
			cliTimes++;
		}
	})
})