const mongoose = require("mongoose")

const dbConnection = async()=>{

    await mongoose.connect(process.env.MONGODB_URI)
    console.log(`database is connected on host ${mongoose.connection.host.red}`);
    
}

module.exports = dbConnection