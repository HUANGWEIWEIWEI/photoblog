<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}用户</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="用户昵称">
        <el-input v-model="model.name"></el-input> 
      </el-form-item>
      <el-form-item label="用户账号">
        <el-input v-model="model.account"></el-input>
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input v-model="model.pwd"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.avatar" :src="model.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    afterUpload(res){
      this.$set(this.model,'avatar',res.url)//表示用vue的显示赋值，属性值依次为赋值主体、赋值属性、后端返回的数据
      //this.model.icon=res.url如果用这行代码会有数据的一个响应式的问题
      //之前没定义这个属性所以可能会赋值不上
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/users/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/users", this.model);
      }
      this.$router.push("/users/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/users/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

