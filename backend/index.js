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
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use("/employeelogin", employeeLoginRouter)
app.use("/employeesignup", employeeSignupRouter)
app.use("/employerlogin", employeeLoginRouter)
app.use("/employersignup", employerSignupRouter)

async function main() {

    app.listen(PORT)
    console.log("https://localhost:3000")
    await mongoose.connect(MONGO_URI)
    console.log("connected to DB")
}
main()