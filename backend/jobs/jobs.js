import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;
import { z } from "zod";
const addJobsRouter = Router()
const removeJobsRouter = Router()
import { employeeModel, jobsModel } from "../db";

addJobsRouter.post("/", async function (req, res) {


    jobsModel.create({
        username:req.username,
        type: req.type,
        location: req.location,
        organization: req.organization,
        description: req.description,
        salaryRange: {
            min: req.minsalaryRange,
            max: req.maxsalaryRange,
        },
        experienceLevel: req.experienceLevel,

    })

    res.json({
        message:"added success"
    })

})

removeJobsRouter.post("/", async function (req, res) {

    const username = jwt.verify(req.token, JWT_SECRET)
    const nRes = await jobsModel.findOne({
        username:username

    })

})

export {
    addJobsRouter,
    removeJobsRouter
}