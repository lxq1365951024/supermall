<template>
  <div class="tab-bar-item" @click="ItemClick">
    <div v-if="!isActive"><slot name='item-icon'></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name='item-text'></slot></div>
  </div>
</template>
<script>

export default {
  name:'TabBarItem',
  props:{
    path:String,//传入跳转路径
    activeColor:{//传入的颜色数学
      type:String,
      default:'red'
    }
  },
  data(){
    return{

    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    ItemClick(){
      this.$router.push(this.path)
    }
  }

}
</script>
<style  scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
}

</style>