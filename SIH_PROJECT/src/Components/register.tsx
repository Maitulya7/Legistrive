import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/two.svg";
import "../Components/style/registerstyle.css"

interface FormData {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
}

function Register() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // API LINK 
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Registration successful!");
      } else {
        console.error("Failed to register");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="register-container">
        <div className="register-left-container">
          <h1>Register Now</h1>
          <p className="register-top-title">
            Legistrive: Bridging the Gap Between Legal Talent and Opportunities, One Connection at a Time.
          </p>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button className="register-btn-register" onClick={handleSubmit}>
            Register
          </button>

          <p className="register-sub-title">Already A Member?</p>
          <Link to="/login">Login</Link>
        </div>

        <div className="register-right-container">
          <img src={img1} alt="img" />
          <p>Unlocking Legal Opportunities and Talent with Legistrive.</p>
        </div>
      </div>
    </>
  );
}

export default Register;
