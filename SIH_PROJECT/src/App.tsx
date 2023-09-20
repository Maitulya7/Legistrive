import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import "./App.css"
import Lawyer from './Components/Lawyer';
import LawyerCard from './Components/LawyerCard';
// import Register from './Components/register';
// import Login from './Components/login';
import Chatbot from './Components/Chatbot';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/Lawyer" element={<Lawyer />} />
          <Route path="/LawyerCard" element={<LawyerCard/>}/>
        </Routes>
      </Router>
      <Chatbot />
    </div>
  );
}

export default App;
