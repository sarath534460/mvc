
let usermodel=require("./models/usermodel.js")

let y=async(req,res)=>{
   let name=req.body.name
   let lastname=req.body.lastname
   let mobile=req.body.mobile
   let i=new usermodel.user({name,lastname,mobile})
   let o= await i.save()
   res.json(o)
}

module.exports={y}