import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
import { z } from "zod";
import { jobsModel } from "../db";
const applyJobsRouter = Router()

applyJobsRouter.post("/", async function (req, res) {
    const jobId = req.body.jobId
    const username = jwt.verify(req.token, JWT_SECRET)
    const jobDetails = await jobsModel.findOne({
        username: username,
    })

    const alredyApplied = jobDetails.jobsId.includes(jobId)

    if (alredyApplied) {
        res.json({
            message: "already applied"
        })
    } else {
        const prevapplied = jobDetails.jobsId
        prevapplied.push(jobId)
        await jobsModel.updateOne({
            username: username,
        }, {
            $set: {
                jobsId: prevapplied
            }
        })
        res.json({
            message: "applied successfully"
        })
    }
})
applyJobsRouter.get("/", async function (req, res) {
    const username = jwt.verify(req.token, JWT_SECRET)
    const appliedJobs = await jobsModel.find({
        username: username,
    })
    res.json(appliedJobs)
})

export {
    applyJobsRouter
}