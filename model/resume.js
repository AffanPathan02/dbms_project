const mongoose =require('mongoose')

const resumeSchema = new mongoose.Schema({
    email_id:{
        type:String,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    qualify:{
        type:String,
        required:true,
        trim:true
    },
    skills:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Resume',resumeSchema)