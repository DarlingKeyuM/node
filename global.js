// console.log("hello nodejs");
// 回调函数 时间
// setTimeout(function(){   //全局
//    console.log("3 seconds have passed!")
// },3000);
// var time=0;
// var timer=setInterval(function(){  //全局
// 	time+=2;
  
//    if(time>5){
//    	clearInterval(timer);
//    }else{
//     console.log(time+" seconds have passed!");
//    }
// },2000);

console.log(__dirname);  //不包含当前文件的路径
console.log(__filename);  //绝对路径
