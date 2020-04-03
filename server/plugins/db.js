module.exports=app=>{
    const mongoose=require("mongoose")
    mongoose.connect('mongodb://127.0.0.1:27017/photo-blog',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex: true,
    })

    require('require-all')(__dirname+'/../models')

    
}