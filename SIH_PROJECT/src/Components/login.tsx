import "../Components/style/loginstyle.css";
import img2 from "../assets/one.svg"
import { Link } from 'react-router-dom';

function Login(){
    return(
        <>
            <div className="login-container">
                <div className="login-left-container">
                    <h1>Welcome back !</h1>
                    <p className="login-top-title">Legistrive: Bridging the Gap Between Legal Talent and Opportunities, One Connection at a Time.</p>
                    
                    <div className="login-left-container-sub">
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>

                    <button className="login-btn-login">
                        Login
                    </button>
                    </div>
                   
                    
                    <span className="login-text">Or Continue With</span>
                    <div className="login-icons">
                    <div className="icon"><i className="fa-brands fa-google"></i></div>
                    <div className="icon"><i className="fa-brands fa-linkedin"></i></div>
                    <div className="icon"><i className="fa-brands fa-facebook"></i></div>
                    </div>
                    

                    <p className="login-sub-title-login">Not A Member Register here!</p>
                    <Link  className="login-register-btn"to="/">Register here!</Link>
                    

                </div>

                <div className="login-container-right">
                    
                </div>

                <div className="login-right-container">
                    <img src={img2} alt="img" />
                    <p>Unlocking Legal Opportunities and Talent with Legistrive.</p>
                </div>
            </div>
        </>
    )
}

export default Login;