import mongoose from "mongoose";
const Schema = mongoose.schema

const employeeSchema = new Schema({
    name: String,
    email: String,
    password: String,

});
const employerSchema = new Schema({
    name: String,
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
const employerModel = mongoose.model("employee", employerSchema)
const jobsModel = mongoose.model("jobs", jobsSchema)
const appliedModel = mongoose.model("applied", appliedSchema)

export {
    employeeModel,
    employerModel,
    jobsModel,
    appliedModel
}