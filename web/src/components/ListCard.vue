<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div class="nav-item" :class="{active: active === i}"
      v-for="(category, i) in categories" :key="i"
      @click="$refs.list.$swiper.slideTo(i)"><!-- 点击上方可以让swiper滑动到相应到索引值 -->
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>
    <div class="pt-3">
      <!-- vue里面的ID和事件 -->
      <swiper ref="list" :options="{autoHeight: true}"
      @slide-change="() => active = $refs.list.$swiper.realIndex"><!-- 把索引值赋值给active -->
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data(){
    return {
      active: 0
    }
  }
};
</script>

<style>
</style>
