<template>
  <div class="sousuo">
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <p v-for="item in list" :key="item.id" class="pp" @click="to(item.id)">
      {{item.name}}
    </p>
  </div>
</template>
<script>
import { get } from "../utils/ajax";
export default {
  data() {
    return {
      list: [],
      value: ""
    }
  
  },
  methods: {
    onSearch(){
        get("http://localhost:3000/search", {
          params: {
            keywords: this.value,
            limit: 20
          }
        }).then(res => {
          this.list = res.data.result.songs;
          console.log(this.list)
        });
        
    },
    to(index) {
      this.$router.push({name:'bofang',query:{list:index}})
    }
  }
};
</script>
<style scoped>
  
</style>