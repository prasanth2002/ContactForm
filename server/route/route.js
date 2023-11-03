const express = require("express");
const route = express.Router();
const controller = require('../controller/controller')
const bodyparser = require('body-parser');
const renderfilecalling = require("../service/render");

route.get('/',renderfilecalling.index);
route.get ("/Thankyou",renderfilecalling.Thankyou);

route.use(bodyparser.urlencoded({extended:true}))

route.post('/api/users',controller.create);

module.exports = route; 
