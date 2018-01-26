<template>
    <div class="marque_wrapper" v-if="position==='top'">
        <div class="marquee_title" >
            <span>最新战报</span>
        </div>
        <div class="marquee_box">
            <ul class="marquee_list" :class="{marquee_top:animate}">
                <li v-for="(item, index) in marqueLists">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="marque_wrapper_left" v-else-if="position==='left'">
        <div class="marquee_left">
            <transition-group tag="ul" class="marquee_left_list" :name="position">
                <li v-show="index==count" v-for="(item,index) in marqueLists" :key="index">{{item.name}}
                   
                </li>
            </transition-group>
        </div>
    </div>
</template>
<style type="text/css">
    .marque_wrapper {
        width: 800px;
        height: 50px;
        align-items: center;
        color: #3A3A3A;
        display: flex;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .marque_wrapper_left{
        width: 800px;
        height: 40px;
        text-align: center;
        color: #3A3A3A;
        margin-top:50px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .marque_wrapper_left .marquee_left ul{
        display: block;
        position: relative;
        overflow: hidden;
        width: 800px;
    }


    .marque_wrapper_left .marquee_left li{
        position: absolute;
        width: 400px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    div, ul, li, span, img {
        margin: 0;
        padding: 0;
        display: flex;
        box-sizing: border-box;
    }
    .marquee {
        width: 100%;
        height: 50px;
        align-items: center;
        color: #3A3A3A;
        background-color: #b3effe;
        display: flex;
        box-sizing: border-box;
    }

    .marquee_title {
        padding: 0 20px;
        height: 30px;
        font-size: 14px;
        border-right: 1px solid #d8d8d8;
        align-items: center;
    }

    .marquee_box {
        display: block;
        position: relative;
        width: 60%;
        height: 30px;
        overflow: hidden;
    }

    .marquee_list {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
    }
    .marquee_top {
        transition: all 0.5s;
        margin-top: -30px
    }

    .marquee_list li {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        padding-left: 20px;

    }

    .marquee_list li span {
        padding: 0 2px;

    }

    .red {
        color: #FF0101;
    }
    /* 向左匀速滚动动画 */
    .left-enter-active,
    .left-leave-active{
        transition: all 4s linear;  
    }
    .left-enter{
        transform: translate3d(100%,0,0);
    }
    .left-leave-to{
        transform: translate3d(-100%,0,0);
    }
</style>
<script>
 export default{
    name:"marqueeText",
    props:{
        position:{
            type:String
        },
        title:{
            type:String
        },
        marqueLists:{
            type:Array
        }
        
    },
    data(){
        return{
            animate:false,
            count:0,
            times:2000,
        }
    },
    created(){
        let pos = this.position;
        if(pos == "top"){
            setInterval(this.marqueeText,this.times);
        }else if(pos == "left"){
            setInterval(()=>{this.getText()},4000)
        }
        
    },
    methods:{
        marqueeText(){
            this.animate = true;
            setTimeout(()=>{
                this.marqueLists.push(this.marqueLists[0]);
                this.marqueLists.shift();
                this.animate = false;
            },500)
        },
        getText(){
            let len = this.marqueLists.length;
            console.log(len);
            if(len == 0) return;
            if(this.count == len-1){
                this.count = 0;
            }else{
                this.count++;
            }
            console.log(this.count);
        }
    }

 }
</script>
