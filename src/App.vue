<template>
  <div id="app">
   <router-view></router-view>
   <main-tab-bar></main-tab-bar>
   
  </div>
</template>

<script>
import MainTabBar from 'components/context/MainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
   MainTabBar
  }
}
</script>

<style lang='less'>
@import 'assets/css/base.css';
</style>
