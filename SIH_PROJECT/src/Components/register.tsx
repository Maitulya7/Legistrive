import "../Components/style/registerstyle.css"
import img1 from "../assets/two.svg"
import { Link } from 'react-router-dom';

function Register (){
    return(
        <>  

            <div className="container">
                <div className="left-container">
                    <h1>Register Now</h1>
                    <p className="top-title">Legistrive: Bridging the Gap Between Legal Talent and Opportunities, One Connection at a Time.</p>
                    
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="number" placeholder="Phone Number"/>
                    <input type="password" placeholder="Password"/>

                    <button className="btn-register">
                        Register
                    </button>

                    <p className="sub-title">Already A Member ?</p>
                    <Link to="/login">Login</Link>
                </div>

                <div className="right-container">
                    <img src={img1} alt="img" />
                    <p>Unlocking Legal Opportunities and Talent with Legistrive.</p>
                </div>
            </div>
        </>
    )
}

export default Register;
