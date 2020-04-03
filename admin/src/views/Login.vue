<template>
<div class="loginb">
  <div class="login-container">
    <el-card header="格调映画后台管理系统登录" class="login-card" >
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.account" class="inputb"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.pwd" class="inputb"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
        
      </el-form>
    </el-card>
  </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      model: {}
    }
  },
  methods: {
     async login(){
      const res = await this.$http.post('login',this.model)
      localStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
          type: 'success',
          message: '登录成功'
          })
    //   {
    //   const res = await this.$http.post('login', this.model)
    //   // sessionStorage.token = res.data.token
    //   localStorage.token = res.data.token
    //   this.$router.push('/')
    //   this.$message({
    //     type: 'success',
    //     message: '登录成功'
    //   })
    }
  }
}
</script>

<style>
.login-card{
  width: 20rem;
  margin: 5rem auto;
  background-color: rgb(255, 255, 255,0.3);



}
.login-card{
    text-align: center;
    color:rgb(232, 234, 255);
}

.loginb{
  position: absolute;
				top: 0;
width: 100%;
  height: 100vh;
  background-image: linear-gradient(
					45deg,
					#6e8360,
					#322f61
				); /*设置颜色渐变 方向(0deg垂直向上) 起点颜色 终点颜色*/
				transition: 0.4s; /*过度效果  property duration timing-function delay 默认属性:all 0 ease 0*/
			
}

.inputb{
    opacity: 0.4;
}
</style>