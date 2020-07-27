<template>
  <div>
    <nav-bar class="home_nav">
      <div slot='center'>购物节</div>
    </nav-bar>
   <Scroll class="context" ref='scroll' :probe-type='3' @bscroll="contextScroll" :pull-up-load='true' @pullLoad='loadMore'>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#e605fa" >
      <van-swipe-item v-for="(item,index) in banner" :key='index'>
        <a :href="item.link"><img :src="item.image" alt="" v-lazy='item.image'></a>
      </van-swipe-item>
    </van-swipe>
    <ul>
      <li>测试数据1</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
      <li>测试数据</li>
    </ul>
   </Scroll>
   <BackTop @click.native="backTop" v-show="isBackTop"></BackTop>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/bscroll/BScroll'
import BackTop from 'components/context/backTop/BackTop'
import {getHomeMultidata,getHomeGoos} from 'network/home'
  export default {
    data(){
      return{
        banner:[],
        isBackTop:false
      }
    },
    components:{
      NavBar,
      Scroll,
      BackTop
    },
    created(){
       getHomeMultidata().then((res)=>{
        //  console.log(res.data);
         let data=res.data;
         this.banner=data.banner.list;
      })
      // getHomeGoos('pop',1).then((res)=>{
      //   console.log(res)
      // })
    },
    methods:{
      backTop(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contextScroll(p){
        // console.log((-p),'=p')
        this.isBackTop = (-p.y)>300
      },
      loadMore(){
        console.log('加载更多');
        setTimeout(() => {
          this.$refs.scroll.finishPullUp();
        }, 2000);
        setTimeout(() => {
          this.$refs.scroll.refresh()
        }, 3000);
        
      }

    }
  }
</script>

<style lang='less' scoped>
.home_nav{
  color: #fff;
  background: @clor;
}
.my-swipe{
  height: 195px;
}
 .my-swipe .van-swipe-item img{
   width: 100%;
  }
.context{
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;

}
</style>