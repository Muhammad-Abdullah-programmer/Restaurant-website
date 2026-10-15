const mongoose = require("mongoose")

const recipySchema = mongoose.Schema({

 title : {
    type : String,
    required : true
 },

 des : {

    type : String,
    required : true
 },

 rating : {

    type : Number,
    required : true
 },

 reviews :{
    type : Number,
    required : true
 },

 picture : {

    required : true,
    type : String
 }
},
    {timestamps : true}
)

module.exports = mongoose.model("recipy", recipySchema)