<template>
  <div class="wrapper" ref="wrapper">
    <div class="context">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'//滚动插件
import PullUp from '@better-scroll/pull-up'//上拉加载
BScroll.use(PullUp)

  export default {
    props:{
      probeType:{
        type:Number,
        default:0
      },
     pullUpLoad:{
       type:Boolean,
       default:false
     }
    },
    data(){
      return{
        scroll:null
      }
    },
    mounted(){
     this.scroll=new BScroll(this.$refs.wrapper,{
       click:true,//滚动内部元素是否可以点击
       probeType:this.probeType,//是否监听滚动
       pullUpLoad:this.pullUpLoad//是否下拉加载
     })
     this.scroll.on('scroll',(p)=>{//监听滚动
      //  console.log(p,this)
        this.$emit('bscroll',p)
     })
     this.scroll.on('pullingUp',()=>{//下拉加载
      //  console.log('上拉加载');
      this.$emit('pullLoad')

     })
    },
    methods:{
      scrollTo(x,y,time=500){//返回指定位置
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){//BScroll.vue--可再次下拉加载
        this.scroll.finishPullUp();
      },
      refresh(){//BScroll.vue刷新
        this.scroll.refresh();
      }
    }
  }
</script>

<style scoped>

</style>