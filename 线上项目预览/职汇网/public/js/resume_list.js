var app = new Vue({
	el: ".resume_list",
	data: {
		
	},
	methods:{
		resume_edit: function(){
			location.href="resume_edit.html"
		},
		rightClick: function(){
			console.log("hello")
		}
	}
})