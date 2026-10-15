const userModel = require("../model/adminModel")
const handler = require("express-async-handler")
const bcrypt = require("bcrypt")

const addUSer = handler(async(req,res)=>{

    const {email,password} = req.body

   if(!email || !password){

    res.status(400)
    throw new Error("please fill all fielfs")
   }


   const findUser = await userModel.findOne({email})

   if(findUser){

    res.status(400)
    throw new Error("user already exist")
   }


   const hashedPass = await bcrypt.hash(password,10)


   const createdUSer = await userModel.create({

    email,
    password : hashedPass
   })
   

   res.status(200)
   res.send(createdUSer)



})


const loginUser = handler(async(req,res)=>{

    const {email,password} = req.body

    if(!email || !password){

        res.status(400)
        throw new Error("please fill all inputs")
    }

    const user = await userModel.findOne({email})

    if(!user){

        res.status(404)
        throw new Error("user not found")
    }

    const matchPassword = await bcrypt.compare(password, user.password)


    if(!matchPassword){

        res.status(400)
        throw new Error("email or password not matched")
    }

   

    res.status(200).json({

        message : "login successfully",
        "user" : {

            "email" : user.email
        }
    })
})

// delete user 

const deleteUser = handler(async(req,res)=>{

    const {id} = req.params

    const findUser = await userModel.findByIdAndDelete(id)

    if(!findUser){
        res.status(401)
        throw new Error("user not found")
    }

    res.status(200).json({

        message : "user deleted successfully",
        findUser
    })
})
module.exports = {addUSer,loginUser, deleteUser}
