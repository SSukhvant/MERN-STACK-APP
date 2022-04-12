import React from "react";
import "./Students.scss";
import { HiDownload } from 'react-icons/hi';

const data = [
  {
    id: '1',
    name: 'Student name',
    age: '10',
    school: 'Modal School',
    classn: 'Class',
    division: 'A',
    status: 'Active'  
  }
]

const Students = () => {
  return (
    <div className="app__students">
    <h2>View Student</h2>
    <form>
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

      <table responsive striped hover>
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

        {data.map((index) => (
          <tr>
          <td>{index.id}</td>
          <td>{index.name}</td>
          <td>{index.age}</td>
          <td>{index.school}</td>
          <td>{index.classn}</td>
          <td>{index.division}</td>
          <td>{index.status}</td>
          <td>
          <button type="button" className="app__edit-delete-btn">Edit</button>
          <button type="button" className="app__edit-delete-btn">Delete</button>
          </td>
        </tr>
        ))}
        </tbody>
      </table>

      <button type="button" className="app__excel-btn">Download Excel <span><HiDownload/></span></button>
    </div>
  );
};

export default Students;
