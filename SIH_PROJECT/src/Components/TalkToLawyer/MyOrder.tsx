import React, { useState, useEffect } from "react";
import UserNavbar from "../UserNavbar";

const LawyerCard: React.FC = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [bookingData, setBookingData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);

    const fetchAllData = async () => {
        try {
            const lawyerMobileNumber = "1111122222";
            const response = await fetch("http://localhost:3000/getLawyerBookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ LAWYER_MOBILENUMBER: lawyerMobileNumber }),
            });

            if (response.ok) {
                const data = await response.json();
                setBookingData(data.data);
                setFilteredData(data.data); // Initialize filteredData with all data
            } else {
                console.error("Failed to fetch lawyer bookings:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    const problemCategory = ["Pending", "Solved"];

    const handleCategory = (option: string) => {
        setSelectedOptions((prevSelectedOptions) => {
            if (prevSelectedOptions.includes(option)) {
                return prevSelectedOptions.filter((item) => item !== option);
            } else {
                return [...prevSelectedOptions, option];
            }
        });
    };

    // Filter data based on selected options
    useEffect(() => {
        if (selectedOptions.length === 0) {
            // Show all options when nothing is checked
            setFilteredData(bookingData);
        } else {
            const filtered = bookingData.filter((booking) =>
                selectedOptions.includes(booking.ISSOLVED ? "Solved" : "Pending")
            );
            setFilteredData(filtered);
        }
    }, [selectedOptions, bookingData]);

    return (
        <>
            <UserNavbar />
            <div className="lawyer-data">
                <div className="category-bar" style={{ width: "180px" }}>
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
                </div>
                <div className="card-area" style={{ marginTop: "170px", textAlign: "center", marginLeft: "150px" }}>
                    <table style={{ margin: "0 auto", borderCollapse: "collapse", width: "90%" }}>
                        <thead>
                            <tr>
                                <th>CUSTOMER MOBILE NUMBER</th>
                                <th>SERVICE CATEGORY</th>
                                <th>SERVICE CHARGE</th>
                                <th>SERVICE DESCRIPTION</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((booking) => (
                                <React.Fragment key={booking._id}>
                                    <tr className="row-box"> {/* Apply a class for box styling */}
                                        <td>{booking.CUSTOMER_MOBILENUMBER}</td>
                                        <td>{booking.SERVICE_CATEGORY}</td>
                                        <td>{booking.SERVICE_CHARGE}</td>
                                        <td style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                            {booking.SERVICE_DESCRIPTION}
                                        </td>
                                        <td>{booking.ISSOLVED ? "Solved" : "Pending"}</td>
                                    </tr>
                                    <tr className="row-divider">
                                        <td colSpan={5}></td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default LawyerCard;
