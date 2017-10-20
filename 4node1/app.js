//主要用于处理逻辑
var stuff=require("./module"); //肯定是js文件 是个函数 相当于把module文件里的module.exports里面的东西传过来
//只有module文件里有module.exports 才能用require
console.log(stuff.sbqcounter(["mike","2","3"]));
console.log(stuff.sbqadder(3,5));
console.log(stuff.sbqpi);


