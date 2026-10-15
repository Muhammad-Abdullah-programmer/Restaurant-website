const  {addUSer,loginUser,deleteUser} = require("../controller/signUpController")
const express = require("express")
const route = express.Router()


route.post("/adduser", addUSer)
route.post("/loginUser", loginUser)
route.delete("/deluser/:id", deleteUser)

module.exports = route