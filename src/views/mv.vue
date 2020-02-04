<template>
  <div class="mv">
    <van-nav-bar title="MV" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" />
    <video :src="list.url" controls class="vid"></video>
  </div>
</template>
<script>
import { get } from "../utils/ajax";
export default {
  name: "mv",
  data() {
    return {
      pid: this.$route.query.id,
      list: []
    };
    
  },
  methods: {
    onClickLeft() {
     this.$router.go(-1)
    }
  },
  created() {
    console.log(this.pid)
    get("http://localhost:3000/mv/url", {
      params: { id: this.pid }
    }).then(res => {
      this.list = res.data.data;
    });
  }
};
</script>
<style scoped>
.vid {
  width: 90%;
  margin-top: 200px;
}
</style>