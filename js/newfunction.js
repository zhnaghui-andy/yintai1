// 兼容获取类名
	//参数select 代表要获取的类名
	//[context]要查找的范围，如果要传的话按照他的范围找，如果不传给它一个默认的范围；
		//注意  这里的范围必须要获取到，
	function getClass(select,context){
		var context=context?context:document;
		if (document.getElementByClassName) {
			return context.getElementsByClassName(select);
		}else{
			var arr=[];
			var all=context.getElementsByTagName("*");
			for (var i = 0; i < all.length; i++) {
				if(checkClass(all[i].className,select)){
					arr.push(all[i])
				}
			}
			return arr;
		}
	}
	// 多类名判断语句
	function checkClass(allclass,newclass){
		var arr=allclass.split(" ")//以空格为分割成arr数组
		for (var i = 0; i < arr.length; i++) {
			if(arr[i]==newclass){
				return true;
			}
				
			}return false;
		}
	



	//兼容  各种浏览器里元素内容的获取和修改
	function setContent(obj,val){
		if (val==undefined) {
			if (obj.innnerText) {
				return obj.innnerText;
			}else{
				return obj.textContent;
			}
		}else{
			if (obj.innnerText) {
				obj.innnerText=val;
			}else{
				obj.textContent=val;
			}
		}
	}
//获取对象的样式
//obj  代表要提取的对象，   attr表示要获取的样式
	function getStyle(obj,attr){
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,null)[attr];
		}
	}

	// 简化获取方法
	//select  要获取的名字  类名  id名。  obj  获取的范围
	function $(select,obj){
		if (typeof select=="string") {
			var obj=obj||document;
			if (select.charAt(0)==".") {
				return getClass(select.slice(1),obj);
			}else if(select.charAt(0)=="#"){
				return document.getElementById(select.substr(1))
			}else if (/^[a-zA-Z][a-zA-Z1-6]*$/.test(select)) {
				return obj.getElementsByTagName(select)
			}else if(/^<[a-zA-Z][a-zA-Z1-6]>$/.test(select)){
				return obj.createElement(select.slice(1,-1))
			}
		}else if(typeof select=="function"){
			addEvent(window,"load",select)
			// window.onload=function(){
			// 	select()
			}
		}
	// }
	/*
	getChild (obj,type) 
	获取指定元素的子节点
	obj：指定的对象
	type：获取子节点的类型 true的时候获取有意义的文档和元素节点。false时候只获取元素节点
			当不输入的时候值为undefin 走false这条路
	*/
function getChilds(obj,type){
	var aa=obj.childNodes;
	var arr=[];
	var type=type||false;
	for (var i = 0; i < aa.length; i++) {
		if (type) {
			if (aa[i].nodeType==1||(aa[i].nodeType==3&&!( /^\s+$/.test(xiaos[i].nodeValue)))) {
				arr.push(aa[i]);
			}
		}else{
			if (aa[i].nodeType==1) {
				arr.push(aa[i]);
			};
		}
	}
	return arr;  
}
  /*
	get
  */
  /* 获取第一个有用子节点 */
function getFirst(obj,type){
	 return getChilds(obj,type)[0];
}
/*获取最后一个有用子节点 */
function getLast(obj,type){
	var all=getChilds(obj,type);
	return all[all.length-1];
}
/*获取任意一个有用子节点*/
function getNum(obj,index){
	return getChilds(obj)[index];
}
/*获得下一个兄弟节点*/
	function getNext(obj){
		var next=obj.nextSibling;
		if (next==null) {
			return false;
		}
		while(next.nodeType==8||(next.nodeType==3&&( /^\s+$/.test(next.nodeValue)))){
			next=next.nextSibling;
			if (next==null) {
				return false;
			}
		}
		return next;
	}
/*获得上一个兄弟节点*/
	function getPre(obj){
		var next=obj.previousSibling;
		if (next==null) {
			return false;
		}
		while(next.nodeType==8||(next.nodeType==3&&( /^\s+$/.test(next.nodeValue)))){
			next=next.nextSibling;
			if (next==null) {
				return false;
			}
		}
		return next;
	}
	// 把创建的元素添加到指定的对象之后
		// obj：创建好的元素
		// zobj：指定的元素
	function insertAfter(obj,zobj){
		var fobj=zobj.parentNode;
		var next=getNext(zobj);
		if (next) {
		fobj.insertBefore(obj,next);
		}else{
		fobj.appendChild(obj);
		}
		
	}
	// 插入到指定的对象之前
		//obj: 创建好的元素   
		//zobj： 指定的元素
	function insertBefore(obj,zobj){
		var fobj=zobj.parentNode;
		fobj.insertBefore(obj,zobj);
	}
	// 把创建的对象添加到父对象的最前面
		//obj: 创建好的元素   
		//fobj： 要插入的地方的父元素
	function appendBofore(obj,fobj){
		var fist=getFirst(fobj);
		if (fist) {
			 insertBefore(obj,fist)
			}else{
				fobj.appendChild(obj)
			}
	}
	//把创建好的元素插入到指定的父元素的最后
		//obj: 创建好的元素   
		//fobj：父元素
	function appendChild(obj,fobj){
		fobj.appendChild(obj);
	}
	//给同一个事件绑定多个处理程序
	//addEvent(对象，事件，处理程序)
	function addEvent(obj,type,fn){
		if (obj.attachEvent) {
			obj.attachEvent("on"+type,fn)
		}else{
			obj.addEventListener(type,fn,false)
		}
	}
	//删除某个事件中的某个处理程序
	//addEvent(对象，事件，处理程序)
	function removeEvent(obj,type,fn){
		if (obj.detachEvent) {
			obj.detachEvent("on"+type,fn)
		}else{
			obj.removeEventListener(type,fn,false)
		}
	}