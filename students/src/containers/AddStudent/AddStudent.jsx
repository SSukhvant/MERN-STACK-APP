import React, {useState} from 'react';
import './AddStudent.scss';

const AddStudent = () => {

  const [user, setUser] = useState({
     fullName: "", dob: "", school: "", classname: "", division: "", status: ""
  });
 

  let name, value;

  const handleInputs = (event) => {

    name = event.target.name;
    value = event.target.value;

    setUser({...user, [name]:value})

    console.log(user);
  }

  const PostData = async (event) => {
    event.preventDefault();

    const { fullName, dob, school, classname, division, status } = user;

    const res = await fetch('http://localhost:3001/insert', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        fullName,
        dob,
        school,
        classname,
        division, 
        status
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Failed");
      console.log("failed")
    } else {
      window.alert(data.status);
      console.log(data)
    }
  }


  return (
    <div className='app__addstudent'>
    <h2>Add Student</h2>
      <form method="POST">
      <div className='app__addstudent-form'>
      <label htmlFor="fullName">Name</label>
      <input type="text" name='fullName' placeholder='Name' id='fullName' autoComplete='off'
      value={user.fullName}
      onChange={handleInputs} data-toggle="tooltip" data-html="true" required/>
      </div>

      <div className='app__addstudent-form'>
      <label htmlFor="dob">Date Of Birth</label>
      <input type="date" name='dob' id='dob'
      value={user.dob}
      onChange={handleInputs} required/>
      </div>

      <div className='app__addstudent-form'>
      <label htmlFor="school">School</label>
      <select id='school' name='school'
      value={user.school}
      onChange={handleInputs} required>
      <option value=''>School</option>
      <option value="Model School">Model School</option>
      <option value="Public School">Public School</option>
      </select>
      </div>

      <div className='app__addstudent-form'>
      <label htmlFor="class">Class</label>
      <select id='class' name='classname'
      value={user.classname}
      onChange={handleInputs}
      required>
      <option value=''>Class</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      </select>
      </div>

      <div className='app__addstudent-form'>
      <label htmlFor="division">Division</label>
      <select id='division' name='division'
      value={user.division}
      onChange={handleInputs}
      required>
      <option value=''>Division</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="E">E</option>
      <option value="F">F</option>
      </select>
      </div>

      <div className='app__addstudent-form-radio'>
      <label htmlFor="status">Status</label>
      <div>
        <input type="radio" id="active" name="status"
      value="Active"
      onChange={handleInputs}
      required/>
        <label htmlFor="active">Active</label>

        <input type="radio" id="invoice" name="status"
      value="Invoice"
      onChange={handleInputs}
      required/>
        <label htmlFor="invoice">Invoice</label>
      </div>
      </div>

      <button type='submit' onClick={PostData} className='app__form-btn'>Save</button>
      </form>
    </div>
  )
}

export default AddStudent
