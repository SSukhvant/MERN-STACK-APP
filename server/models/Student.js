const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
   fullName: {
    type: String,
    required: true
   },

   age: {
    type: String,
    required: true
   },

   school: {
    type: String,
    required: true
   },

   classname: {
    type: String,
    required: true
   },

   division: {
    type: String,
    required: true
   },

   status: {
    type: String,
    required: true
   },
});

const Student = mongoose.model("Student", StudentSchema)
module.exports = Student