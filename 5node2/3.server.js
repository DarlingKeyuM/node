//搭建服务器 在这里写东西之后要重启服务器 没有用到会话层
var http = require("http"); //引入HTTP模块 返回一个对象(前面的对象名字http是随便起的名字)
var server = http.createServer(function(req,res){ //调用对象的方法 回到函数  在浏览器输入127.0.0.1:3000 触发回调函数  req res实例化好的,直接调用就好
   console.log("客户端和服务器已经建立通讯" + req.url);
   res.writeHead(200,{"Content-type":"text/plain"});  //响应头文件 有了它就可以不仅只是返回数据 可以是HTML,json数据 页面等
   //服务器给客户端返回数据/图标
   res.end("nihao");  
});
server.listen(3000,"127.0.0.1"); //监听本机端口号 ip地址 local地址
console.log("server is running...");