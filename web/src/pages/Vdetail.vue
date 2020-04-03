<!-- 首页 -->
<template>
  <div>
    <wbc-nav></wbc-nav>

    <div class="page-article" v-if="model">
      <!-- 没有model就不渲染这快代码 -->
      <div class="d-flex py-3 px-1 border-bottom">
        <strong class="flex-1 text-a4">{{model.title}}</strong>
      </div>
      <div v-html="model.body" class="px-4 body"></div>
      <div class="px-3 border-top py-3">
        <div class="d-flex jc-center">
          <i class="iconfont icon-menu1"></i>
          <span class="text-a1 fs-lg ml-1">相关视频</span>
        </div>
        <div class="pt-2">
          <router-link
            class="py-1"
            tag="div"
            :to="`/vdetails/${item._id}`"
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
  watch: {
    //监听id，变化后给方法fetch
    id: "fetch"
    // id(){
    //   this.fetch()
    // }
  },
  methods: {
    async fetch() {
      //
      const res = await this.$http.get(`vdetails/${this.id}`);
      this.model = res.data;
    },
    async changevideo() {//函数给video标签加webkit-playsinline，实现禁用苹果网页视频播放自动全屏
      const cv = document.querySelectorAll("video");
      //遍历页面里所有获取到的video标签并执行需求的事件
      for (var i = 0; i < cv.length; i++) {
        //给页面里每个video标签设置webkit-playsinline属性并赋值
        cv[i].setAttribute("webkit-playsinline", "");
      }
    }
  },
  components: {
    //定义组件
    "wbc-nav": header
  },
  created() {
    //生命周期函数
    this.fetch();
    this.changevideo();
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
    // iframe {
    //   width: 100%;
    //   height: auto;
    // }
    video {
      width: 100%;
      height: auto;
    }
  }
}
</style>




