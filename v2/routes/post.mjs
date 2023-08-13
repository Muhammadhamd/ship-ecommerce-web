import express from 'express'
const router = express.Router()
import mongoose from "mongoose"

    const postSchema = new mongoose.Schema({

        
        sellername:{
            type:String,
        },
        userId:{
            type:String,
    
        },
        timeStamp:{
            type: Date,
            default: Date.now
        },
        description:{
            type:String,
            required:true
        },
        heading:{
            type:String,
            required:true
        },
        waranty:{
            type:String,
            required:true
        },
        make:{
            type:string,
            required:true
        } ,
         route:{
            type:string,
            required:true
        } ,
        model:{
            type:string,
            required:true
        } ,
        boatName:{
            type:string,
            required:true
        } ,
        engine:{
            type:String,
            required:true
        } ,
        hours:{
            type:Number,
            required:true
        } ,
        
        condition:{
            type:String,
            required:true
        } ,
        location:{
            type:String,
            required:true
        } ,
        ownerOutright:{
            type:String,
            required:true
        } ,
        ammount:{
            type:Number,
        } ,
        
        image:{
            type:String,
            required:true
        } ,
            
    })
router.post("/createpost",(req,res)=>{


})