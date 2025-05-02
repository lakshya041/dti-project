import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import bCrypt from "bcrypt";
const profileRouter2 = Router()
const JWT_SECRET = process.env.JWT_SECRET;
import { z } from "zod";
import { employerDashboardModel, employerModel } from "../db.js";
const employerLoginRouter = Router()
const employerSignupRouter = Router()

employerLoginRouter.post("/", async function (req, res) {
    const email = req.body.email
    const password = req.body.password

    const dbRes = await employerModel.findOne({
        email: email
    })

    if (dbRes) {

        const comparePassword = bCrypt.compare(password, dbRes.password)
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
            email: email,
            hiredEmployees: []
        })

        employerDashboardModel.create({
            username: username,
            totalJobsPosted: 0,
            totalApplicationsReceived: 0,
            totalShortlisted: 0,
            totalHired: 0
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
profileRouter2.get("/profile", async function (req, res) {
    const token = req.headers.token
    if (token) {
        const decoded = jwt.verify(token, JWT_SECRET)
        const username = decoded.username
        const dbRes = await employerModel.findOne({
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
    profileRouter2,
    employerLoginRouter,
    employerSignupRouter
}