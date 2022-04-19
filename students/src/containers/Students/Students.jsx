import React, {useEffect, useState} from "react";
import Axios from 'axios';
import "./Students.scss";
import { HiDownload } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';
import Update from "../Update/Update";
import { useParams } from "react-router-dom";

const initialState = {
  fullName: "",
  dob: "",
  school: "",
  classname: "",
  division: "",
  status: "",
};

const Students = () => {
  const [newData, setNewData] = useState(initialState);

  const { fullName, dob, school, classname, division, status } = initialState;
   
   const [student, setStudent] = useState([]);
   const [modal, setModal] = useState(false);
   const [uid, setUid] =useState([]);

   const handleUpdate = (event) => {
    const {name, value} = event.target;

    setNewData({ ...newData, [name]: value });

    // console.log(newData);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  };
  //  const {id} = useParams();
 
   const toggleModal = (id) => {
    Axios.get(`http://localhost:3001/update/${id}`).then((response) => {
      setNewData(response.data);
      console.log(response.data);
    })
    setModal(!modal);
     setUid(id);
     if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

   };
 


   useEffect(() => {
     Axios.get("http://localhost:3001/read").then((response) => {
       setStudent(response.data);
     })
   },[]);


  return (
    <div className="app__students">
    <h2>View Student</h2>
    <form className="app__search-form">
    <input type="text" placeholder='Name' id='name'/>
    <input type="text" id='age' placeholder="Age"/>

    <select id='school'>
    <option>Scool</option>
    <option value="Model School">Model School</option>
    <option value="Public School">Public School</option>
    </select>

    <select id='class'>
    <option>Class</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    </select>

    <select id='division'>
    <option>Division</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    </select>
    
    <button type="button" className="app__form-btn">Search</button>
    </form>

      <table>
        <thead>
          <tr>
            <th>ID'V</th>
            <th>Name</th>
            <th>Age</th>
            <th>School</th>
            <th>Class</th>
            <th>Division</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

        {student.map((index, key) => {

          return (
          <tr key={key}>
          <td key={index._id}>{key + 1}</td>
          <td>{index.fullName}</td>
          <td>{index.age}</td>
          <td>{index.school}</td>
          <td>{index.classname}</td>
          <td>{index.division}</td>
          <td>{index.status}</td>
          <td>
              
          <button type="submit" onClick={() =>toggleModal(index._id)} className="app__edit-delete-btn">Edit</button>
          <button type="submit" className="app__edit-delete-btn">Delete</button>
          </td>
        </tr>
          )
        })}
        </tbody>
      </table>
      
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <form className="app__update-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="fullName"
            value={newData.fullName}
            onChange={handleUpdate}
          />
          <input
            type="text"
            id="age"
            placeholder="Age"
            name="dob"
            value={newData.age}
            onChange={handleUpdate}
          />
    
          <select id="school" name="school" value={newData.school} onChange={handleUpdate}>
            <option>Scool</option>
            <option value="Model School">Model School</option>
            <option value="Public School">Public School</option>
          </select>
    
          <select
            id="class"
            name="classname"
            value={newData.classname}
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
            value={newData.division}
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
              checked={newData.status === 'Active'}
              onChange={handleUpdate}
            />
            <label htmlFor="active">Active</label>
    
            <input
              type="radio"
              id="invoice"
              name="status"
              value="Invoice"
              checked={newData.status === 'Invoice'}
              onChange={handleUpdate}
            />
            <label htmlFor="invoice">Invoice</label>
          </div>
    
          <input type="submit" className="app__update-btn" value="Update"/>
        </form>
            <button className="close-modal" onClick={toggleModal}>
              <ImCross/>
            </button>
          </div>
        </div>
      )}

      <button type="button" className="app__excel-btn">Download Excel <span><HiDownload/></span></button>
    </div>
  );
};

export default Students;
