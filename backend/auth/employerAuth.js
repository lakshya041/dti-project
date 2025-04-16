import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;
import { z } from "zod";
const employerLoginRouter = Router()
const employerSignupRouter = Router()

employerLoginRouter.post("/", async function (req, res) {
    const username = req.body.username
    const password = req.body.password

    {
        //Db checking, bcrypt compares
    }

    const token = jwt.sign({
        username
    }, JWT_SECRET)

    res.json({
        message: "login Success",
        token: token
    })
})

employerSignupRouter.post("/", async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email


    {
        //Db checking, bcrypt compares
    }

    const token = jwt.sign({
        username
    }, JWT_SECRET)

    res.json({
        message: "signup Success",
        token: token
    })
})

export {
    employerLoginRouter,
    employerSignupRouter
}