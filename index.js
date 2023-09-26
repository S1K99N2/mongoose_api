// const express = require('express');
// const EventEmitter =require('events');
// const app=express();
// const event=new EventEmitter();

// let count=0;
// event.on("countAPI",()=>{
//     count++;
//     console.log("event called",count);
    
// })

// app.get("/", (req, res) => {
//     res.send("called api")
//     event.emit("countAPI")
// })
// app.get("/user", (req, res) => {
//     res.send("called api")
//     event.emit("countAPI")
// })
// app.get("/update", (req, res) => {
//     res.send("called api")
//     event.emit("countAPI")
// })

// app.listen(5000);


const os =require('os');

// console.log(os.arch());
console.log(os.freemem() / (1024 * 1024 * 1024));
console.log(os.totalmem() / (1024 * 1024 * 1024));
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.userInfo());
