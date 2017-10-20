var fs=require("fs");
//同步读取&写入
//读取文件
// var readMe=fs.readFileSync('2.readMe.txt',"utf8");
// console.log(readMe);

// //写入文件
// // var readMe=readMe+"hello world!";  //保留以前的
// fs.writeFileSync("writeMe.txt","hello world!");  //同步写入文件 后面的参数可以使字符串 写之前清掉以前的

//******(常用)异步读取&写入(回调函数)
fs.readFile("2.readMe.txt","utf8",function(err,data){ //接受err 如果没有err 会把data传过来 err data可以随便改
	if(err) throw err; //抛出异常 c++语法 但在所有语言中均可以使用 比if严谨
	// console.log(data);
});
	// console.log("123");  //异步会先执行123

	//写入
// fs.writeFile("writeMe.txt","hello!",function(err,data){
// 	if(err) throw err; 
// 	console.log(data);  //undefine 返回 fs.writeFile() 的同步版本。返回 undefined。
// })

//异步读取文件readMe.txt
// 并将读取的文件内容写入到writeMe.txt
// fs.readFile("2.readMe.txt","utf8",function(err,data){ 
// 	if(err) throw err; 
// 	fs.writeFile("writeMe.txt",data);
// });

//删除文件
fs.unlink("2.readMe.txt",function(err,result){
	if(err) throw err; 
    console.log(result);
});
//创建文件夹名为stuff
fs.mkdir("stuff",function(){

});
//删除文件夹
fs.rmdir("stuff",function(){
	
});

