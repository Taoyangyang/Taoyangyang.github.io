var app = new Vue({
	el: ".member",
	data:{
		order_list: [
			{icon: "public/images/mine_wait_pay.png",      name: "待付款"},
			{icon: "public/images/mine_wait_delivery.png", name: "待发货"},
			{icon: "public/images/mine_wait_receive.png",  name: "待收货"},
			{icon: "public/images/mine_wait_comment.png",  name: "待评价"},
			{icon: "public/images/mine_refund.png",        name: "退款/售后"},
		],
		normal_tools: [
			{icon: "public/images/jlbj.png",      name: "编辑简历"},
			{icon: "public/images/tdjl.png",      name: "投递记录"},
			{icon: "public/images/qyrz1.png",     name: "企业认证"},
			{icon: "public/images/jjrrz.png",     name: "经纪人认证"},
			{icon: "public/images/hyzx-shdz.png", name: "收货地址"},
			{icon: "public/images/wdjf.png",      name: "我的积分"},
			{icon: "public/images/wdyj.png",      name: "我的佣金"},
			{icon: "public/images/wdyqm.png",     name: "我的邀请码"},
		],
		getDataFlag: true,			//加载数据的开关
		showLoading: false,			//数据加载动画
		hintTxt    : "没有更多数据",	//提示内容
		showHint   : false,			//提示开关
	},
	mounted: function () {
		this.$nextTick(function () {
			this.imgUploader()
		})
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
	},
	methods:{
		goTool: function(index){
			switch (index){
				case 0:
				location.href = "resume_list.html"
					break;
				case 1:
				location.href = "deliver_record.html"
					break;
				default:
					break;
			}
		},
		//插件图片上传
		imgUploader(){
			var that = this;
			var buttonUp = document.getElementById('btnUp');
		    new AjaxUpload(buttonUp, {
		        action: '',
		        name: 'file',
		        data: {},
		        onSubmit: function (file, ext) {
		            if (!(ext && /^(jpg|jpeg|JPG|JPEG|png)$/.test(ext))) {
		                alert('图片格式不正确,请选择 jpg 格式的文件!', '系统提示');
		                return false;
		            }
					
					//上传动画
					//hstool.load();
		        },
		        onComplete: function (file, response) {
		            //file 本地文件名称，response 服务器端传回的信息
		            // button.text('上传图片(只允许上传JPG格式的图片,大小不得大于150K)');
		            response =JSON.parse(response)
		            console.log(response);
		            if (response.status == 1){
		                //隐藏上传动画
						//hstool.closeLoad();
						var imgSrc = response.data.path;
						that.images.push(imgSrc);
		            }else{
		                alert(response.info);
		            }
		
		        }
		    });
		},
	}
})