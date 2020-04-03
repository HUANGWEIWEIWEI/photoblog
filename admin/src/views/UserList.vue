<template>
  <div>
    <h1>用户列表</h1>
     <el-table :data="users">
        <el-table-column prop="_id" label="ID" width="230"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="account" label="用户账号"></el-table-column>
        <el-table-column prop="pwd" label="用户密码"></el-table-column>
        <el-table-column prop="list" label="头像">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" style="height:3rem;">
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
      <template slot-scope="scope">
        <el-button type="primary" size="small" 
        @click="$router.push(`/users/edit/${scope.row._id}`)">编辑</el-button>
        <el-button type="primary" size="small" 
        @click="remove(scope.row)">删除</el-button>
      </template>

    </el-table-column>
      </el-table>
  </div>
</template>


<script>
export default {
  data(){
    return{
      users:[]
    }
  },
  methods:{
    async fetch(){
      const res=await this.$http.get('rest/users')
      this.users=res.data
    },
    async remove(row){
      this.$confirm(`此操作将永久删除用户"${row.name}", 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
          const res=await this.$http.delete(`rest/users/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        })
    }
  },
  created(){
    this.fetch()
  }
}
</script>