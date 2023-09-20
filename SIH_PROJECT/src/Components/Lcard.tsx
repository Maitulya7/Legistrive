import "../Components/style/LawyearCard.css"; 

const Lcard = ({lawyerData}:any) => {
  console.log(lawyerData)
  return (
    <div className="lawyer-card">
      <div className="lawyer-card-header">
        <div className="lawyer-card-rating">
          Rating: 4
        </div>
        <div className="lawyer-card-reviews">
          Review: 36
        </div>
      </div>
      <div className="lawyer-card-content">
        <div className="lawyer-card-profile">
          {/* Add your lawyer's profile image here */}
        </div>
        <div className="lawyer-card-details">
          <h2>{lawyerData.FIRSTNAME}</h2>
          <p>{lawyerData.LOCATION}</p>
          <p>Experience: {lawyerData.EXPERIENCE}</p>
          <p className="languages-section">Languages: {lawyerData.LANGUAGES.join(", ")}</p> {/* Display languages */}
          <div className="lawyer-card-skills">
            {lawyerData.SPECIALITIES.map((skill:any, index:any) => (
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

export default Lcard;
