import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import "./App.css";
import Lawyer from './Components/Lawyer';
import LawyerCard from './Components/LawyerCard';
import Register from './Components/register';
import Login from './Components/login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);


  useEffect(() => {
    const phone_number=localStorage.getItem("phoneNumber");
    setIsAuthenticated(phone_number !== null);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home/> } /> 
        <Route
          path="/Lawyer"
          element={isAuthenticated ? <Lawyer /> : <Navigate to="/login" />}
        />
        <Route path="/LawyerCard" element={isAuthenticated ? <LawyerCard/> : <Navigate to="/login" />}/>
      </Routes>
    </Router>
  );
}

export default App;
