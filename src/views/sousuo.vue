<template>
  <div class="dongtai">
    <div class="sousuo"  @click="tdo">
      <van-icon name="search" class="tubiao" />
      <span class="sousuo-span">请输入搜索关键词</span>
    </div>
    <h2>动态</h2>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          class="lbimg"
          src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1952840.jpg?max_age=2592000"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="lbimg"
          src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1954844.jpg?max_age=2592000"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="lbimg"
          src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1952031.jpg?max_age=2592000"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="lbimg"
          src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1952901.jpg?max_age=2592000"
        />
      </van-swipe-item>
    </van-swipe>
    <h3>MV热榜排行</h3>
    <div class="mv" v-for="item in list" :key="item.id" @click="to(item.id)">
      <img :src="item.cover" class="mv-img">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import { get } from "../utils/ajax";
export default {
  name: "sousuo",
  components: {},
  data() {
    return {
      list: []
    };
  },
  created() {
    get("http://localhost:3000/top/mv",{
      params:{
        limit:10,
        offset:1
      }
    }).then(res => {
      this.list = res.data.data;
      // console.log(this.list)
    });
    
  },
  methods: {
     to(index) {
      this.$router.push({name:'mv',query:{id:index}})
    },
    tdo(){
      this.$router.push({ path: "/ss" });
    }
    
  }
};
</script>
<style scoped>
.lbimg {
  width: 90%;
  height: 180px;
}

.mv{width: 80%;
margin: 0 auto 40px;
border: 1px solid #cccccc
}
.mv-img{
  width: 100%
}
.sousuo {
  width: 95.5%;
  height: 35px;
  background: #f1f1f1;
  border-radius: 25px;
  margin: 10px 10px;
  display: flex;
}
.tubiao {
  margin: 10px 0 0 5px;
  font-size: 18px;
}
.sousuo-span {
  margin: 6px 10px;
}
.PP {
  margin-top: 0;
}
</style>
