import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import bCrypt from "bcrypt";
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;
import { z } from "zod";
import { employerModel } from "../db.js";
const employerLoginRouter = Router()
const employerSignupRouter = Router()

employerLoginRouter.post("/", async function (req, res) {
    const email = req.body.email
    const password = req.body.password

    const dbRes = await employerModel.findOne({
        email: email
    })

    if (dbRes) {

        const comparePassword = await bCrypt.compare(password, dbRes.password)
        const username = dbRes.username
        if (comparePassword) {

            const token = jwt.sign({
                username
            }, JWT_SECRET)

            res.json({
                message: "login Success",
                token: token
            })
        }
        else ({
            message: "invalid password"
        })
    }
    else {
        res.json({
            message: "login unsuccessful"
        })
    }

})

employerSignupRouter.post("/", async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    
    const dbRes = await employerModel.findOne({
        email: email
    })
    if (!dbRes) {
        
        const hashedPassword = await bCrypt.hash(password, 10)
        employerModel.create({
            username: username,
            password: hashedPassword,
            email: email
        })

        const token = jwt.sign({
            username
        }, JWT_SECRET)

        res.json({
            message: "signup Success",
            token: token
        })
    }
    else {
        res.json({
            message: "username alredy exist"
        })
    }

})

export {
    employerLoginRouter,
    employerSignupRouter
}