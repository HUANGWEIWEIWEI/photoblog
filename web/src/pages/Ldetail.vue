<!-- 首页 -->
<template>
  <div>
    <wbc-nav></wbc-nav>


    <div class="page-article" v-if="model"><!-- 没有model就不渲染这快代码 -->
      <div class="d-flex py-3 px-1 border-bottom">

        <strong class="flex-1 text-a4">{{model.title}}</strong>
        <!-- <div class="text-grey fs-xs">2019-06-19</div> -->
      </div>
      <div v-html="model.body" class="px-4 body"></div>
      <div class="px-3 border-top py-3">
        <div class="d-flex jc-center">
          <i class="iconfont icon-menu1"></i>
          <span class="text-a1 fs-lg ml-1">更多教程</span>
        </div>
        <div class="pt-2">
          <router-link
            class="py-1"
            tag="div"
            :to="`/ldetails/${item._id}`"
            v-for="item in model.related"
            :key="item._id"
          >{{item.title}}</router-link>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import header from "../components/header.vue";

export default {
  props: {
    id: { required: true } //必填
  },
  data() {
    return {
      model: null
    };
  },
  watch: {//监听id，变化后给方法fetch
    id: "fetch"
    // id(){
    //   this.fetch()
    // }
  },
  methods: {
    async fetch() {//
      const res = await this.$http.get(`ldetails/${this.id}`);
      this.model = res.data;
    }
  },
  components: {
    //定义组件
    "wbc-nav": header
  },
  created() {
    //生命周期函数
    this.fetch();
  }
};
</script>

<style lang="scss">
.page-article {
  .icon-Back {
    font-size: 1.6923rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>




