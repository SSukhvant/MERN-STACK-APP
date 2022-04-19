import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  fullName: "",
  dob: "",
  school: "",
  classname: "",
  division: "",
  status: "",
};

const Update = (props) => {
  const [newData, setNewData] = useState(initialState);

  const { fullName, dob, school, classname, division, status } = initialState;


  const sid = props.uid;
  let { id } = useParams();
  // const id = useParams(props.uid);
  // console.log(id)
  // useEffect(() => {
  //     if(id) {
  //         getStudent(id);
  //     }
  // }, [id])



  // const getStudent = async (id) => {
  //   const response = await axios.get(`http://localhost:3001/update/${id}`);
  //   setNewData(response.data[0]);

  //   const data1 = await response.json();
  //   if (data1.status || !data1) {
  //     toast.error("Failed");
  //     console.log("failed")
  //   } else {
  //     toast.info(data1.Result);
  //     console.log(data1);
  
  //   }
  //  }

   useEffect((id) => {
    Axios.get(`http://localhost:3001/update/${id}`).then((response) => {
      setNewData(response.data);
      console.log(response.data)
    })
  },[id]);

  const handleUpdate = (event) => {
    const {name, value} = event.target;

    setNewData({ ...newData, [name]: value });

    // console.log(newData);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="app__update-form" onSubmit={handleSubmit}>
      <h2>{props.uid}</h2>
      <input
        type="text"
        placeholder="Name"
        id="name"
        name="fullName"
        value={fullName}
        onChange={handleUpdate}
      />
      <input
        type="text"
        id="age"
        placeholder="Age"
        name="dob"
        value={dob}
        onChange={handleUpdate}
      />

      <select id="school" name="school" value={school} onChange={handleUpdate}>
        <option>Scool</option>
        <option value="Model School">Model School</option>
        <option value="Public School">Public School</option>
      </select>

      <select
        id="class"
        name="classname"
        value={classname}
        onChange={handleUpdate}
      >
        <option>Class</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>

      <select
        id="division"
        name="division"
        value={division}
        onChange={handleUpdate}
      >
        <option>Division</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
      </select>

      <div className="app__update-radio">
        <input
          type="radio"
          id="active"
          name="status"
          value="Active"
          onChange={handleUpdate}
        />
        <label htmlFor="active">Active</label>

        <input
          type="radio"
          id="invoice"
          name="status"
          value="Invoice"
          onChange={handleUpdate}
        />
        <label htmlFor="invoice">Invoice</label>
      </div>

      <input type="submit" className="app__update-btn" value="Update"/>
    </form>
  );
};

export default Update;
