const express = require('express');
require('./config')
const Product = require('./product')
const multer = require('multer');

const app = express();

// for serch with multiple field 
app.get("/search/:key",async (req,res)=>{
    let data= await Product.find(
        {
            "$or":[
                { "name": { $regex: req.params.key } },
                { "brand": { $regex: req.params.key } }
            ]
        }
    );
    res.send(data)
})

// File upload 
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, res, xy) {
            xy(null, "mongoose")
        },
        filename: function (req, file, xy) {
            xy(null, file.filename + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file")
app.post("/upload", upload, (req, res) => {
    res.send("file upload")
})
app.listen(5000);