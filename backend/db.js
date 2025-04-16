import mongoose from "mongoose";
const Schema = mongoose.schema

const employeeSchema = new Schema({
    name : String,
    email: String,
    password: String,

});
const employerSchema = new Schema({
    name : String,
    email: String,
    password: String,

});

const employeeModel = mongoose.model("employee", employeeSchema)
const employerModel = mongoose.model("employee", employerSchema)

export{
    employeeModel,
    employerModel
}