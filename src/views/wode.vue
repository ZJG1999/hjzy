<template>
<div class="da">
  <div class="wd">
    我的音乐馆
  </div>
  <van-notice-bar
        mode="closeable"
      >蔡徐坤带着小姨子跑了！！ 蔡徐坤带着小姨子跑了！！ 蔡徐坤带着小姨子跑了！！ 蔡徐坤带着小姨子跑了！！ 蔡徐坤带着小姨子跑了！！</van-notice-bar>
 <van-swipe :autoplay="3000" indicator-color="white" style="margin-top:20px">
        <van-swipe-item v-for="i in first" :key="i.targetId">
          <img :src="i.imageUrl" alt  />
        </van-swipe-item>
      </van-swipe>
       <van-tag plain size="large" class="biaoqian">你一定听过</van-tag>
      <van-tag plain type="primary" size="large" class="biaoqian">猜你喜欢</van-tag>

       <div class="gedan">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="我的歌单" class="fuzuo">
            <ul>
              <li v-for="i in center" :key="i.id" class="lili" @click="bofang(i.id)">
                  <img :src="i.al.picUrl" alt style="height:55px;margin-top:8px;width:55px" />
                  <span style="width:100%;font-size:13px">{{i.name}}</span>
                  <span id="yanchang">演唱者：{{i.ar[0].name}}</span>
              </li>
            </ul>
          </van-collapse-item>
          <van-collapse-item title="我喜欢的" class="fuzuo">

          </van-collapse-item>
          <van-collapse-item title="跑步听" class="fuzuo">内容</van-collapse-item>
          <van-collapse-item title="鸡你太美" class="fuzuo"></van-collapse-item>
        </van-collapse>
      </div>
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
    axios.get("http://localhost:3000/artist/top/song?id=6452").then(res => {
      //  console.log(res.data.songs)
      this.center = res.data.songs;
    });
  },
  methods:{
    bofang(index){
      
      this.$router.push({
         path: "/bofang",
        name:"bofang",
        query:{
          list:index
        }
      })
console.log(index)
    },
  }
}
</script>
<style  scoped>
img{height: 180px;width: 90%}
.wd{font-size: 20px;font-weight: 800;height: 50px;line-height: 50px}
.fuzuo {
  height: 100%;
  width: 100%;
  background: #1989fa;
}
.lili {
  display: flex;
  margin-top: 1px;
  align-items: center;
  border: 1px solid;
}
</style>