const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

const StudentModel = require("./models/Student");

app.use(express.json())

mongoose.connect('mongodb+srv://student:Sukh11707506@cluster0.xswcf.mongodb.net/mernstack?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
})

app.post('/insert', async (req, res) => {
    const { fullName, dob, school, classname, division, status } = req.body;

    if (!fullName || !dob || !school || !classname || !division || !status ) {
        return res.status(422).json({error: "Data invalid"});
    }
    // const student =  new StudentModel({ fullName: "Sukhvant Singh", age: 21, school: "LPU", class: "BTech", division: "A", status: "Active"});

    try {
     await user.save();
     res.send("inserted");
    } catch(err) {
        console.log(err)
    }
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});