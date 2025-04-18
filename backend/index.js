import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose"
import { employeeLoginRouter, employeeSignupRouter } from "./auth/employee.js"
import { employerLoginRouter, employerSignupRouter } from "./auth/employer.js"
import { addJobsRouter, loadAllRouter, removeJobsRouter } from "./jobs/list.js"
import { applyJobsRouter } from "./jobs/applied.js"
import { employeeVerificationRouter } from "./verification/employee.js"
import { employerVerificationRouter } from "./verification/employer.js"
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use("/employeelogin", employeeLoginRouter)
app.use("/employeesignup", employeeSignupRouter)
app.use("/employerlogin", employerLoginRouter)
app.use("/employersignup", employerSignupRouter)
app.use("/addjobs", addJobsRouter)
app.use("/removejobs", removeJobsRouter)
app.use("/loadalljobs", loadAllRouter)
app.use("/appliedjobs", applyJobsRouter)
app.use("/employeeVerification", employeeVerificationRouter)
app.use("/employerVerification", employerVerificationRouter)

async function main() {

    app.listen(PORT)
    console.log("http://localhost:3000")
    await mongoose.connect(MONGO_URI)
    console.log("connected to DB")
}
main()