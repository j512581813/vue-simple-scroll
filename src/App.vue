<template>
	<div class="wrapper">
		<marqueeText :marqueLists="obj.marqueList" :position="obj.pos"></marqueeText>
		<marqueeText :marqueLists="obj1.marqueList" :position="obj1.pos"></marqueeText>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				obj:{
					pos:"top",
					marqueList:[
		                {
		                    name: '习近平关心！刚刚，良渚古城遗址正式申报世界遗产'
		                   
		                },
		                {
		                    name: '党中央国务院决定了!在全国开展扫黑除恶专项斗争'
		                },
		                {
		                    name: '新时代的中共全面从严治党 北京两会  新时代新气象',
		                },
		                {
		                    name: '员工患尿毒症辞职5年 公司照发“工资” 暖新闻'
		                }
	            	]
				},
				obj1:{
					pos:"left",
					marqueList:[
		                {
		                    name: '习近平关心！刚刚，良渚古城遗址正式申报世界遗产'
		                   
		                },
		                {
		                    name: '党中央国务院决定了!在全国开展扫黑除恶专项斗争'
		                },
		                {
		                    name: '新时代的中共全面从严治党 北京两会  新时代新气象',
		                },
		                {
		                    name: '员工患尿毒症辞职5年 公司照发“工资” 暖新闻'
		                }
	            	]
				},
			}
		}
	}
</script>