var app = new Vue({
	el: ".indexDiv",
	data: {
		roastImgs : [], 		//轮播图片
		sorts     : [
			{icon:"public/images/syqy.png", name:"所有企业"},
			{icon:"public/images/mrzg.png", name:"每日招工"},
			{icon:"public/images/fxhy.png", name:"分享好友"},
			{icon:"public/images/mrqd.png", name:"每日签到"},
		],						//分类数据
		pages      : 1,
		getDataFlag: true,			//加载数据的开关
		showLoading: false,			//数据加载动画
		hintTxt    : "没有更多数据",	//提示内容
		showHint   : false,			//提示开关
	},
	mounted(){
		var that = this;
		that.$nextTick(function(){
			setTimeout(function(){
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					autoplay: 2000,
					speed:500,
					loop : true,
					
					//滑动之后 触发自动滑动
					onSlideChangeStart: function(swiper){
						swiper.startAutoplay();
	    			},
				});
			},500)
		})
	},
	created(){
		var that = this;
		this.roastImgs = ['public/images/banner.png']
		
		that.showLoading = true;		//加载动画
		//数据请求。。。。
		setTimeout(function(){
			console.log("请求数据")
			that.showLoading = false;	//加载动画
			that.getDataFlag = true;	//加载开关
		}, 1000)
	},
	methods:{
		//分类点击事件
		sortsClick: function(index){
			console.log(index);
			if(index==1){
				location.href = "dialy_recruit.html";
			}
		},
		//招聘详情
		item_detail: function(){
			location.href = "recruit_detail.html"
		},
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
				console.log("加载更多！！")
				if(that.getDataFlag){
					that.getDataFlag = false;	//加载开关
					that.getData(that.pages+=1)
				}
			}
		}
	},
	//自定义
	directive:{
		scroll:{
			bind(el, binding){
				window.onscroll = function(){
					this.downUpload()
				}
			}
		}
	}
})

window.onscroll = function(){
	app	.downUpload()
}
