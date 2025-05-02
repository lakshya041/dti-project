import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
const JWT_SECRET = process.env.JWT_SECRET;
import { z } from "zod";
const employeeLoginRouter = Router()
const employeeSignupRouter = Router()
import { employeeModel } from "../db.js";
const profileRouter = Router()

employeeLoginRouter.post("/", async function (req, res) {
    const username = req.body.username
    const password = req.body.password

    const dbRes = await employeeModel.findOne({
        username: username
    })
    if (dbRes) {
        const comparePassword = await bcrypt.compare(password, dbRes.password)
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

employeeSignupRouter.post("/", async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email


    const dbRes = await employeeModel.findOne({
        username: username
    })
    if (!dbRes) {
        const hashedPassword = await bcrypt.hash(password, 10)
        employeeModel.create({
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

profileRouter.get("/profile", async function (req, res) {
    const token = req.headers.token
    if (token) {
        const decoded = jwt.verify(token, JWT_SECRET)
        const username = decoded.username
        const dbRes = await employeeModel.findOne({
            username: username
        })
        if (dbRes) {
            res.json({
                message: "Profile data fetched successfully",
                data: dbRes
            })
        }
        else {
            res.json({
                message: "Profile data not found"
            })
        }
    }
    else {
        res.json({
            message: "Token not provided"
        })
    }
}
    )

export {
    employeeLoginRouter,
    employeeSignupRouter,
    profileRouter
}