var app = new Vue({
	el: ".self_info",
	data: {
		Uname    : "",		//姓名
		Usex     : "1",		//性别
		Ubirthday: "",		//出生日期
		UworkTime: "",		//参加工作时间
		province : "",
		city     : "",
		county   : "",
//		UnowAddress: "请填写现居住地",	//现居住地
		Uphone   : "",		//现用手机号
		Uemail   : "",		//常用邮箱
		showAddress: false,	//地址选择弹框
	},
	methods: {
		rightClick: function(){
			console.log("hello")
		},
		choosAddress: function(){
			this.showAddress = true;
		}
	}
})