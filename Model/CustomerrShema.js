const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const CustomerrShema =new Schema({
    "Frstname":String,
    "Lastname":String,
    "Email":String,
    "Telephone":Number,
    "Age":Number,
    "Country":String,
    "Gender":String,
},{timestamps:true});

const User  =  mongoose.model("Coustmer",CustomerrShema);

module.exports=User

