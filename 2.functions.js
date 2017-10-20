//在nodejs中经常使用函数表达式

//右(值)左(变量)法则

  //变量比下面的执行快(函数表达式比正常表达式执行速度快)  已经赋值给sayHi
//匿名函数 (函数表达式)
var sayHi1=function(){
	console.log("hello Ann");
}
//正常函数
function sayHi2(){
	console.log("Hello");
}

 
// sayHi();

function callFunction(foo){
  foo();
}
callFunction(sayHi2);