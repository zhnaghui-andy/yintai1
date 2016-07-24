	/*  银泰轮播图  */
	var banenr_box=$(".banenr_box")[0];

	var banner1=$(".banner_1",banenr_box)
	var num=0;
	var btnL=$(".banner_lan")[0];
	var btnR=$(".banner_ran")[0];
	var lis=$(".tan1_1")
	// console.log(lis)
	function lunbo(){
		num++;
		if (num==lis.length) {
			num=0;
		}
		for (var i = 0; i < lis.length; i++) {
				animate(banner1[i],{opacity:0},500)
				lis[i].style.borderColor="#000";
			};
			animate(banner1[num],{opacity:1},500)
			lis[num].style.borderColor="red"
	}
	var t=setInterval(lunbo,1000)
	banenr_box.onmouseover=function(){
		clearInterval(t)
	}
	banenr_box.onmouseout=function(){
		t=setInterval(lunbo,1000)
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onclick=function(){
			for (var j = 0; j < banner1.length; j++) {
				animate(banner1[j],{opacity:0},500)
				lis[j].style.borderColor="#000";
			};
			animate(banner1[this.index],{opacity:1},500)
			lis[this.index].style.borderColor="red"
			num=this.index;
		}
	};

	/*  **** 右侧固定条*** */
var liss=$("li",$(".yt_fixed")[0]);
	// console.log(liss)
var ssmp=$(".ssmp")
var fixed_tp11=$(".fixed_tp11")
var fixed_wz=$(".fixed_wz")
var yt_fixed=$(".yt_fixed")[0];
	// console.log(ssmp)
var cw=document.documentElement.clientWidth;
var ch=document.documentElement.clientHeight;
var newArr=[];
	for (var i = 0; i < ssmp.length; i++) {
		newArr.push(ssmp[i].offsetTop);
	};
	var ee=true;
	var flag=true;
window.onscroll=function(){
	var obj=document.body.scrollTop?document.body:document.documentElement;
	var aa=obj.scrollTop;
	for (var i = 0; i < newArr.length; i++) {
		if (ch+aa>=newArr[i]+600) {
			for (var p = 0; p < fixed_wz.length; p++) {
				fixed_wz[p].style.display="none"
				fixed_tp11[p].style.display="block"
			};
		fixed_wz[i].style.display="block"
		fixed_tp11[i].style.display="none"
		}; 
	};
	if (ch+aa>=newArr[1]) {
			if (ee) {
				ee=false;
				animate(yt_fixed,{opacity:1})	
			};
			
		}else{
			if (!ee) {
				ee=true;
				animate(yt_fixed,{opacity:0})	
			};
			
		}
	for (var i = 0; i < liss.length; i++) {
		liss[i].index=i
		liss[i].onclick=function(){
			flag=false;
			for (var p = 0; p < fixed_wz.length; p++) {
				fixed_wz[p].style.display="none"
				fixed_tp11[p].style.display="block"
			};
			fixed_wz[this.index].style.display="block"
			fixed_tp11[this.index].style.display="none"
			animate(document.body,{scrollTop:newArr[this.index]},function(){
			flag=true;
		})
		animate(document.documentElement,{scrollTop:newArr[this.index]},function(){
			flag=true;
		})
		}
	}
}
var bban_shop=$(".bban_shop")[0];
var lisss=$("li",bban_shop)
var cztm=$(".cztm")
for (var i = 0; i < lisss.length; i++) {
	lisss[i].index=i;
	lisss[i].onmouseover=function(){
		for (var a = 0; a < lisss.length; a++) {
			cztm[a].style.zIndex=0;
			lisss[a].className="";
		};
		cztm[this.index].style.zIndex=10;
		lisss[this.index].className="bban_shop2";
	}
}
var zgtk_mr_title=$(".zgtk_mr_title")[0];
var sli=$("li",zgtk_mr_title)
var zgtk_mr_main1=$(".zgtk_mr_main1")
for (var i = 0; i < sli.length; i++) {
	sli[i].index=i;
	sli[i].onmouseover=function(){
		for (var y = 0; y < sli.length; y++) {
			zgtk_mr_main1[y].style.display="none";
			sli[y].className="";
		};
		zgtk_mr_main1[this.index].style.display="block";
		sli[this.index].className="zgtk_rmpp";
	}
}
// 银泰的图片边框
	var dhbk=$(".dhbk")
	
	// console.log(dhbk)
	function dh(obj){
		var bw=obj.offsetWidth;
		// var bw=parseInt(getStyle(obj,"width"))
		// var bh=parseInt(getStyle(obj,"height"))
		// var bw=obj.style.width;
		// console.log(bw)
		var bh=obj.offsetHeight;
		// console.log(bh)
		// var bh=obj.style.height;
		var tops=$(".cztm_1_top",obj)[0];
		var rights=$(".cztm_1_right",obj)[0];
		var bottoms=$(".cztm_1_bottom",obj)[0];
		var lefts=$(".cztm_1_left",obj)[0];
		obj.onmouseover=function(){
			animate(tops,{width:bw})
			animate(rights,{height:bh})
			animate(bottoms,{width:bw})
			animate(lefts,{height:bh})
		}
		obj.onmouseout=function(){
			animate(tops,{width:0})
			animate(rights,{height:0})
			animate(bottoms,{width:0})
			animate(lefts,{height:0})
		}
	}
	for (var i=0; i<dhbk.length;i++) {
		dh(dhbk[i])
	};
// var main_e1=$(".main_e1")
// for (var i = 0; i < main_e1.length; i++) {
// 	alert(main_e1[i].offsetWidth)
// };

var flss_b_z=$(".flss_b_z");
var flss_b_lj=$(".flss_b_lj");
var flss_b_rj=$(".flss_b_rj");
for (var i = 0; i < flss_b_z.length; i++) {
	mplb(flss_b_z[i],flss_b_lj[i],flss_b_rj[i])
};
function mplb(obj1,obj2,obj3){
var widths=parseInt(getStyle(obj1,"width"));
var flss_b_z1=$(".flss_b_z1",obj1)
var aa=0;
var bb=0;
var cc=true;

obj2.onclick=function(){
	if (cc) {
		cc=false;
		bb--
		if (bb<=0) {
			bb=flss_b_z1.length-1
		}
		flss_b_z1[bb].style.left=-widths+"px";
		// lis[aa].style.background="#ccc";
		// lis[bb].style.background="red";
		animate(flss_b_z1[aa],{left:widths},function(){
			cc=true;
		})
		animate(flss_b_z1[bb],{left:0})
		aa=bb;
	};
		

}
obj3.onclick=function(){
	if (cc) {
		cc=false;
		bb++;
		if (bb==flss_b_z1.length) {
			bb=0
		};
		flss_b_z1[bb].style.left=widths+"px";
		// lis[aa].style.background="#ccc";
		// lis[bb].style.background="red";
		animate(flss_b_z1[aa],{left:-widths},function(){
			cc=true;
		})
		animate(flss_b_z1[bb],{left:0})
		aa=bb;
	};	
}
}

//轮播图的左右按钮
var flss_zhong=$(".flss_zhong")
for (var i = 0; i < flss_zhong.length; i++) {
	lrbtn(flss_zhong[i])
};

function lrbtn(obj){
	var leftbtn=$(".flss_zhong_lan",obj)[0];
	var rightbtn=$(".flss_zhong_ran",obj)[0];
	obj.onmouseover=function(){
		animate(leftbtn,{left:0})
		animate(rightbtn,{right:0})
	}
	obj.onmouseout=function(){
		animate(leftbtn,{left:-30})
		animate(rightbtn,{right:-30})
	}
}
//图片lunbo
var flss_zhong1=$(".flss_zhong1")//圖片框
var flss_zhong_ban=$(".flss_zhong_ban")//小圓點
var flss_zhong_lan=$(".flss_zhong_lan")//左按钮
var flss_zhong_ran=$(".flss_zhong_ran")//右按钮

for (var i = 0; i < flss_zhong1.length; i++) {
	tplb(flss_zhong1[i],flss_zhong_lan[i],flss_zhong_ran[i],flss_zhong_ban[i])
};
function tplb(obj1,obj2,obj3,obj4){
var widths=parseInt(getStyle(obj1,"width"));
var flss_b_z1=$("a",obj1)
var xyd=$("li",obj4)
var aa=0;
var bb=0;
var cc=true;

obj2.onclick=function(){
	if (cc) {
		cc=false;
		bb--
		if (bb<0) {
			bb=flss_b_z1.length-1
		}
		flss_b_z1[bb].style.left=-widths+"px";
		// lis[aa].style.background="#ccc";
		// lis[bb].style.background="red";
		animate(flss_b_z1[aa],{left:widths})
		animate(flss_b_z1[bb],{left:0},function(){
			cc=true;
		})
		xyd[aa].className="";
		xyd[bb].className="flss_zhong_banx";
		aa=bb;
	};
		

}
obj3.onclick=function(){
	if (cc) {
		cc=false;
		bb++;
		if (bb==flss_b_z1.length) {
			bb=0
		};
		flss_b_z1[bb].style.left=widths+"px";
		
		animate(flss_b_z1[aa],{left:-widths},function(){
			cc=true;
		})
		animate(flss_b_z1[bb],{left:0})
		xyd[aa].className="";
		xyd[bb].className="flss_zhong_banx";
		aa=bb;
	};	
}
}
