/***
 *Created by Looge on 2017/04/01.
 ***/

//ID获取函数封装
function $(id){
	return document.getElementById(id);
}

//ClassName解决兼容性函数
function getClassName(classname){
	//能力检测
	if(document.getElementsByClassName){
		return document.getElementsByClassName(classname);
	}else{
		//处理不兼容情况，主要是IE6、7、8
		var str = [];//存放满足条件的数组
		var dom = document.getElementsByTagName("*");
		for (var i = 0; i < dom.length; i++) {
			var arr = dom[i].className.split(" ");//处理有多个类名时的情况
			for(var j = 0; j < arr.length; j++){
				if(arr[j] == classname){
					str.push(arr[j]);
				}
			}
		}
		return str;
	}
}//className函数结束

//innerText兼容处理
function setInnerText(element,content){
	//能力检测
	if(typeof element.innerText === "string"){
		element.innerText = content;
	}else{
		element.textContent = content;
	}
}//over

//获取上一个兄弟元素节点兼容性处理
function getPreviousElement(element){
	//能力检测
	if(element.previousElementSibling){
		return element.previousElementSibling;
	}else{
		var el = element.previousSibling;
		while(el && 1 !== el.nodeType){
			el = el.previousSibling;
		}
		return el;
	}
}//over

//获取下一个兄弟元素节点兼容性处理
function getNextElement(element){
	//能力检测
	if(element.nextElementSibling){
		return element.nextElementSibling;
	}else{
		var el = element.nextSibling;
		while(el && 1 !== el.nodeType){
			el = el.nextSibling;
		}
		return el;
	}
}//over

//获取第一个元素节点兼容处理
function getFirstElement(element){
	//能力检测
	if(element.firstElementChild){
		return element.firstElementChild;
	}else{
		var el = element.firstChild;
		while(el && 1 !== el.nodeType){
			el = el.nextSibling;
		}
		return el;
	}
}//over

//获取最后一个元素节点兼容处理
function getLastElement(element){
	//能力检测
	if(element.lastElementChild){
		return element.getLastElement;
	}else{
		var el = element.lastChild;
		while(el && 1 !== el.nodeType){
			el = el.previousSibling;
		}
		return el;
	}
}//over

//获取非行间样式兼容处理
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return obj.getComputedStyle(obj,false)[attr];
	}
}//over
