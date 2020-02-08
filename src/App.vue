<template>
  <div id="app">
    <van-tabbar v-model="active">
  <!-- <van-tabbar-item icon="home-o" :to="{name:'tuijian'}">推荐</van-tabbar-item>
  <van-tabbar-item icon="search" :to="{name:'remen'}">热门</van-tabbar-item> -->
  <van-tabbar-item icon="friends-o" :to="{name:'sousuo'}">搜索</van-tabbar-item>
  <van-tabbar-item icon="setting-o" :to="{name:'wode'}">我的</van-tabbar-item>
</van-tabbar>
    <router-view/>
  </div>
</template>
<script>
export default {
   data() {
    return {
      active: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
