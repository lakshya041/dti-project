import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;
import { z } from "zod";
const employeeLoginRouter = Router()
const employeeSignupRouter = Router()
import { employeeModel } from "../db";

employeeLoginRouter.post("/", async function (req, res) {
    const username = req.body.username
    const password = req.body.password

    const dbRes = await employeeModel.findOne({
        username: username
    })
    if (dbRes) {

        if (dbRes.password == password) {

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

employeeSignupRouter.post("/", async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email


    const dbRes = await employeeModel.findOne({
        username: username
    })
    if (!dbRes) {

        employeeModel.create({
            username: username,
            password: password,
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
    employeeLoginRouter,
    employeeSignupRouter
}