var fs=require("fs");
var myReadStream=fs.createReadStream(__dirname+"/readme.txt","utf8");//文件名/路径 编码格式
// console.log(myReadStream);
myReadStream.on("data",function(sbq){
	console.log("=====================接收sbq=====================")
  console.log(sbq);
})