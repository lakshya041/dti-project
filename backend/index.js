import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
import { employeeLoginRouter, employeeSignupRouter } from "./auth/employeeAuth"
app.use(express.json())
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose"
import { employerSignupRouter } from "./auth/employerAuth"
import { addJobsRouter, loadAllRouter, removeJobsRouter } from "./jobs/list"
import { applyJobsRouter } from "./jobs/applied"
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use("/employeelogin", employeeLoginRouter)
app.use("/employeesignup", employeeSignupRouter)
app.use("/employerlogin", employeeLoginRouter)
app.use("/employersignup", employerSignupRouter)
app.use("/addjobs", addJobsRouter)
app.use("/removejobs", removeJobsRouter)
app.use("/loadalljobs", loadAllRouter)
app.use("/appliedjobs", applyJobsRouter)

async function main() {

    app.listen(PORT)
    console.log("https://localhost:3000")
    await mongoose.connect(MONGO_URI)
    console.log("connected to DB")
}
main()