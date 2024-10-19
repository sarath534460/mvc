const bodyParser = require("body-parser")
const express=require("express")
let routerphase = require('./routes/userroute.js');
let app=express()
app.use(bodyParser.json())

let mongoose=require("mongoose")

var urii="mongodb+srv://sarath:mongodb@sarath.pwemxqm.mongodb.net/fruitbasket?retryWrites=true&w=majority";

mongoose.connect(urii, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected mongoose'))
.catch((err) => console.error('Could not connect to MongoDB', err));

app.use('/user',routerphase)

app.listen(786,()=>{
    console.log("listening on port 786")
})