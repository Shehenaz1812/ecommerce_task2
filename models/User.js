const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    dob: { type: String, required: true },
    branch: { type: String, required: true },
    rollNo: { type: String, required: true, unique: true },
    section: { type: String, required: true },
    address: { type: String, required: true },
    mobileNo: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
