<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories">
          <el-option v-for="item in categories" 
          :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item   label="选择标签" >
        <el-select   v-model="model.tags" multiple>
          <el-option   v-for="item in tags" 
          :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
         <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">

        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded">
</vue-editor>

  <!-- <quill-editor
    ref="myQuillEditor"
    v-model="model.body"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
  /> -->
       
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

 import { VueEditor } from "vue2-editor";//引入富文本编辑器，这里是import解构的写法

// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

// import { quillEditor } from 'vue-quill-editor';

  // import Quill from 'quill'



export default {
  props:{
    id:{}
  },
  components: {
    VueEditor
    // quillEditor
  },
  data(){
    return{
      model:{},
      categories:[],
      tags:[],

      // editorOption: {
      //     // Some Quill options...
      //   },
    }
  },
  methods:{

    // onEditorBlur(quill) {
    //     console.log('editor blur!', quill)
    //   },
    //   onEditorFocus(quill) {
    //     console.log('editor focus!', quill)
    //   },
    //   onEditorReady(quill) {
    //     console.log('editor ready!', quill)
    //   },
    //   onEditorChange({ quill, html, text }) {
    //     console.log('editor change!', quill, html, text)
    //     this.content = html
    //   },



    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);
      const res=await this.$http.post('upload',formData)
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
          resetUploader();
    },
  
    async save(){
      let res
      if(this.id){
        res = await this.$http.put(`rest/articles/${this.id}`,this.model)
      }else{
        res = await this.$http.post('rest/articles',this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type:'success',
        message:'保存成功'
      })
    },
    async fetch(){
      const res=await this.$http.get(`rest/articles/${this.id}`)
      this.model=res.data
    },
    async fetchCategories(){
      const res=await this.$http.get(`rest/categories`)
      this.categories=res.data
    },    
        async fetchTags(){
      const res=await this.$http.get(`rest/tags`)
      this.tags=res.data
    }, 
  },

  // computed: {
  //     editor() {
  //       return this.$refs.myQuillEditor.quill
  //     }
  //   },
    // mounted() {
    //   console.log('this is current quill instance object', this.editor)
    // },



  created(){
    this.fetchCategories();
    this.fetchTags();
    this.id && this.fetch()
  }
}
</script>