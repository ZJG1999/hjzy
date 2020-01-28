<template>
  <div>
    <van-nav-bar title="音乐" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="share
" slot="right"  style="font-size:20px"/>
    </van-nav-bar>
    <div id="bobo">
    <h3>歌曲</h3>
    <h1>{{mingzi}}</h1>
      <h4><span style="color:#000">演唱：</span>{{scsc}}</h4>
      <img :src="fuck" alt id="tup" class="an" />
      <audio :src="gegg" controls="controls" autoplay></audio>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "bofang",
  data() {
    return {
      show: false,
      value: "",
      center: "",
      fuck: "",
      scsc: "",
      gegg: "",
      mingzi:"",
      list: []
    };
  },
  mounted() {
    const song = this.$route.query.list;
    console.log(song);
    axios.get("http://localhost:3000/song/url?id=" + song).then(res => {
      // console.log(res.data.data);
      this.gegg = res.data.data[0].url;
      axios.get("http://localhost:3000/song/detail?ids="+song  ).then(res => {
        console.log(res.data.songs[0].name);
        this.fuck = res.data.songs[0].al.picUrl;
        this.scsc = res.data.songs[0].ar[0].name;
        this.mingzi = res.data.songs[0].name;
      });
    });
  },
  methods: {
    onClickLeft() {
     this.$router.go(-1)
    }
  }
};
</script>
<style  scoped>
#bobo {
  position: fixed;
  bottom: 50px;
  margin-left: 1%;
}
#tup {
  height: 360px;
  margin-bottom:40px;
  border-radius: 50%;
}
.demo {
  text-align: center;

  margin-top: 100px;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

.an {
  -webkit-transform: rotate(360deg);

  animation: rotation 10s linear infinite;

  -moz-animation: rotation 10s linear infinite;

  -webkit-animation: rotation 10s linear infinite;

  -o-animation: rotation 10s linear infinite;
}
h4 {
  color: #ccc;
}
body{
  background-color: #ccc
}
#bobo span{color: #ccc}
</style>