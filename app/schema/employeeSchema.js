const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: Number,
        required: true
    },
    UserName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("employees", employeeSchema);