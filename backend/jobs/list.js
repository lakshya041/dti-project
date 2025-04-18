import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
import { z } from "zod";
const addJobsRouter = Router()
const removeJobsRouter = Router()
const loadAllRouter = Router()
import {jobsModel } from "../db.js";

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex]; // Picks a random character from the string
    }

    return randomString;
}


addJobsRouter.post("/", async function (req, res) {

    const jobId = generateRandomString()
    jobsModel.create({
        jobId: jobId,
        username: req.body.username,
        type: req.body.type,
        location: req.body.location,
        organization: req.body.organization,
        description: req.body.description,
        salaryRange: {
            min: req.body.minsalaryRange,
            max: req.body.maxsalaryRange,
        },
        experienceLevel: req.body.experienceLevel,

    })

    res.json({
        message: "added success"
    })

})

removeJobsRouter.post("/", async function (req, res) {

    const jobId = req.jobId
    const username = jwt.verify(req.token, JWT_SECRET)
    await jobsModel.deleteOne({
        username: username,
        jobId: jobId

    })

})

loadAllRouter.get("/", async function (req, res) {
    const username = req.headers.username
    const jobs = await jobsModel.find({
        username: username
    })
    res.json({
        message: "got jobs",
        jobs: jobs
    })
})

export {
    addJobsRouter,
    removeJobsRouter,
    loadAllRouter
}