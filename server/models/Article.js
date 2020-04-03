const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    title:{type:String},
    create:{type:String},
    categories:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'},
    tags:[{type:mongoose.SchemaTypes.ObjectId,ref:'Tag'}],
    body:{type:String},
    meta:{type:Number},//点赞
    comment:{type:mongoose.SchemaTypes.ObjectId,ref:'Comment'},

})

module.exports=mongoose.model('Article',schema)