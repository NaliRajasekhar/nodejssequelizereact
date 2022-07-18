import React, { Component } from 'react';
import {Routes, BrowserRouter,Route} from 'react-router-dom';

import Home from './pages/home';
import Add from './pages/add';
// import Student from './components/addStudent'
// import GetStudents from './components/getStudent';
// import DeleteStudent from './components/deletsStudent'
//import Create from './components/create'


export default class Student extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        
        {/* <GetStudents />
        <Student />
        <DeleteStudent /> */}
        
        
        <Routes>
          <Route exact  path='/' element={<Home/>}></Route>
          <Route path = "/addStudent" element = {<Add/>}></Route>
          <Route path = "/update/:id" element={<Add/>}></Route>
          <Route path = "/view/:id" element={<Add/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
