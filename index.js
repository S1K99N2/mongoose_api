const express=require('express');


const app=express();

app.use(express.json());
app.post("/create",async (req,res)=>{
    let data=Product(req.body);
    let result=await data.save();
    console.log(req.body);
    console.log(result);
    res.send(result)
})