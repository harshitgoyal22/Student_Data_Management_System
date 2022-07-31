const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    contact: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
        default: "",
    },
    usn: {
        type: String,
        default: "",
        unique: true,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        default: "",
    },
},
);

module.exports = mongoose.model("User", UserSchema);