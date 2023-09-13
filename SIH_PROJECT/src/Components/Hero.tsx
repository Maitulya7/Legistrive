import "../Components/style/Herostyle.css"
import heroTop from "../assets/hero-top.svg";
import heroBottom from "../assets/hero-bottom.svg"
import heroBg from "../assets/hero-bg.png"

function Hero(){
    return(
        <>
        <div className="Hero">
            <h1 className="hero-title">Welcome To Legistrive !</h1>
            <p>The journey to owning a property is a significant milestone in one's life, often representing a dream come true. However, navigating the complex and ever-changing real estate landscape can be daunting.</p>
            <img alt="img" src={heroBg}/>

            <button>Talk To Lawyer</button>
        </div>
        <div className="one">

        </div>

        <div className="hero-container-top">
            <img alt="hero-top" src={heroTop}/>
            <div className="hero-container-top-sub">
                <p>The journey to owning a property is a significant milestone in one's life, often representing a dream come true. However, navigating the complex and ever-changing real estate landscape can be daunting.</p>
                <button>Get Started</button>
            </div>
            
        </div>

        <div className="hero-container-bottom">
            <img alt="hero-bottom" src={heroBottom}/>
            <div className="hero-container-bottom-sub">
            <p>The journey to owning a property is a significant milestone in one's life, often representing a dream come true. However, navigating the complex and ever-changing real estate landscape can be daunting.</p>
                <button>Get Started</button>
            </div>
            
        </div>
        </>
    )
}

export default Hero;