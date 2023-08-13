
import express from "express"
import path from "path"
import cors from "cors"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose"
import cookieParser from 'cookie-parser'
import Apiv1 from "./v1/index.mjs"
const app = express()
const __dirname = path.resolve()



app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:2344', "*"],
    credentials: true
}));

app.use(Apiv1)
app.use("/",
express.static(__dirname)
)
// app.use((req, res, next) => {

//     console.log("req.cookies: ", req.cookies.token);

//     if (!req?.cookies?.token) {
//         // res.status(401).send({
//         //     message: "include http-only credentials with every request"
//         // })
//         return res.redirect("/registration")
//      }

//     jwt.verify(req.cookies.token, SECRET, function (err, decodedData) {
//         if (!err) {

//             console.log("decodedData: ", decodedData);

           
//             const nowDate = new Date().getTime() / 1000;

//             if (decodedData.exp < nowDate) {

//                 res.status(401);
//                 res.cookie('token', '', {
//                     maxAge: 1,
//                     httpOnly: true
//                 });
//                 res.redirect("/registration")
//                 return

//             } else {

//                 console.log("token approved");

//                 res.locals.decodedData = decodedData.email;
//                 req.body.token = decodedData
//                 next();
                
//             }
//         } else {
//             res.redirect("/registration")
//         }
//     });
// })
const PORT = process.env.PORT | 2344
app.listen(PORT,()=>{
    console.log(PORT)
})

mongoose.connect('mongodb+srv://muhammadhamd:hamdali111@cluster0.ziszgr7.mongodb.net/YcharteCommerce?retryWrites=true&w=majority');

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function (e) {//disconnected
    console.log(e);
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
