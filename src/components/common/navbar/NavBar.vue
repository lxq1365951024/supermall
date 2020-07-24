<template>
  <div class="nav-bar">
    <div class="lf"><slot name='left'></slot></div>
    <div class="center"><slot name='center'></slot></div>
    <div class="rg"><slot name='right'></slot></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang='less' scoped>
.nav-bar{
  height: 44px;
  line-height: 44px;
  display: flex;
  text-align: center;
  .lf,.rg{
    width: 60px;
  }
  .center{
    flex: 1;
  }
}

</style>