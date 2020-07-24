<template>
  <div id='tab-bar'>
   <slot></slot>
  </div>
</template>
<script>
export default {
  name:'TabBar',
  data(){
    return{

    }
  },
  components:{
    
  }
}
</script>
<style >
#tab-bar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  width: 100%;
  height: 49px;
  display: flex;
  /* text-align: center; */
  /* justify-content: space-between;
  align-items: center; */
  box-shadow: -2px 1px 1px rgb(235, 7, 7);
}

</style>