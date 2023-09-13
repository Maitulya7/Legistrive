import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import "./App.css"
import Lawyer from './Components/Lawyer';
// import Register from './Components/register';
// import Login from './Components/login';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} /> */}
         <Route path="/" element={<Home />} />
         <Route path="/Lawyer" element={<Lawyer />} />
      </Routes>
    </Router>
  );
}

export default App;
