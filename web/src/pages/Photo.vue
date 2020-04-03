<!-- 首页 -->
<template>
  <div>
    <wbc-nav></wbc-nav>
    

    <div style="width:86%;margin:0 auto 20px;">
      <m-list-card icon="menu1" title="作品列表" :categories="photosCats">
        <template #items="{category}">
          <router-link
            tag="div"
            :to="`/pdetails/${photos._id}`"
            class="py-2 fs-lg d-flex"
            v-for="(photos, i) in category.photosList"
            :key="i"
          ><!-- tag把router-link默认到的a改为div标签，to跳转链接 -->
            <span class="text-info">[{{photos.categoryName}}]</span>
            <span class="px-2">|</span>
            <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{photos.title}}</span>
            <span class="text-grey-1 fs-sm">{{photos.creat}}</span>
          </router-link>
        </template>
      </m-list-card>
    </div>
    <div class="ww">
      <wbc-footer></wbc-footer>
    </div>
  </div>
</template>

<script>
import header from "../components/header.vue";
import footer from "../components/footer.vue";

export default {
  data() {
    return {
      photosCats: []
    };
  },
  methods: {
    async fetchPhotosCats() {
      //获取摄影作品分类
      const res = await this.$http.get("photos/list");
      this.photosCats = res.data;
    }
  },
  components: {
    //定义组件
    "wbc-nav": header,

    "wbc-footer": footer
  },
  created() {
    this.fetchPhotosCats();
  }
};
</script>

<style>
.text1 {
  font-size: 13px;
}

.item1 {
  padding: 18px 0;
}

.box-card1 {
  margin: 30px auto;
  width: 84%;
  background-color: #fdfaf7;
}

.ww{
  width: 100%;
  height: 100px;
  padding-bottom: 158px;
  background: #52585a;
  position: absolute;
  bottom: 0;
  left: 0;
    z-index: 999;
}
</style>
