<!-- 首页 -->
<template >
    <div class="bb">
         <wbc-nav></wbc-nav>

    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img class="w-100" src="https://photoblog.oss-cn-shenzhen.aliyuncs.com/k2.jpg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="https://photoblog.oss-cn-shenzhen.aliyuncs.com/k3.jpg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="https://photoblog.oss-cn-shenzhen.aliyuncs.com/k0.jpg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="https://photoblog.oss-cn-shenzhen.aliyuncs.com/k1.jpg" alt>
      </swiper-slide>
      <div class="swiper-pagination pagination-about  px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->




       <div class="hhh" >
         
  <el-timeline >
        <el-timeline-item timestamp="2020年3月" placement="top">
      <el-card>
        <h4>个人摄影博客开发</h4>
        <p>受疫情的影响单子都延期了，宅家的这段时间对AE相关插件进行了更深入的学习，又把去年实训没搞太懂的前端又学了一遍，然后搭起这个网站，之前用Wordpress套了一个，但我不想用模版感觉没学到什么东西，于是各种自学，然后现学现搭了一个基于vue+node.js+mongodb的个人摄影博客，期间踩了很多坑，但所幸真的做出来并部署上线，做的功能不是很完善，代码写得很乱，毕竟第一次做，技术都跟不上我的审美哈哈哈，以后技术长进了有时间会重写。</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2020年1月" placement="top">
      <el-card>
        <h4>独立摄影师</h4>
        <p>这段时间接了很多婚礼、约拍和各种活动拍摄，平均下来每月能有5k的收入。我的各项活动也越来越脱离原来的公司了，但有活照接。有的时候连拍几天真的很累，但空闲的时间又很舒服，我蛮喜欢这种时而自由时而充实的生活。</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019年7月" placement="top">
      <el-card>
        <h4>北京之行</h4>
        <p>前往北京实训，学习前端开发，在这段时间也拍了许多东西，也零零散散接了几单，但不是很多，毕竟刚去北京都不认识几个人。然后因为这次的北京之行也见识到了许多东西，那种机会遍地却又有点无能为力的感觉。</p>
      </el-card>
    </el-timeline-item>
        <el-timeline-item timestamp="2019年5月" placement="top">
      <el-card>
        <h4>终于拥有了自己的相机</h4>
        <p>购入了佳能6d2与魔爪air2，镜头也相继买了许多，17-40mmf/4.0，24mmf/2.8，35mmf/1.4，50mmf/1.8，闪光灯独脚架麦克风什么的也都安排上了，然后因为有相机了就开始拍了很多东西接了很多单，技术也提升了许多。</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018年5月" placement="top">
      <el-card>
        <h4>公司运营</h4>
        <p>2018年夏季接手十余个班级的毕业季活动，由大学校内市场逐步走向整个南昌高校，承接业务也逐步拓宽，往宣传片，婚庆，活动策划方向发展。哈哈看势头良好于是我又注资入了8%股份。</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2017年12月" placement="top">
      <el-card>
        <h4>与朋友们成立影视公司</h4>
        <p>玩得好的朋友们提议做公司，然后还缺技术人员，我以技术入2%股。</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2017年4月" placement="top">
      <el-card>
        <h3>第一次接触相机</h3>
        <p>此前我超喜欢剪视频做后期，机缘巧合下开始和志同道合的朋友们在大学里组建并管理摄影社团，也因此第一次有机会接触相机和许多摄影设备，这段时间里也自学了好多东西。</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>


    </div>
</template>

<script>
import header from '../components/header.vue'


    export default {
        data() { //选项 / 数据
            return {
      swiperOption: {
   
        pagination: {
          el: ".pagination-about"
        }
      },

    };
        },
        methods: { //事件处理器

        },
        components: { //定义组件
                    'wbc-nav':header,


        },
        created() { //生命周期函数

        }
    }    
</script>


<style>
.bb{
  background-color: #464c4e;
}


    .hhh{
      
        width: 85%;
        margin: 40px auto 0;
        padding-bottom: 80px;
        /* position: relative;
margin-top: 40px;
        left: 28px; */
    }
    
</style>


<style lang="scss">
@import "../assets/scss/variables";
.pagination-about {
  .swiper-pagination-bullet {

    background: map-get($colors, "c5");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "b3");
    }
  }
}
</style>