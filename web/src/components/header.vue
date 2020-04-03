<!-- 头部公用 -->
<template>
  <div class="head">
    <div class=" topbar bg-b1 py-3 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="40" />
      <div class="px-2 flex-1">
        <div class="text-a3 py-1 fs d-flex">格调映画 | 摄影·摄像·设计</div>
        <div class="text-b3 fs-sm d-flex">Dignified Film | For The Extraordinary Moment</div>
      </div>
    </div>

    <div class="headBack">
      <el-row>
        <el-col >
          <div >
            <el-menu
              
              class="nav jc-around"
              mode="horizontal"
              
              :router="true"
            >
              <el-menu-item index="/Home">首页</el-menu-item>
              <el-menu-item index="/Photo">摄影</el-menu-item>
              <el-menu-item index="/Video">摄像</el-menu-item>
              <el-menu-item index="/Learn">教程</el-menu-item>
              <el-menu-item index="/About">关于</el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </div>

   
  </div>
</template>
<script>
export default {
  data() {
    //选项 / 数据
    return {};
  },

  methods: {
    //事件处理器
  },
  components: {
    //定义组件
  },
  // watch: {
  // 	// 如果路由有变化，会再次执行该方法
  // 	'$route': 'routeChange'
  // },
  created() {
    // 生命周期函数
    // 判断当前页面是否被隐藏
    var that = this;
    var hiddenProperty =
      "hidden" in document
        ? "hidden"
        : "webkitHidden" in document
        ? "webkitHidden"
        : "mozHidden" in document
        ? "mozHidden"
        : null;
    var visibilityChangeEvent = hiddenProperty.replace(
      /hidden/i,
      "visibilitychange"
    );
    var onVisibilityChange = function() {
      if (document[hiddenProperty]) {
        //被隐藏
        document.title = "藏好啦(つд⊂)";
      } else {
        document.title = "被发现啦(*´∇｀*)"; //当前窗口打开
        if (that.$route.path != "/DetailShare") {
          if (localStorage.getItem("userInfo")) {
            that.haslogin = true;
          } else {
            that.haslogin = false;
          }
        }
      }
    };
    document.addEventListener(visibilityChangeEvent, onVisibilityChange);
    // this.routeChange();
  }
};
</script>

<style>
.head{
  width: 100%;

z-index: 999;
}
</style>