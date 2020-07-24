<template>
  <div>
    <nav-bar class="home_nav">
      <div slot='center'>购物节</div>
    </nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#e605fa" >
      <van-swipe-item v-for="(item,index) in banner" :key='index'>
        <a :href="item.link"><img :src="item.image" alt="" v-lazy='item.image'></a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata,getHomeGoos} from 'network/home'
  export default {
    data(){
      return{
        banner:[],
      }
    },
    components:{
      NavBar,
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

</style>