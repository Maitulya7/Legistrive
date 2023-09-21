import React, { useState, useEffect } from "react";
import Lcard from "./Lcard";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import "../Components/style/LawyerCard.css"



interface LawyerData {
  FIRSTNAME: string;
  LOCATION: string;
  EXPERIENCE: string;
  SPECIALITIES: string[];
  rating: number;
  reviews: number;
  LANGUAGES: string[];
  MOBILENUMBER: string;
}

const LawyerCard: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [location, setLocation] = useState<string[]>([]);
  const [language, setLanguage] = useState<string[]>([]);
  const [doFilter, setDoFilter] = useState(false);
  const [lawyerDataArray, setLawyerDataArray] = useState<LawyerData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Retrive LawyerData
  const fetchAllData = async () => {
    try {
      const response = await fetch("http://localhost:3000/getLawyersFeed", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const lawyerData = await response.json();
        // Now you have the lawyerData in the state

        setLawyerDataArray(lawyerData);
      } else {
        console.error("Failed to fetch lawyer data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Call the fetchData function to retrieve lawyer data when needed
  useEffect(() => {
    // Call the fetchData function to retrieve lawyer data when the component mounts
    fetchAllData();
  }, []);

  const problemCategory = [
    "Family Law",
    "Criminal Defense",
    "Divorce & Child Custody",
    "Property & Real Estate",
    "Employment Issues",
    "Consumer Protection",
    "Civil Matters",
    "Cyber Crime",
    "Company & Start-Ups",
    "Other Legal Problem",
  ];

  const cities = ["New York", "Ahmedabad", "Vadodara", "Vapi"];

  const languages = ["English", "Hindi", "Guj"];

  const handleCategory = (option: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      const isOptionSelected = prevSelectedOptions.includes(option);
      if (isOptionSelected) {
        return prevSelectedOptions.filter((item) => item !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
    setDoFilter(true);
  };

  const handleCity = (option: string) => {
    setLocation((prevSelectedCities) => {
      const isOptionSelected = prevSelectedCities.includes(option);
      if (isOptionSelected) {
        return prevSelectedCities.filter((item) => item !== option);
      } else {
        return [...prevSelectedCities, option];
      }
    });
    setDoFilter(true);
  };

  const handleLanguage = (option: string) => {
    setLanguage((prevSelectedLanguages) => {
      const isOptionSelected = prevSelectedLanguages.includes(option);
      if (isOptionSelected) {
        return prevSelectedLanguages.filter((item) => item !== option);
      } else {
        return [...prevSelectedLanguages, option];
      }
    });
    setDoFilter(true);
  };

  const onSearch = (query: string) => {
    console.log(query);
  };

  useEffect(() => {
    // Move the API call logic inside useEffect
    if (doFilter) {
      const requestBody = {
        LOCATION: location,
        LANGUAGES: language,
        SPECIALITIES: selectedOptions,
        QUERY: searchTerm,
      };

      setDoFilter(false);

      const filterAPIUrl = "http://localhost:3000/filterLawyer";
      console.log(filterAPIUrl);

      const fetchData = async () => {
        try {
          const response = await axios.post(filterAPIUrl, requestBody);
          const updatedLawyerDataArray = response.data; // Assuming API response is an array of LawyerData
          setLawyerDataArray(updatedLawyerDataArray); // Update the array with fetched data

          console.log("updated Lawyer Data: ", updatedLawyerDataArray);
        } catch (error) {
          console.error("Error while fetching data:", error);
        }
      };

      fetchData();
    }
  }, [doFilter, selectedOptions, location, language, searchTerm]);

  return (
    <>
      <UserNavbar />
      <div className="lawyer-data">
        <div className="category-bar">
          <select value={location} onChange={(e) => handleCity(e.target.value)}>
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <hr className="divider-line" />

          {problemCategory.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCategory(option)}
              />
              {option}
            </label>
          ))}

          <hr className="divider-line" />

          {languages.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={language.includes(option)}
                onChange={() => handleLanguage(option)}
              />
              {option}
            </label>
          ))}
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

          <div className="lawyer-grid">
            <div className="lawyer-card">
            {lawyerDataArray.map((lawyerData, index) => (
              <Lcard lawyerData={lawyerData} />
            ))}
            </div>
          </div>
        </div>
        <div>{selectedOptions}</div>
      </div>
    </>
  );
};

export default LawyerCard;
