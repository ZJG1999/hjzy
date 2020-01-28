<template>
<div class="da">
  <div class="wd">
    我的音乐馆
  </div>
 <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="i in first" :key="i.targetId">
          <img :src="i.imageUrl" alt  />
        </van-swipe-item>
      </van-swipe>
</div>
</template>
<script>
import axios from "axios";
// import first from "../components/List.vue";

export default {
      name: "wode",
   data() {
    return {
       list: [],
      first: [],
      center: "",
      count: 0,
      activeNames: ["1"],
      isLoading: false,
      active: 0
    }
  },
  created(){
    axios.get("http://localhost:3000/banner").then(res => {
      this.first = [...res.data.banners];
    });
  }
}
</script>
<style  scoped>
img{height: 180px;width: 100%}
.wd{font-size: 20px;font-weight: 800;height: 50px;line-height: 50px}
</style>