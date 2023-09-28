import "../Components/style/LawyerCard.css";

const Lcard = ({ lawyerData }: any) => {
  return (
    <div className="lawyer-card">
      <div className="lawyer-card-header">
        <div className="lawyer-card-rating">Rating: 4.5</div>
        <div className="lawyer-card-reviews">Reviews: 36</div>
      </div>
      <div className="lawyer-card-content">
        <div className="lawyer-card-profile">
          {/* Add your lawyer's profile image here */}
          <img
            src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs="
            alt="Lawyer's Profile"
            className="profile-image"
          />
        </div>
        <div className="lawyer-card-details">
          <h2>{lawyerData.FIRSTNAME}</h2>
          <p>{lawyerData.LOCATION}</p>
          <p>Experience: {lawyerData.EXPERIENCE}</p>
          <p className="languages-section">
            Languages: {lawyerData.LANGUAGES.join(", ")}
          </p>
          <div className="lawyer-card-skills">
            {lawyerData.SPECIALITIES.map((skill: any, index: any) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="lawyer-card-options">
        <button className="call-button">Call</button>
        <button className="message-button">Message</button>
      </div>
    </div>
  );
};

export default Lcard;
