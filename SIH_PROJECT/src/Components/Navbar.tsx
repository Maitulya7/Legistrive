import React, { useState, useEffect } from "react";
import "../Components/style/Navbar.css";
import { MenuItems } from "./Menuitems";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [isLawyer, setIsLawyer] = useState(false);

  useEffect(() => {
    const isLawyerFromLocalStorage =
      localStorage.getItem("isLawyer") === "true";
    setIsLawyer(isLawyerFromLocalStorage);
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <i className="fa-solid fa-scale-balanced"></i>Legistrive
      </h1>
      <div className="meanu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}

        {!isLawyer && (
          <Link className="navbar-btn" to={"./Lawyer"}>
            Lawyer Click Here
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
