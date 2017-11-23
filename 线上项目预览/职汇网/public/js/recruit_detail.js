var app = new Vue({
	el: ".recruit_detail",
	data:{
		roastImgs : [], 		//roasting
	},
	mounted(){
		var that = this;
		that.$nextTick(()=>{
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				autoplay: 2000,
				speed:500,
				loop : true,
			});
		})
	},
	created(){
		this.roastImgs = ['public/images/banner.png']
	},
	methods:{
		//submit_resume
		submit_resume(){
			console.log("submit")
		}
	}
})