import { Component } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { StyledButton } from "../styles/buttonStyle";
import logo from "../assets/Images/Logo.svg";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div>
        <nav>
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                {/* <a className="active" href="#">
                Home
              </a> */}
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                {/* <a href="#">About</a> */}
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/plus">Plus</NavLink>
              </li>
              <li>
                <NavLink to="/school">Plus</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <StyledButton>
                  <NavLink to="/sign">Sign Up</NavLink>
                </StyledButton>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            >
              {" "}
            </i>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
