import React from "react";
import "../Components/style/LawyearCard.css"; 

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
      <div className="card-area">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => onSearch(searchTerm)}>Search</button>
        </div>

        {lawyerDataArray.map((lawyerData, index) => (
           <Lcard lawyerData={lawyerData} /> 
      ))} 
        
      </div>
      <div>{selectedOptions}</div>
    </div>
    </>
   
  );
};

export default LawyerCard;
