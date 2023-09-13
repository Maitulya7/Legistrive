import { Component } from "react";
import "../Components/style/Navbar.css";
import { MenuItems } from "./Menuitems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
        <i className="fa-solid fa-scale-balanced"></i>Legistrive
        </h1>
        <div className="meanu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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
          <Link className="navbar-btn" to={"./Lawyer"}>Lawyer Click Here</Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
