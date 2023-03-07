import { Component } from "react";
import "../styles/navbar.css";
import logo from '../assets/Images/Logo.svg'
 class Navbar extends Component {
    state ={clicked : false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
  return (
    <div>
      <nav>
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <div>
          <ul id="navbar" className={this.state.clicked ? '#navbar active'
           : '#navbar'}>
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Content</a>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? 
          'fas fa-times' : 'fas fa-bars'}> </i>
        </div>
      </nav>
    </div>
  );
}
}
export default Navbar