<!-- 首页 -->
<template>
    <div>
        <wbc-nav></wbc-nav>


                <div style="width:86%;margin:0 auto 20px;">
    <m-list-card icon="menu1" title="教程列表" :categories="jchengsCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/ldetails/${jchengs._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(jchengs, i) in category.jchengsList"
          :key="i"
        >
          <span class="text-info">[{{jchengs.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{jchengs.title}}</span>
          <span class="text-grey-1 fs-sm">{{jchengs.creat}}</span>
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

      jchengsCats: [],

    };
  },
  methods: {
    async fetchjchengsCats(){//获取摄影作品分类
    const res=await this.$http.get('jchengs/list')
    this.jchengsCats=res.data
    }
  },
        components: { //定义组件
            'wbc-nav':header,



            'wbc-footer':footer
        },
        created() { //生命周期函数
    this.fetchjchengsCats()
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



