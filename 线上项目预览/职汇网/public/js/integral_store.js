var app = new Vue({
	el: ".integral_store",
	data:{
		pages      : 1,
		getDataFlag: true,			//加载数据的开关
		showLoading: false,			//数据加载动画
		hintTxt    : "没有更多数据",	//提示内容
		showHint   : false,			//提示开关
	},
	created: function(){
		var that = this;
		that.showLoading = true;		//加载动画
		//数据请求。。。。
		setTimeout(function(){
			console.log("请求数据")
			that.showLoading = false;	//加载动画
			that.getDataFlag = true;	//加载开关
		}, 1000)
	},
	methods: {
		getData: function(page){
			var that = this;
			that.showLoading = true;	//加载动画
			
			axios.get("index.php?g=diapp&m=activity&a=index_api&wxref=mp.weixin.qq.com", {
				params: {
					page: page
				}
			}).then(function(res){
				console.log(res)
				that.showLoading = false;	//加载动画
				that.getDataFlag = true;	//加载开关
			})
		},
		//上拉加载更多
		downUpload(){
			console.log("-------滑动了------")
			var that = this;
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			var sH = document.documentElement.clientHeight;
			if(scrollTop + sH >= document.body.scrollHeight) {
				if(that.getDataFlag){
					console.log("加载更多！！")
					that.getDataFlag = false;	//加载开关
					that.getData(that.pages+=1)
				}
			}
		}
	}
})

window.onscroll = function(){
	app.downUpload()
}