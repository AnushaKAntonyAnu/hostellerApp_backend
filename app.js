const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {addhosteller, hostellermodel}=require("./models/addhosteller")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://anusha:anusha13@cluster0.hyxpaoy.mongodb.net/hostellerDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let hosteller=new hostellermodel(input)
    hosteller.save()
    res.json({"status":"success"})
})

app.post("/view",(req,res)=>{
    hostellermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/search",(req,res)=>{
    let input=req.body
    hostellermodel.find(input).then(
     (data)=>{
         res.json(data)
     }
    ).catch(
     (error)=>{
         res.json(error)
     }
    )
 })

app.post("/delete",(req,res)=>{
    res.send("delete")
})


app.listen(8080,()=>{
    console.log("server started")
})