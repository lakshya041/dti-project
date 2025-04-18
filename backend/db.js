import mongoose from "mongoose";
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    username: String,
    email: String,
    password: String,

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

const appliedSchema = new Schema({
    username: String,
    jobsId: Array,
})

const employeeModel = mongoose.model("employee", employeeSchema)
const employerModel = mongoose.model("employer", employerSchema)
const jobsModel = mongoose.model("jobs", jobsSchema)
const appliedModel = mongoose.model("applied", appliedSchema)
const employeeDocumentModel = mongoose.model("employeeDocument", employeeDocumentSchema)
const employerDocumentModel = mongoose.model("employerDocument", employerDocumentSchema)

export {
    employeeModel,
    employerModel,
    jobsModel,
    appliedModel,
    employeeDocumentModel,
    employerDocumentModel
}