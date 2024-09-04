// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';  // Import NavBar component
import JobList from './components/JobList';  // Import JobList component
import CompanyList from './components/CompanyList';  // Import CompanyList component
import Homepage from './components/Homepage';  // Import Homepage component
import Login from './components/Login';  // Import Login component
import Signup from './components/Signup';  // Import Signup component
import Profile from './components/Profile';  // Import Profile component
import './App.css';  // Global styles

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
