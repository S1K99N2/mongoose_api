const express=require('express');
require('./config')
const Product=require('./product');

const app=express();

app.use(express.json()); //for converting string data
app.post("/",async (req,res)=>{
    let data = new Product(req.body);
    let result= await data.save();
    console.log(req.body);
    console.log(result);
    res.send(result)
})
app.listen(5000);