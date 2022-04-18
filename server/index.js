const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors=require("cors");
const StudentModel = require('./models/Student');

app.use(cors())

app.use(express.json())

mongoose.connect('mongodb+srv://student:Sukh11707506@cluster0.xswcf.mongodb.net/mernstack?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
})

app.post('/insert', async (req, res) => {
    const { fullName, dob, school, classname, division, status } = req.body;
    console.log(fullName, dob, school, classname, division, status)

    if (!fullName || !dob || !school || !classname || !division || !status ) {
        return res.status(422).json({status: "Please fill all the fields"});
    }
    
    const student =  new StudentModel({ fullName: fullName, age: dob, school: school, classname: classname, division: division, status: status });

    try {
     await student.save();
     res.json({status: "Data inserted"});
    } catch(err) {
        console.log(err)
    }
});

app.get('/read', async (req, res) => {
  StudentModel.find({}, (err, result ) => {
      if(err) {
          res.json({err: "Failed"});
      }
      res.json(result);
  });
});

app.get('/update/:id', async (req, res) => {
    console.log(req.params.id);
    
    // const singleStudent =  new StudentModel({ fullName: fullName, age: dob, school: school, classname: classname, division: division, status: status });

    // try {
    //  await student.save();
    //  res.json({status: "Data inserted"});
    // } catch(err) {
    //     console.log(err)
    // }
});



app.listen(3001, () => {
    console.log("Server is running on port 3001");
});