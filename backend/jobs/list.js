import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
import { z } from "zod";
const addJobsRouter = Router()
const removeJobsRouter = Router()
const loadAlluserJobsRouter = Router()
const loadAllJobsRouter = Router()
import {jobsModel } from "../db.js";

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
    }

    return randomString;
}


addJobsRouter.post("/", async function (req, res) {

    const username = jwt.verify(req.body.token, JWT_SECRET)
    const jobId = generateRandomString()
    const minsalaryRangeInt = parseInt(req.body.minsalaryRange)
    const maxsalaryRangeInt = parseInt(req.body.maxsalaryRange)

    const jobExist = await jobsModel.findOne({
        username: username.username,
        openings: req.body.openings,
        type: req.body.type,
        location: req.body.location,
        organization: req.body.organization,
        description: req.body.description,
        salaryRange: {
            min: minsalaryRangeInt,
            max: maxsalaryRangeInt,
        },
        experienceLevel: req.body.experienceLevel,
        
    })
    if (jobExist) {
        res.json({
            message: "job already exists"
        })
        return
    }

    const dbRes = await jobsModel.create({
        jobId: jobId,
        username: username.username,
        openings: req.body.openings,
        type: req.body.type,
        location: req.body.location,
        organization: req.body.organization,
        description: req.body.description,
        salaryRange: {
            min: minsalaryRangeInt,
            max: maxsalaryRangeInt,
        },
        experienceLevel: req.body.experienceLevel,

    })
    if (!dbRes) {
        res.json({
            message: "error in adding job"
        })
        return
    }
    res.json({
        message: "added success"
    })

})

removeJobsRouter.post("/", async function (req, res) {

    const jobId = req.jobId
    const username = jwt.verify(req.body.token, JWT_SECRET)
    const dbRes = await jobsModel.deleteOne({
        username: username,
        jobId: jobId

    })
    if(dbRes.deletedCount){
        res.json({
            message: "deleted success"
        })
    }
    else{
        res.json({
            message: "job not found"
        })
    }

})

loadAlluserJobsRouter.get("/", async function (req, res) {
    const token = req.headers.token
    const username = jwt.verify(token, JWT_SECRET)
    const jobs = await jobsModel.find({
        username: username.username
    })
    res.json({
        message: "got jobs",
        jobs: jobs
    })
})

loadAllJobsRouter.get("/", async function(req,res){
    const jobs = await jobsModel.find({})
    res.json({
        message: "got jobs",
        jobs: jobs
    })
})

export {
    addJobsRouter,
    removeJobsRouter,
    loadAlluserJobsRouter,
    loadAllJobsRouter
}