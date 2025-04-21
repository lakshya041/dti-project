import mongoose from "mongoose";
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    username: String,
    email: String,
    password: String,
    appliedId: Array,

});

const employeeDocumentSchema = new Schema({
    username: String,
    documentType: {
        type: String,
        required: true
    },
    documentNumber: {
        type: String,
        required: true
    },
    documentUrl: {
        type: String,
        required: true
    }
});

const employerDocumentSchema = new Schema({
    username: String,
    documentType: {
        type: String,
        required: true
    },
    documentNumber: {
        type: String,
        required: true
    },
    documentUrl: {
        type: String,
        required: true
    }
});

const employerSchema = new Schema({
    username: String,
    email: String,
    password: String,

});

const jobsSchema = new Schema({
    jobId:String,
    username: String,
    openings: Number,
    type: String,
    location: String,
    organization: String,
    description: String,         
    salaryRange: {
        min: Number,
        max: Number
      },
    experienceLevel: String,
    // postedDate: Date
})

const employerDashboardSchema = new Schema({
    username: String,
    totalJobsPosted: Number,
    totalApplicationsReceived: Number,
    totalShortlistedCandidates: Number,
    totalHiredEmployees: Number
})

const employeeModel = mongoose.model("employee", employeeSchema)
const employerModel = mongoose.model("employer", employerSchema)
const jobsModel = mongoose.model("jobs", jobsSchema)
const employeeDocumentModel = mongoose.model("employeeDocument", employeeDocumentSchema)
const employerDocumentModel = mongoose.model("employerDocument", employerDocumentSchema)
const employerDashboardModel = mongoose.model("employerDashboard", employerDashboardSchema)

export {
    employeeModel,
    employerModel,
    jobsModel,
    employeeDocumentModel,
    employerDocumentModel,
    employerDashboardModel
}