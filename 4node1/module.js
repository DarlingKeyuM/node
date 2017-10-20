//把app.js里的以下文件抽离出来 
var counter=function(arr){
	return `数组中拥有${arr.length}个元素`;
}
// console.log(counter(["mike","2","3"]));
var adder=function(a,b){
  return `两个数的和为${a+b}`;
}
var pi=3.142;
//只有使用module.exports之后,其他文件才可以引用
// module.exports.sbqcounter=counter;
// module.exports.sbqadder=adder;
// module.exports.sbqpi=pi;

//Module Patterns 项目模块化 高内聚 低耦合
module.exports={     //有这个才能有app里的require
	sbqcounter:counter,//属性
	sbqadder:adder,
	sbqpi:pi
}
