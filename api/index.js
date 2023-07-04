import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv"
import cors from "cors"
const app = express()
import cookieParser from "cookie-parser";
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
app.use(cookieParser())
app.use(express.json())
app.use(morgan('dev'))
dotenv.config();

import User from './models/userModel.js'
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// connection request
mongoose.connect(process.env.DB_URL).then((data)=>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log(`err is ${err}`)
})

app.post('/register',async (req,res)=>{
    try{
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const user = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hash
        })
        const savedUser = await user.save()
        console.log(savedUser)
        res.status(201).json({
            message : "Registration Successfull",
            newUser : savedUser
        })
    }
    catch(err){
        res.status(422).json(err)
    }
})

app.post('/login',async (req,res)=>{
    try{
        const user = await User.findOne({
            userName: req.body.userName
        })
        if(!user){
            res.status(404).json("User not found")
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect){
            res.status(500).json("Wrong password")
        }
        const token = jwt.sign({
            id: user._id,
            name: user.userName,
            email: user.email
        },process.env.JWT)
        res.cookie("access_token", token).status(200).json(user)
    }
    catch(err){
        res.status(404).json("User not found")
    }
})

app.get('/profile',(req,res)=>{
    const token = req.cookies.access_token
    if(token){
        jwt.verify(token, process.env.JWT, (err,decoded)=>{
            if(err){
                res.send(null)
            }
            else{
                res.send(decoded)
            }
        })
    }
    return null
})

app.listen(9000,()=>{
    console.log("Server Started")
})