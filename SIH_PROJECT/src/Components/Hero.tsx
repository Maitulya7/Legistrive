// HeroComponent.js
import React from "react";
import "../Components/style/Herostyle.css"; // Import your CSS file
import { Link } from "react-router-dom";


function HeroComponent() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome To Legistrive!</h1>
        <p>
          The journey to owning a property is a significant milestone in one's
          life, often representing a dream come true. However, navigating the
          complex and ever-changing real estate landscape can be daunting.
        </p>
        <Link className="hero-btn" to={"./LawyerCard"}>
          Talk To Lawyer
        </Link>
        
      </div>
    </div>
  );
}

export default HeroComponent;
