const express=require("express")


const app=express.Router()
app
    .route("/").
        post((req,res)=>{
            const data=req.body;
            let sum=0;
            Object.values(data).forEach((element)=>{
            sum=sum+element;
        })
        res.send("Sum is = "+sum)
        res.end();
    })

app
    .route("/string")
    .post(( req,res,next)=>{
        const data=req.body;
        let sum=0;
        Object.values(data)
            .forEach((element)=>{
                sum=sum+" "+element;
            })
        res.send("Sum is = "+sum)
        res.end();
    })

module.exports=app