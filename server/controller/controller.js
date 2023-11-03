const modelfile = require('../model/model');

exports.create =(req,res) =>{
    const data =new modelfile({
        name:req.body.name,
        email:req.body.email,
        phonenumber:req.body.phonenumber
    })
    data.save().then((ss) =>{
        console.log(ss);
        res.redirect('/Thankyou')
    })
}