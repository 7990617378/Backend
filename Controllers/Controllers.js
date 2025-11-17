import express from "express";
import User from "../Schema/Schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cp from "cookie-parser";
import cors from "cors";

let app = express()
app.use(cp())
app.use(express.json());
app.use(cors())

let Register = async (req, res) => {
    try {
        let { name, age, email, phone_no, password } = req.body
        let hashpassword = await bcrypt.hash(password, 10)
        let NewUSer = User({
            name,
            age,
            email,
            phone_no,
            password: hashpassword
        })
        let Data = await NewUSer.save()
        res.send({
            success: true,
            message: "USer created successfully....",
            data: Data
        })
    } catch (err) {
        res.send({
            success: false,
            message: "User creation failed...."
        })
    }
}

let Login = async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await User.findOne({ email })
        if (!user) {
            return res.send({
                success: false,
                message: "User not found..."
            })
        }

        let ismatch = await bcrypt.compare(password, user.password)
        if (!ismatch) {
            return res.send({
                success: false,
                message: "Incorrect Password"
            })
        }
        if (user && ismatch) {
            let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            // let token = jwt.sign({ id: user._id }, "secretData")
            res.cookie("token", token)
            res.send({
                success: true,
                message: "Login successfully....",
                data:token
            })
        }
    } catch (err) {
        res.send({
            success: false,
            message: "Login failed...",
            data: err.message
        })
    }
}

export  { Register, Login }