import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/two.svg";
import "../Components/style/registerstyle.css"

interface FormData {
 first_name:string;
 last_name:string;
  email: string;
  phone_number: string;
  password: string;
}

function Register() {
  const [formData, setFormData] = useState<FormData>({
    first_name:"",
    last_name:"",
     email: "",
     phone_number:"",
     password: "",
   });

   const navigate=useNavigate();

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
      const response = await fetch("http://localhost:3000/userSignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        localStorage.setItem("phoneNumber",formData.phone_number);
        localStorage.setItem("password",formData.password);
        console.log("Registration successful!");
        navigate('/')
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
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
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
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
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
