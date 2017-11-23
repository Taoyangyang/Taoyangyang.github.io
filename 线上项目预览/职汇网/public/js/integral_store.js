var app = new Vue({
	el: ".integral_store",
	data:{
		getDataFlag: true,			//加载数据的开关
		showLoading: false,			//数据加载动画
		hintTxt    : "没有更多数据",	//提示内容
		showHint   : false,			//提示开关
	},
	created: function(){
		var that = this;
		if(that.getDataFlag){
			that.showLoading = true;		//加载动画
			that.getDataFlag = false;		//加载开关
			//数据请求。。。。
			setTimeout(function(){
				console.log("请求数据")
				that.showLoading = false;	//加载动画
				that.getDataFlag = true;	//加载开关
			}, 1000)
		}
	}
})