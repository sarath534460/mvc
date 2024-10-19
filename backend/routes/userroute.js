let express=require("express")
let app=express();
let usercontroller=require("./controllers/usercontroller.js")
let router=express.Router()

router.post('/test',usercontroller.y())

module.exports=router