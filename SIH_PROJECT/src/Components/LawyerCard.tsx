import React from "react";
import "./style/LawyearCard.css"; // Import your CSS file

const LawyerCard = () => {
  // Dummy lawyer data
  const lawyerData = {
    name: "John Doe",
    address: "123 Main St, City",
    experience: "5 years",
    skills: ["Divorce", "Child Custody", "Mediation"],
    rating: 4.5,
    reviews: 27,
    languages: ["English", "Spanish"], // Add a languages property
  };

  return (
    <div className="lawyer-card">
      <div className="lawyer-card-header">
        <div className="lawyer-card-rating">
          Rating: {lawyerData.rating}
        </div>
        <div className="lawyer-card-reviews">
          Review: {lawyerData.reviews}
        </div>
      </div>
      <div className="lawyer-card-content">
        <div className="lawyer-card-profile">
          {/* Add your lawyer's profile image here */}
        </div>
        <div className="lawyer-card-details">
          <h2>{lawyerData.name}</h2>
          <p>{lawyerData.address}</p>
          <p>Experience: {lawyerData.experience}</p>
          <p className="languages-section">Languages: {lawyerData.languages.join(", ")}</p> {/* Display languages */}
          <div className="lawyer-card-skills">
            {lawyerData.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
          <div className="lawyer-card-options">
            <button className="call-button">Call</button>
            <button className="message-button">Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
