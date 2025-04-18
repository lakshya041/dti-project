import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
import { z } from "zod";
const employerVerificationRouter = Router()
import {employerDocumentModel} from "../db.js";

employerVerificationRouter.post("/", async function (req, res) {
    const token = req.body.token
    const username = jwt.verify(token, JWT_SECRET)
    const documentType = req.body.documentType
    const documentNumber = req.body.documentNumber
    const documentUrl = req.body.documentUrl

    const dbRes = await employerDocumentModel.findOne({
        username: username
    })
    if (!dbRes) {
        employerDocumentModel.create({
            username: username,
            documentType: documentType,
            documentNumber: documentNumber,
            documentUrl: documentUrl
        })
        res.json({
            message: "added success"
        })
    } else {
        res.json({
            message: "already added"
        })
    }
})

employerVerificationRouter.get("/", async function (req, res) {
    const token = req.body.token
    const username = jwt.verify(token, JWT_SECRET)
    const dbRes = await employerDocumentModel.findOne({
        username: username
    })
    if (dbRes) {
        res.json(dbRes)
    } else {
        res.json({
            message: "not found"
        })
    }
})

export {
    employerVerificationRouter
}