var app = new Vue({
	el: ".education",
	data:{
		school_name      : "", 		//学校名称
		professional_name: "",		//专业名称
		education        : "",		//学历
		Btime            : "",		//开始时间
		Etime            : "",		//结束时间
		school_content   : "",		//在校经历
		educationList    : [
			{name: "小学", val: 1},
			{name: "初中", val: 2},
			{name: "高中", val: 3},
			{name: "大专", val: 4},
			{name: "本科", val: 5},
			{name: "硕士", val: 6},
			{name: "博士", val: 7},
		]
	},
	methods: {
		rightClick: function(){
			console.log("hello666")
		}
	}
})