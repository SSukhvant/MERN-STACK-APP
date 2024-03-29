import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.scss';
import { Navbar } from './components';
import NewStudent from './NewStudent';
import Student from './Student';

function App() {

  return (
    <div>
    <Navbar/>
    <ToastContainer position='top-center' autoClose='2000'/>
    <Routes>
    <Route exact path="/" element={<Student/>} />
    <Route exact path="/NewStudent" element={<NewStudent/>} />
    <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
    </div>
  )
}

export default App
