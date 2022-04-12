const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
   fullName: {
       type: String,
       required: true
   },

   age: {
    type: Number,
    required: true
   },

   school: {
    type: String,
    required: true
   },

   class: {
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