import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv"
import cors from "cors"
const app = express()
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
app.use(express.json())
app.use(morgan('dev'))
dotenv.config();

import User from './models/userModel.js'
import bcrypt from "bcryptjs"

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
            name: req.body.name,
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
        res.status(500).json(err)
    }
    // const {name,email,password} = req.body
    // User.create({name, email, password})
    // res.status(201).json({name,email,password})
})


app.listen(9000,()=>{
    console.log("Server Started")
})