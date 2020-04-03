<template>
<el-container style="height: 100vh; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: RGB(238,241,246)">
    <el-menu router unique-opened :default-active="$router.path">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>内容管理</template>
        <el-menu-item-group>
          <template slot="title">文章</template>
          <el-menu-item index="/articles/create">新建文章</el-menu-item>
          <el-menu-item index="/articles/list">文章列表</el-menu-item>
        </el-menu-item-group>
        <el-submenu  index="1-3" :default-openeds="['/categories/list','/categories/create']">
          <template slot="title" index="1-3-1">分类</template>
          <el-menu-item index="/categories/create">新建分类</el-menu-item>
          <el-menu-item index="/categories/list">分类列表</el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title">标签</template>
          <el-menu-item index="/tags/create">新建标签</el-menu-item>
          <el-menu-item index="/tags/list">标签列表</el-menu-item>
        </el-submenu>
        <el-menu-item-group>
          <template slot="title">精选</template>
          <el-menu-item index="/gifts/create">新建精选</el-menu-item>
          <el-menu-item index="/gifts/list">精选列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>运营管理</template>
        <el-menu-item-group>
          <template slot="title">评论</template>
          <el-menu-item index="2-1">新建评论</el-menu-item>
          <el-menu-item index="2-2">评论列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="留言">
          <el-menu-item index="2-3">新建留言</el-menu-item>
          <el-menu-item index="2-3">留言列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>账号管理</template>
        <el-menu-item-group>
          <template slot="title">用户账号</template>
          <el-menu-item index="/users/create">新建用户</el-menu-item>
          <el-menu-item index="/users/list">用户列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="管理员账号">
          <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
          <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <span>格调映画后台管理系统 || 摄影·摄像·设计</span>
    </el-header>
    
    <el-main>
        <router-view :key="$route.path"></router-view>

    </el-main>
  </el-container>
</el-container>
</template>



<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>