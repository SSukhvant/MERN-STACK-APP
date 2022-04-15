const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const StudentSchema = new mongoose.Schema({
   _id: Number,
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
},
   {_id: false}
);

StudentSchema.plugin(AutoIncrement);

const Student = mongoose.model("Student", StudentSchema)
module.exports = Student