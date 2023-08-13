import express from "express"
import path from "path"
const router = express.Router()
const __dirname = path.resolve()


router.get("/about-us",(req,res)=>{

    res.sendFile(path.join(__dirname,"public/about.html"))
})

router.get("/didyouknow",(req,res)=>{

    res.sendFile(path.join(__dirname,"public/didyouknow.html"))
})

router.get("/contact",(req,res)=>{

    res.sendFile(path.join(__dirname,"public/contact.html"))
})

router.get("/help",(req,res)=>{

    res.sendFile(path.join(__dirname,"public/howWeHelp.html"))
})

router.get("/Services",(req,res)=>{

    res.sendFile(path.join(__dirname,"public/services.html"))
})

router.get("/sell",(req,res)=>{

    res.sendFile(path.join(__dirname,"public/sellpage.html"))
})
router.get("/shop",(req,res)=>{

    res.sendFile(path.join(__dirname,"public/shop.html"))
})

export default router