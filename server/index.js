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
    console.log(fullName, dob, school, classname, division, status);
    if (!fullName || !dob || !school || !classname || !division || !status ) {
        return res.status(422).json({status: "Please fill all the fields"});
    }

    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    
    const student =  new StudentModel({ fullName: fullName, age: age, school: school, classname: classname, division: division, status: status });

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

app.get('/read/:id', async (req, res) => {
    console.log(req.params.id);
    StudentModel.findById({_id:req.params.id}, function (err, result) {
        if (err){
            console.log(err);
            res.json({err: "Failed"});
        }
        else{
            console.log("Result : ", result);
            res.json(result)
        }
    })
});

app.put('/update/:id', async (req, res) => {
    StudentModel.findOneAndUpdate({_id:req.params.id}, {
    $set: {
        fullName: req.body.fullName, 
        age: req.body.age, 
        school: req.body.school, 
        classname: req.body.classname, 
        division: req.body.division, 
        status: req.body.status
    }
})
    .then(result=> {
        console.log(result);
        res.status(200).json({
            updated_data:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
});

app.delete('/delete/:id', async (req, res) => {
    StudentModel.findOneAndDelete({_id:req.params.id})
    .then(result=> {
        console.log(result);
        res.status(200).json({
            deleted_data:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
});

app.get('/search/:key', async (req, res) => {
    // const { fullName, age, school, classname, division } = req.body;
    // console.log(fullName, age, school, classname, division);
    // if (!fullName || !age || !school || !classname || !division) {
    //     return res.status(422).json({status: "Invalid Search"});
    // }

    // const regex =  new StudentModel({ fullName: fullName, age: age, school: school, classname: classname, division: division});
    // console.log(regex)
    let data = await StudentModel.find(
        {
            "$or": [
                {"fullName":{$regex: req.params.key}}
            ]
        }
    )
    .then(result=> {
        console.log(result);
        res.status(200).json({
            searched_data:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
});



app.listen(3001, () => {
    console.log("Server is running on port 3001");
});