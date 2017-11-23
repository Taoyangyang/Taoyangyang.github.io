var app = new Vue({
	el: ".job_intension",
	data:{
		choosePost  : false,			//选择职位
		province    : "",
		city        : "",
		minMoney    : "",	
		maxMoney    : ""
	},
	methods: {
		rightClick: function(){
			console.log("hello world")
		},
		chooseP: function(){
			this.choosePost = true
		}
	}
})