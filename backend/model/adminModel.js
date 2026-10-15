const mongoose = require("mongoose")

const userModel = mongoose.Schema({

  email :  {
        type :String,
        required : true,
        unique : true
    },

    password : {

        required : true,
        type : String,

    }
},

{ timestamps : true}
)

module.exports = mongoose.model("user", userModel)