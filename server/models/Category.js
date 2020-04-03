const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    name:{type:String},
    parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'},
})

schema.virtual('children',{
    localField:'_id',
    foreignField:'parent',
    justOne:false,
    ref:'Category'
})

//每一个摄影作品的分类再想去关联人像
schema.virtual('photosList',{
    localField:'_id',
    foreignField:'categories',//外键
    justOne:false,
    ref:'Article'
})


module.exports=mongoose.model('Category',schema)