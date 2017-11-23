//头部组件
Vue.component('header-com',{
	props: ['has_left', 'header_title', "has_right", "header_right"],
	template: `
			<header class="header_com">
        		<a class="header_left" href="javascript:history.back(-1)">
	            	<div v-if="has_left" class="dt">
	                	<div></div>
	            	</div>
        		</a>
        		<p class="header_title">{{header_title}}</p>
        		<p class="header_right vertical_v">
        			<span v-if="has_right" @click="tik">{{header_right}}</span>  
        		</p>
    		</header>
    	`,
    methods:{
    	tik:function(){
    		this.$emit("right_click")
    	}
    }
});
// 底部导航栏
Vue.component('footer-com',{
	data(){
		return{
			select_indx: 0,
			footer_list: [
			{icon:"public/images/footer_home_normal.png", select_icon:"public/images/footer_home_selected.png", name:"首页"},
//			{icon:"public/images/footer_news_normal.png", select_icon:"public/images/footer_news_selected.png", name:"资讯"},
			{icon:"public/images/footer_company_normal.png", select_icon:"public/images/footer_company_selected.png", name:"积分商城"},
			{icon:"public/images/footer_mine_normal.png", select_icon:"public/images/footer_mine_selected.png", name:"会员中心"}
		],			//底部导航栏
		}
	},
	props: ["Sindex"],
	template: `
		<div class="footer flex_around_v">
			<div v-for="(item,index) in footer_list" @click="item_click(index)" class="footer_item">
				<img :src="select_indx==index ?item.select_icon:item.icon" width="30" height="30"/>
				<p :style="{color: select_indx==index?'#24c5b5':'#333'}">{{item.name}}</p>
			</div>
		</div>
    	`,
    created: function(){
    	this.select_indx = this.Sindex;
    },
    methods:{
    	item_click(index){
    		console.log(index)
    		this.select_indx = index;
    		
    		switch (index){
				case 0:
				location.href = "index.html"
					break;
				case 1:
				location.href = "integral_store.html"
					break;
				default:
				location.href = "member.html"
					break;
			};
    	}
    }
});

//加载动画组件
Vue.component("loading", {
	template: `
		<div class="loading_div">
			<div class="loading_board"></div>
			<img src="public/images/loading_1.gif" width="80"/>
		</div>
    	`,
})
//提示组件
Vue.component("hint", {
	props: ["hint_txt", "show_hint"],
	template: `<div v-if="show_hint" class="hintDiv">
				<div class="hint">{{hint_txt}}</div>
			</div>`,
})