const mongoose = require('mongoose');
const formfields = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phonenumber:{
        type:String,
        require:true
    }
})
const exportingformfields = mongoose.model("contactdetails",formfields)
module.exports =exportingformfields;