import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Navbar } from './components';
import NewStudent from './NewStudent';
import Student from './Student';

function App() {

  return (
    <div>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Student/>} />
    <Route exact path="/NewStudent" element={<NewStudent/>} />
    <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
    </div>
  )
}

export default App
