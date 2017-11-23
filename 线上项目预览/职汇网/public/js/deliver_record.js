var app = new Vue({
	el: ".deliver_record",
	data:{
		
	},
	created(){
		
	},
	methods:{
		//招聘详情
		item_detail(){
			location.href = "recruit_detail.html"
		},
		//上拉加载更多
		downUpload(){
			console.log("-------滑动了------")
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			var sH = document.documentElement.clientHeight;
			if(scrollTop + sH >= document.body.scrollHeight+50) {
				console.log("加载更多！！")
			}
		}
	}
});

window.onscroll = function(){
	app	.downUpload()
}