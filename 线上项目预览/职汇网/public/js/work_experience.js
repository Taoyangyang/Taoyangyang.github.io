var app = new Vue({
	el: ".work_experience",
	data: {
		choosePost  : false,			//选择职位
		job_name    : "",				//职位名称
		company_name: "",				//公司名称
		Btime       : "",				//开始时间
		Etime       : "",				//结束时间
		job_content : "",				//工作内容
	},
	methods:{
		rightClick: function(){
			console.log("hello")
		},
		chooseP: function(){
			this.choosePost = true
		}
	}
})