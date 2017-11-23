var app = new Vue({
	el: ".resume_preview",
	data: {
		self_info: [
			{label: "姓名：",       	value: "11"},
			{label: "性别：",       	value: "11"},
			{label: "出生年月：",    	value: "11"},
			{label: "参加工作时间：",	value: "11"},
			{label: "户口所在地：",	value: "11"},
			{label: "现居住城市：", 	value: "11"},
			{label: "手机号：", 		value: "11"},
			{label: "邮箱地址：", 		value: "11"},
		],
		job_intention: [
			{label: "工作性质：", value: "做五休二  八小时制"},
			{label: "工作地点：", value: "杭州"},
			{label: "期望薪资：", value: "100000"},
			{label: "职位类别：", value: "互联网"},
			{label: "行业类别：", value: "IT"},
			{label: "工作状态：", value: "兴奋"},
		],
		education:[
			{label: "学校名称：",　value: "清华大学"},
			{label: "专业名称：",	value: "人工智能"},
			{label: "学历/学位：",	value: "博士"},
			{label: "是否统招：",　value: "是"},
			{label: "入学时间：",　value: "2012-09-01"},
			{label: "毕业时间：",　value: "2016-06-25"},
		],
		work_experience: [
			{label: "公司名称：",	value: "中国航空航天"},
			{label: "开始时间：",	value: "2016"},
			{label: "结束时间：",	value: "2017"},
			{label: "行业类别：",	value: "IT"},
			{label: "职位名称：",	value: "前端"},
			{label: "薪金(税前)：",	value: "200000000元"},
		],
		self_evaluation: "",
	}
})