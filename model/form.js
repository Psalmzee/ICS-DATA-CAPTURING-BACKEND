const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./authentication");

const personalInfoSchema = new Schema({
    user: { type: ObjectId, ref: "User" },
    firstName: { type: String, required: [true, "First name required"] },
    lastName: { type: String, required: [true, "Last name required"] },
    gender: { type: String, enum: ["Female", "Male"], required: true },
    phoneNo: { type: Number, required: [true, "Phone number required"] },
    address: { type: String, required: [true, "Address is required"] },
    nearestBustop: {
        type: String,
        required: [true, "Nearest bustop required"],
    },
    state: { type: String, required: [true, "State of resident required"] },
    signature: { type: String, required: [true, "Provide your signature"] },
    documents: {
        type: Map,
        of: String,
        required: [true, "Upload all the necessary documents"],
    },
});

const homeTownSchema = new Schema({
    user: { type: ObjectId, ref: "User" },
    contactPhoneNo: {
        type: String,
        required: [true, "Home contact number required"],
    },
    compoundOrFamilyName: {
        type: String,
        required: [true, "Compound/Family name required"],
    },
    nearestBustop: {
        type: String,
        required: [true, "Nearest bustop required"],
    },
    landMark: { type: String, required: [true, "Land mark required"] },
    State: { type: String, required: [true, "State of home town required"] },
    documents: {
        type: Map,
        of: String,
        required: [true, "Upload all the necessary documents"],
    },
});

const guarantorSchema = new Schema({
    user: { type: ObjectId, ref: "User" },
    passport: { type: String, required: [true, "passport required"] },
    firstName: { type: String, required: [true, "First name required"] },
    lastName: { type: String, required: [true, "Last name required"] },
    otherNames: { type: String },
    occupation: { type: String, required: [true, "Occupation required"] },
    position: { type: String, required: [true, "Position required"] },
    level: { type: String },
    organizationName: {
        type: String,
        required: [true, "Organisation name required"],
    },
    cacNo: {
        type: Number /* required: [true, 'Provide your business CAC number'] */,
    },
    officeAddress: {
        type: String,
        required: [true, "Office address required"],
    },
    officeNo: {
        type: String,
        required: [true, "office phone number required"],
    },
    email: { type: String, required: [true, "Provide a valid email required"] },
    address: { type: String, required: [true, "Address is required"] },
    phoneNo: { type: Number, required: [true, "Phone number required"] },
    relationship: {
        type: String,
        required: [true, "What is your relationship with the candidate"],
    },
    declaration: declarationSchema,
});

const refreeSchema = new Schema({
    user: { type: ObjectId, ref: "User" },
    firstName: { type: String, required: [true, "First name required"] },
    lastName: { type: String, required: [true, "Last name required"] },
    otherNames: { type: String },
    occupation: { type: String, required: [true, "Occupation required"] },
    officeAddress: {
        type: String,
        required: [true, "Office address required"],
    },
    officeNo: {
        type: String,
        required: [true, "office phone number required"],
    },
    email: { type: String, required: [true, "Provide a valid email required"] },
    /* documents: */
});

const previousEmployerSchema = new Schema({
    user: { type: ObjectId, ref: "User" },
    firstName: { type: String, required: [true, "First name required"] },
    lastName: { type: String, required: [true, "Last name required"] },
    companyName: { type: String, required: [true, "Company's name required"] },
    companyAddress: {
        type: String,
        required: [true, "Company's address required"],
    },
    companyEmail: {
        type: String,
        required: [true, "Provide a valid email required"],
    },
    dates: {
        startDate: { type: Date, required: [true, "Start date required"] },
        endDate: { type: Date, required: [true, "End date required"] },
    },
    position: { type: String, required: [true, "Position held"] },
    salary: { type: Number },
    reasonForLeaving: { type: String, maxlength: 100 },
    outstandingLoans: {
        type: Boolean,
        required: [
            true,
            "Do you have an outstanding loan with your previous employer?",
        ],
    },
    methodOfPayment: { type: String, maxlength: 50 },
    /* documents: */
});

const declarationSchema = new Schema({
    GuarantorFirstName: {
        type: String,
        required: [true, "Guarantor's first name required"],
    },
    GuarantorLastName: {
        type: String,
        required: [true, "Guarantor's last name required"],
    },
    nationality: {
        type: String,
        required: [true, "State guarantor's nationality"],
    },
    email: { type: String, required: [true, "Guarantor's email required"] },
    address: { type: String, required: [true, "Address is required"] },
    candidateFirstName: {
        type: String,
        required: [true, "Candidate's first name required"],
    },
    candidateLastName: {
        type: String,
        required: [true, "Candidate's last name required"],
    },
    /* signature: */
});
