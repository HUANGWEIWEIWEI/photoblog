<!-- 首页 -->
<template>
    <div>
        <wbc-nav></wbc-nav>

<div class="">
<el-container>
  <el-main>        
  <div>
     <template>
  <div >
        <swiper :options="swiperOption" >
          <swiper-slide>
        <img class="w-100" src="https://photoblog.oss-cn-shenzhen.aliyuncs.com/4.jpg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="https://photoblog.oss-cn-shenzhen.aliyuncs.com/3.jpg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="https://photoblog.oss-cn-shenzhen.aliyuncs.com/5.jpg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="https://photoblog.oss-cn-shenzhen.aliyuncs.com/1.jpg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="https://photoblog.oss-cn-shenzhen.aliyuncs.com/2.jpg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="https://photoblog.oss-cn-shenzhen.aliyuncs.com/0.jpg" alt>
      </swiper-slide>
      <div class="swiper-pagination pagination-home  px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
  </div>
</template>   
  </div>
</el-main>
</el-container>

<el-container>
  <el-header><div>
    <span>约拍写真</span>
    <el-divider direction="vertical"></el-divider>
    <span>人文纪实</span>
    <el-divider direction="vertical"></el-divider>
    <span>婚礼活动</span>
  </div></el-header>
  <el-main>- P H O T O G R A P H Y -</el-main>
  <el-footer>Contact</el-footer>
</el-container>

<el-container>
  <el-aside width="30%"><div style="margin-top:38px;margin-left:12px;"><img src="../assets/wechat.png"  height="110"/></div></el-aside>
  <el-main>
    <p>图虫ID：_养生男孩</p>
    <p>QQ：1535445275</p>
    <p>Wb：摄影师小豆子</p>
    <p>E-Mail:huangweiapr8@gmail.com</p>
  </el-main>
</el-container>
 </div> 
        <wbc-footer></wbc-footer>





    </div>

</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'


    export default {
        data() { //选项 / 数据
            return {
      swiperOption: {
                //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        //滑动速度
        speed: 800,
   
        pagination: {
          el: ".pagination-home"
        }
      },

    };
        },
        methods: { //事件处理器

        },
        components: { //定义组件
            'wbc-nav':header,



            'wbc-footer':footer
        },
        created() { //生命周期函数

        }
    }    
</script>


<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 0.74;
    border-radius: 0.1538rem;
    background: map-get($colors, "c5");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "a1");
    }
  }
}
</style>


<style>
  .text {
    font-size: 14px;
   
  }

  .item {
    padding: 18px 0;
  }

  /* .box-card {
      margin: 5px auto;
    width: 100%;
    background-color: #fff7f2;
  } */
</style>

<style>
  .el-header, .el-footer {
   background-color: rgb(209, 215, 223);
    color: rgb(97, 81, 81);
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {

    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;

  }
  


</style>