import React, { useState } from 'react';
import axios from '../Axios';
import toast from 'react-hot-toast';
import "../Components/style/Lawyer.css";
import img from "../assets/lawyer-bg.svg";
import { useNavigate } from 'react-router';

function Lawyer() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [barCouncilId, setBarCouncilId] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [year, setYear] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const phoneNumber = localStorage.getItem('phoneNumber');

        const requestData = {
            FIRSTNAME: firstName,
            LASTNAME: lastName,
            PASSWORD: password,
            MOBILENUMBER: phoneNumber,
            EMAIL: email,
            GENDER: 'Male',
            STATE: state,
            CITY: city,
            BAR_COUNCIL_ID: barCouncilId,
            ID_NUMBER: idNumber,
            YEAR: year
        };

        try {
            const response = await axios.post('/lawyerSignup', requestData);
            if (response.status === 201) {
                localStorage.setItem('isLawyer', 'true');
                toast.success('Congratulations, your data is sent to apply as Lawyer')
                console.log('Signup successful:', response.data);
                navigate("/");
            } else {
                console.error('Unexpected status code:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Some error occured while sending data')
        }
    };

    return (
        <div className="lawyer-container">
            <div className="lawyer-container-left">
                <h1>Join Our Legal Network</h1>
                <img src={img} alt="img" />
            </div>

            <div className="lawyer-container-right">
                <h1>Create a new account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <p className='gender'>Gender</p>
                        <div className="radio-container">
                            <label>
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Female
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    id="other"
                                    name="gender"
                                    value="other"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Other
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <select
                            id="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value="">Select State...</option>
                            <option value="state1">State 1</option>
                            <option value="state2">State 2</option>
                            {/* Add more state options */}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <select
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option value="">Select City...</option>
                            <option value="city1">City 1</option>
                            <option value="city2">City 2</option>
                            {/* Add more city options */}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="barCouncilId">Bar Council ID</label>
                        <input
                            type="number"
                            id="barCouncilId"
                            placeholder="BAR COUNCIL ID"
                            value={barCouncilId}
                            onChange={(e) => setBarCouncilId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idNumber">ID Number</label>
                        <input
                            type="number"
                            id="idNumber"
                            placeholder="ID NO."
                            value={idNumber}
                            onChange={(e) => setIdNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input
                            type="number"
                            id="year"
                            placeholder="Year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group file-upload">
                        <p>Bar Council Certificate Or ID Card</p>
                        <label className="custom-file-upload">
                            <input type="file" id="certificate" accept=".pdf,.jpg,.png" />
                            Choose File
                        </label>

                    </div>


                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Lawyer;
