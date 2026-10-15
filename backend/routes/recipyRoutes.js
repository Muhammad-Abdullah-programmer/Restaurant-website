const {addRecipy,getRecipy,updateRecipy,delRecipy} = require("../controller/recipyController")
const express = require("express")
const route = express.Router()


route.post("/addrecipy", addRecipy)
route.get("/getrecipy", getRecipy)
route.put("/updaterecipy/:id", updateRecipy)
route.delete("/delrecipy/:id", delRecipy)

module.exports = route