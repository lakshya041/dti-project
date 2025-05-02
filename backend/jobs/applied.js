import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
import { employeeModel, employerDashboardModel, employerModel, jobsModel } from "../db.js";
const applyJobsRouter = Router()

applyJobsRouter.post("/", async function (req, res) {
    const jobId = req.body.jobId
    const username = jwt.verify(req.body.token, JWT_SECRET)
    const jobDetails = await employeeModel.findOne({
        username: username.username,
    })
    let alredyApplied = false
    if (jobDetails) {

        jobDetails.appliedId.forEach((job) => {
            if (job == jobId) {
                alredyApplied = true
            }
        })

    }

    if (alredyApplied) {
        res.json({
            message: "already applied"
        })
    } else {
        const prevapplied = jobDetails.appliedId
        prevapplied.push(jobId)
        await employeeModel.updateOne({
            username: username.username,
        }, {
            $set: {
                appliedId: prevapplied
            }
        })
        const res1 = await jobsModel.findOne({
            jobId: jobId
        })
        const employerUsername = res1.username
        const dash = await employerDashboardModel.findOne({
            username: employerUsername
        })
        const newNoApplications = dash.totalApplicationsReceived + 1
        await employerDashboardModel.updateOne({
            username: employerUsername
        }, {
            $set: {
                totalApplicationsReceived: newNoApplications
            }
        })
        res.json({
            message: "applied successfully"
        })
    }
})
applyJobsRouter.get("/", async function (req, res) {
    try {
        const username = jwt.verify(req.headers.token, JWT_SECRET);
        
        // Fetch the employee's applied jobs
        const employee = await employeeModel.findOne({
            username: username.username,
        });

        if (!employee || !employee.appliedId || employee.appliedId.length === 0) {
            return res.json([]);
        }

        // Fetch job details for each applied jobId
        const jobs = await jobsModel.find({
            jobId: { $in: employee.appliedId }
        });

        res.json(jobs);
    } catch (err) {
        console.error("Error fetching applied jobs:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

applyJobsRouter.get("/loadallJobs", async function (req, res) {
    try {
        const username = jwt.verify(req.headers.token, JWT_SECRET);
        
        // Fetch all jobs
        const allJobs = await jobsModel.find({});
        
        // Fetch user data
        const userData = await employeeModel.findOne({
            username: username.username,
        });

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        // Filter jobs that are not already applied
        const availableJobs = allJobs.filter(job => !userData.appliedId.includes(job.jobId));

        res.json(availableJobs);
    } catch (err) {
        console.error("Error loading jobs:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

applyJobsRouter.post("/apply", async function (req, res) {
    const jobId = req.body.jobId
    const username = jwt.verify(req.body.token, JWT_SECRET)
    const jobDetails = await employeeModel.findOne({
        username: username.username,
    })
    let alredyApplied = false
    if (jobDetails) {

        jobDetails.appliedId.forEach((job) => {
            if (job == jobId) {
                alredyApplied = true
            }
        })

    }
    if (alredyApplied) {
        res.json({
            message: "already applied"
        })
    } else {
        const prevapplied = jobDetails.appliedId
        prevapplied.push(jobId)
        await employeeModel.updateOne({
            username: username.username,
        }, {
            $set: {
                appliedId: prevapplied
            }
        })
        const res1 = await jobsModel.findOne({
            jobId: jobId
        })
        // const employerUsername = res1.username
        // const dash = await employerDashboardModel.findOne({
        //     username: employerUsername
        // })
        // const newNoApplications = dash.totalApplicationsReceived + 1
        // await employerDashboardModel.updateOne({
        //     username: employerUsername
        // }, {
        //     $set: {
        //         totalApplicationsReceived: newNoApplications
        //     }
        // })
        res.json({
            message: "applied successfully"
        })
    }
}
)

applyJobsRouter.get("/employer/applications", async function (req, res) {
    try {
        console.log("gsdfsdhd")
        // Verify employer's token
        const employer = jwt.verify(req.headers.token, JWT_SECRET);

        // Fetch all jobs posted by the employer
        const employerJobs = await jobsModel.find({ username: employer.username });

        if (!employerJobs || employerJobs.length === 0) {
            return res.status(404).json({ message: "No jobs found for this employer" });
        }

        // Extract job IDs posted by the employer
        const jobIds = employerJobs.map(job => job.jobId);

        // Find employees who have applied to these jobs
        const appliedEmployees = await employeeModel.find({
            appliedId: { $in: jobIds }
        });

        if (!appliedEmployees || appliedEmployees.length === 0) {
            return res.json({ message: "No applications found", appliedUsers: [] });
        }
        // Return the applied employees' objects
        res.json({ message: "Applications found", appliedUsers: appliedEmployees });
    } catch (err) {
        console.error("Error fetching employer applications:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

applyJobsRouter.get("/selected", async (req, res) => {
    try {
        // Verify employer's token
        const username = jwt.verify(req.headers.token, JWT_SECRET);

        // Fetch employer data
        const employerData = await employerModel.findOne({
            username: username.username
        });

        if (!employerData || !employerData.hiredEmployees || employerData.hiredEmployees.length === 0) {
            return res.status(404).json({ message: "No hired employees found" });
        }

        // Get the array of hired employees' usernames
        const employees = employerData.hiredEmployees;

        // Fetch employee data for the hired employees
        const employeeDetails = await employeeModel.find({
            username: { $in: employees }
        });

        // Return the array of employee objects
        res.json({ message: "Hired employees found", employees: employeeDetails });
    } catch (err) {
        console.error("Error fetching selected employees:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});
    

export {
    applyJobsRouter
}