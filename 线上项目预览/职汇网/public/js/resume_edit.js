var app = new Vue({
	el: ".resume_edit",
	data:{
		list : ["个人信息", "工作经历", "教育背景", "求职意向", "自我评价", "简历名称"]
	},
	mounted: function () {
		this.$nextTick(function () {
			this.imgUploader()
		})
	},
	methods:{
		rightClick: function(){
			console.log("world")
		},
		resume_preview: function(){
			location.href = "resume_preview.html"
		},
		listItem: function(index){
			console.log(index)
			switch (index){
				case 0:
				location.href = "self_info.html"
					break;
				case 1:
				location.href = "work_experience.html"
					break;
				case 2:
				location.href = "education.html"
					break;
				case 3:
				location.href = "job_intension.html"
					break;
				case 4:
				location.href = "self_evaluation.html"
					break;
				case 5:
				location.href = "resume_name.html"
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