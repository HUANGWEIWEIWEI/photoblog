<!-- 首页 -->
<template>
    <div>
        <wbc-nav></wbc-nav>

        <div style="width:86%;margin:0 auto 20px;">
    <m-list-card icon="menu1" title="视频列表" :categories="videosCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/vdetails/${videos._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(videos, i) in category.videosList"
          :key="i"
        >
          <span class="text-info">[{{videos.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{videos.title}}</span>
          <!-- <span class="text-grey-1 fs-sm">{{videos.tags}}</span> -->
        </router-link>
      </template>
    </m-list-card>
</div>

       
<div class="ww">
        <wbc-footer></wbc-footer></div>
    </div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'

    export default {
data() {
    return {

      videosCats: [],

    };
  },
  methods: {
    async fetchvideosCats(){//获取摄像作品分类
    const res=await this.$http.get('videos/list')
    this.videosCats=res.data
    }
  },
        components: { //定义组件
            'wbc-nav':header,


            'wbc-footer':footer
        },
        created() { //生命周期函数
    this.fetchvideosCats()
        }
    }    
</script>

<style>
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

