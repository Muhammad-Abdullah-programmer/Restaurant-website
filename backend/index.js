const express = require("express")
const dbConnection = require("./config/db")
const app = express()
require("dotenv").config()
require("nodemon")
require("colors")
const errorHandler = require("./middleware/errorMiddleware")
const route  = require("./routes/userRoutes")
const routes = require("./routes/recipyRoutes")
const cors = require("cors")
dbConnection()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use("/api", route,routes)

app.use(errorHandler)
app.listen(process.env.PORT, ()=>{

    console.log(`server is runing on port ${process.env.PORT.blue}`);
    
})






