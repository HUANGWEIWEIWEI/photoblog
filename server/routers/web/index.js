module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    // const Article=require('../../models/Article')
    //const Category=require('../../models/Category')
    const Article = mongoose.model('Article')
    const Tag = mongoose.model('Tag')
    const Category = mongoose.model('Category')

    // 摄影作品列表接口（不适用）
    // router.get('/photos/list',async(req,res)=>{//以分类为主体，关联摄影作品去把数据调出来
    //     const parent=await Category.findOne({
    //         name:'摄影作品'
    //     }).populate({
    //         path:'children',//关联children的photosList
    //         populate:{
    //             path:'photosList'
    //         }
    //     }).lean()//列出子数据
    //     res.send(parent)

    // 1.摄影作品列表接口
    router.get('/photos/list', async (req, res) => {
        const parent = await Category.findOne({ //先找到顶级分类
            name: '摄影作品'
        })
        const cats = await Category.aggregate([ //aggregate聚合查询
            {
                $match: {
                    parent: parent._id
                }
            }, //条件查询
            {
                $lookup: { //可以以'摄影作品'为主体，去查另外一个集合
                    from: 'articles', //关联的集合
                    localField: '_id', //本地键
                    foreignField: 'categories', //对应的外地键
                    as: 'photosList' //起个名字
                }
            },
            { //定义取几条数据
                $addFields: {
                    photosList: {
                        $slice: ['$photosList', 5]
                    }

                }
            }
        ])

        const subCats = cats.map(v => v._id)
        cats.unshift({ //写推荐列表
            name: '推荐',
            photosList: await Article.find().where({
                categories: {
                    $in: subCats
                }
            }).populate('categories').limit(5).lean()
        })

        cats.map(cat => {
            cat.photosList.map(photos => {
                // photos.categoryName=cat.name
                photos.categoryName = cat.name === '推荐' ? photos.categories.name : cat.name
                return photos
            })
            return cat
        })
        res.send(cats)
    })




    // 2.摄像作品列表接口
    router.get('/videos/list', async (req, res) => {
        const parent = await Category.findOne({ //先找到顶级分类
            name: '摄像作品'
        })
        const cats = await Category.aggregate([ //aggregate聚合查询
            {
                $match: {
                    parent: parent._id
                }
            }, //条件查询
            {
                $lookup: { //可以以'摄影作品'为主体，去查另外一个集合
                    from: 'articles', //关联的集合
                    localField: '_id', //本地键
                    foreignField: 'categories', //对应的外地键
                    as: 'videosList' //起个名字
                }
            },
            { //定义取几条数据
                $addFields: {
                    videosList: {
                        $slice: ['$videosList', 5]
                    }

                }
            }
        ])

        const subCats = cats.map(v => v._id)
        cats.unshift({ //写推荐列表
            name: '推荐',
            videosList: await Article.find().where({
                categories: {
                    $in: subCats
                }
            }).populate('categories').limit(5).lean()
        })

        cats.map(cat => {
            cat.videosList.map(videos => {
                // videos.categoryName=cat.name
                videos.categoryName = cat.name === '推荐' ? videos.categories.name : cat.name
                return videos
            })
            return cat
        })
        res.send(cats)
    })


    // 3.个人教程列表接口
    router.get('/jchengs/list', async (req, res) => {
        const parent = await Category.findOne({ //先找到顶级分类
            name: '个人教程'
        })
        const cats = await Category.aggregate([ //aggregate聚合查询
            {
                $match: {
                    parent: parent._id
                }
            }, //条件查询
            {
                $lookup: { //可以以'摄影作品'为主体，去查另外一个集合
                    from: 'articles', //关联的集合
                    localField: '_id', //本地键
                    foreignField: 'categories', //对应的外地键
                    as: 'jchengsList' //起个名字
                }
            },
            { //定义取几条数据
                $addFields: {
                    jchengsList: {
                        $slice: ['$jchengsList', 5]
                    }

                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '推荐',
            jchengsList: await Article.find().where({
                categories: {
                    $in: subCats
                }
            }).populate('categories').limit(5).lean()
        })

        cats.map(cat => {
            cat.jchengsList.map(jchengs => {
                // jchengs.categoryName=cat.name
                jchengs.categoryName = cat.name === '推荐' ? jchengs.categories.name : cat.name
                return jchengs
            })
            return cat
        })
        res.send(cats)
    })


    // 4.摄影作品详情接口
    router.get('/pdetails/:id', async (req, res) => { //把路由传过来的id参数，用来找对应的文章数据
        const data = await Article.findById(req.params.id).lean()
        data.related = await Article.find().where({
            categories: {
                $in: data.categories
            }
        }).limit(5)
        res.send(data)
    })

    // 5.摄像作品详情接口
    router.get('/vdetails/:id', async (req, res) => { //把路由传过来的id参数，用来找对应的文章数据
        const data = await Article.findById(req.params.id).lean()
        data.related = await Article.find().where({
            categories: {
                $in: data.categories
            }
        }).limit(5)
        res.send(data)
    })

    // 6.个人教程详情接口
    router.get('/ldetails/:id', async (req, res) => { //把路由传过来的id参数，用来找对应的文章数据
        const data = await Article.findById(req.params.id).lean()
        data.related = await Article.find().where({
            categories: {
                $in: data.categories
            }
        }).limit(5)
        res.send(data)
    })



    app.use('/web/api', router)


}