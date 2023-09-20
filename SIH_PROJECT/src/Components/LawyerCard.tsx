import React, { useState, } from "react";
import "../Components/style/LawyearCard.css";
import Lcard from "./Lcard";
// import axios from "axios";
import UserNavbar from "./UserNavbar";

interface LawyerData {
  name: string;
  address: string;
  experience: string;
  skills: string[];
  rating: number;
  reviews: number;
  languages: string[];
}

const LawyerCard: React.FC = () => {
  const [, ] = useState<string[]>([]);
  // const [location, setLocation] = useState<string[]>([]);
  // const [, setLanguage] = useState<string[]>([]);
  const [lawyerDataArray, ] = useState<LawyerData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [, setDoFilter] = useState<boolean>(false);

  // ... Rest of your code ...

  // const handleCategory = (option: string) => {
  //   setSelectedOptions((prevSelectedOptions) => {
  //     if (prevSelectedOptions.includes(option)) {
  //       return prevSelectedOptions.filter((item) => item !== option);
  //     } else {
  //       return [...prevSelectedOptions, option];
  //     }
  //   });
  //   setDoFilter(true);
  // };

  // const handleCity = (option: string) => {
  //   setLocation((prevSelectedCities) => {
  //     if (prevSelectedCities.includes(option)) {
  //       return prevSelectedCities.filter((item) => item !== option);
  //     } else {
  //       return [...prevSelectedCities, option];
  //     }
  //   });
  //   setDoFilter(true);
  // };

  // const handleLanguage = (option: string) => {
  //   setLanguage((prevSelectedLanguages) => {
  //     if (prevSelectedLanguages.includes(option)) {
  //       return prevSelectedLanguages.filter((item) => item !== option);
  //     } else {
  //       return [...prevSelectedLanguages, option];
  //     }
  //   });
  //   setDoFilter(true);
  // };

  const onSearch = (query: string) => {
    setSearchTerm(query);
    setDoFilter(true);
  };

  // ... Rest of your code ...

  return (
    <>
      <UserNavbar />
      <div className="lawyer-data">
        <div className="category-bar">
          {/* <select value={location} onChange={(e) => handleCity(e.target.value)}>
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select> */}
          {/* ... */}
        </div>
        <div className="card-area">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          {lawyerDataArray.map((lawyerData, index) => (
            <Lcard key={index} lawyerData={lawyerData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LawyerCard;
