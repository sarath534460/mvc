
const mongoose=require("mongoose")
const carSchema = new mongoose.Schema({  // create schema  means crete the blueprint for variables
  name:String,
  lastname: String,
  mobile: String,
});

let user=mongoose.model('Asd',carSchema) //model for user collec and schema placed inside the user collec


module.exports={user};
