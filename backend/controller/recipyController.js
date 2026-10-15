const recipyModel = require("../model/RecipyModel")
const handler = require("express-async-handler")




const addRecipy = handler(async(req,res)=>{

    const {title,des,rating,reviews,picture} = req.body

    if(!title || !des){

        res.status(401)
        throw new Error("please fill recipy inputs")
    }

    const findRecipy = await recipyModel.findOne({title})

    if(findRecipy){

        res.status(400)
        throw new Error("that recipy already exist")
    }

    const createdRecipy = await recipyModel.create({
        title,
        des,
        rating,
        reviews,
        picture
    })

    res.status(200).json({

        message : "recipy added",
        createdRecipy
    })
})


const getRecipy = handler(async(req,res)=>{

    const getRecipy = await recipyModel.find()

    res.status(200)
    res.send(getRecipy)
})

const updateRecipy = handler(async(req,res)=>{

    const update = await recipyModel.findByIdAndUpdate(req.params.id, req.body, {new : true})

    res.status(200)
    res.send(update)
})


const delRecipy = handler(async(req,res)=>{

    const delrecipy = await recipyModel.findByIdAndDelete(req.params.id)

    if(!delrecipy){

        res.status(404)
        throw new Error("that recipy not found")
    }

    res.status(200)
    res.send(delrecipy)
})


module.exports = {addRecipy,getRecipy,updateRecipy,delRecipy}