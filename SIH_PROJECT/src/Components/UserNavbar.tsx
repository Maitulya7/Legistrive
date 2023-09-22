import { Component } from "react";
import "../Components/style/userNavbarstyle.css";
import { UserMenuitems } from "./UserMenuitems";
import { Link } from "react-router-dom";

class UserNavbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    // Assume you have the user's profile image URL and name
    const userProfileImage = "path-to-user-profile-image.jpg"; // Replace with the actual image URL
    const userName = "User Name"; // Replace with the actual user's name

    return (
      <div>
        {/* First Row: Logo and User Profile */}
        <div className="user-top-row"> {/* Updated class name */}
          <div className="user-logo-and-name"> {/* Updated class name */}
          <Link to={"http://localhost:5173"}>
            <h1 className="user-navbar-logo"> {/* Updated class name */}
              <i className="fa-solid fa-scale-balanced"></i>Legistrive
            </h1>
          </Link>
          </div>
          <div className="user-user-profile"> {/* Updated class name */}
            <div className="user-user-info"> {/* Updated class name */}
              {/* Circular profile image */}
              <div className="user-user-profile-image"> {/* Updated class name */}
                <img src={userProfileImage} alt="User Profile" />
              </div>
              <span className="user-user-name">{userName}</span> {/* Updated class name */}
              <span className="user-user-phone">User Phone</span> {/* Updated class name */}
            </div>
          </div>
        </div>

        {/* Second Row: Navbar Items */}
        <nav className="UserNavbarItems"> {/* Updated class name */}
          <div className="user-meanu-icons" onClick={this.handleClick}> {/* Updated class name */}
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={this.state.clicked ? "user-nav-menu active" : "user-nav-menu"}> {/* Updated class name */}
            {UserMenuitems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link className="user-navbar-btn" to={"./Lawyer"}>Lawyer Click Here</Link> {/* Updated class name */}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default UserNavbar;
