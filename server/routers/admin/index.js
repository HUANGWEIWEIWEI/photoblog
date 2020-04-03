module.exports = app => {
  const express = require('express')
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const router = express.Router({
    mergeParams: true
  })

  // 创建资源
  router.post('', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 更新资源
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 删除资源
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  // 资源列表
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })
  // 资源详情
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  //服务端登录校验中间件
  const authMiddleware = require('../../middleware/auth')
  const resourceMiddleware = require('../../middleware/resource')
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)


  const multer = require('multer')
  const upload = multer({
    dest: __dirname + '/../../uploads'
  })

  // 使用阿里云OSS云存储存放上传文件
  // const multer = require('multer')
  // const MAO = require('multer-aliyun-oss');
  // const upload = multer({
  //   // dest: __dirname + '/../../uploads',
  //   storage: MAO({
  //     config: {
  //       region: '',
  //       accessKeyId: '',
  //       accessKeySecret: '',
  //       bucket: ''
  //     }
  //   })
  // })

    


  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file

    //把这个图片地址拼出来返回给前台
    // file.url = `huangweiphoto.cn/uploads/${file.filename}`
    file.url = `http://localhost:3000/uploads/${file.filename}`

    res.send(file)
  })


  app.post('/admin/api/login', async (req, res) => {

    const {
      account,
      pwd
    } = req.body
    // 1.根据用户名找用户
    const AdminUser = require('../../models/AdminUser')
    const adminuser = await AdminUser.findOne({
      account: account
    }).select('+pwd')
    assert(adminuser, 422, '用户不存在')
    // 2.校验密码
    const isValid = require('bcrypt').compareSync(pwd, adminuser.pwd)
    assert(isValid, 422, '密码错误')
    // 3.返回token
    const token = jwt.sign({
      id: adminuser._id
    }, app.get('secret'))
    res.send({
      token
    })
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    // console.log(err)
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}