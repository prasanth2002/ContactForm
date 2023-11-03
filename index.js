const express = require("express")
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const path = require('path')
mongoose.connect("mongodb+srv://prasanth:20@database1.spxe3wy.mongodb.net/contactdetails", {}).then((dd) => {
    console.log("mongodb connected")
})
app.set("view engine", "ejs")
app.use(bodyparser.urlencoded({ extended: true }));
app.use (express.static(path.join(__dirname,"public")));
app.use("/", require('./server/route/route'))
app.listen(10000, () => {
    console.log("started running")
})