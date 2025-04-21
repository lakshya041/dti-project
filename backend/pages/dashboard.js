import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import bCrypt from "bcrypt";
import { employerDashboardModel } from "../db.js";
const JWT_SECRET = process.env.JWT_SECRET;

const dashboardRouter = Router()

dashboardRouter.get("/", async function (req, res) {

    const token = req.headers.token
    const username = jwt.verify(token, JWT_SECRET)
    
    const dbRes = await employerDashboardModel.findOne({
        username: username.username
    })
    if (dbRes) {
        res.json({
            message: "success",
            data: dbRes
        })
    } else {
        res.json({
            message: "error"
        })
    }
    
})

export {
    dashboardRouter
}