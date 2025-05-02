import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose"
import { employeeLoginRouter, employeeSignupRouter, profileRouter } from "./auth/employee.js"
import { employerLoginRouter, employerSignupRouter, profileRouter2 } from "./auth/employer.js"
import { addJobsRouter, loadAllJobsRouter, loadAlluserJobsRouter, removeJobsRouter } from "./jobs/list.js"
import { applyJobsRouter } from "./jobs/applied.js"
import { employeeVerificationRouter } from "./verification/employee.js"
import { employerVerificationRouter } from "./verification/employer.js"
import { dashboardRouter } from "./pages/dashboard.js"
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use("/employeelogin", employeeLoginRouter)
app.use("/employeesignup", employeeSignupRouter)
app.use("/employerlogin", employerLoginRouter)
app.use("/employersignup", employerSignupRouter)
app.use("/addjobs", addJobsRouter)
app.use("/removejobs", removeJobsRouter)
app.use("/loadAlluserJobs", loadAlluserJobsRouter)
app.use("/applyJobs", applyJobsRouter)
app.use("/employeeVerification", employeeVerificationRouter)
app.use("/employerVerification", employerVerificationRouter)
app.use("/loadAllJobs", loadAllJobsRouter)
app.use('/dahboarddata', dashboardRouter)
app.use("/employee", profileRouter)
app.use("/employer", profileRouter2)

async function main() {

    app.listen(PORT)
    console.log("http://localhost:3000")
    await mongoose.connect(MONGO_URI)
    console.log("connected to DB")
}
main()