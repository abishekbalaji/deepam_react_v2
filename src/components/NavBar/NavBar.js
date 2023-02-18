import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar_container">
      <Link className="navbar_navlink" to="/">
        Home
      </Link>
      <Link className="navbar_navlink">About Us</Link>
      <Link on className="navbar_navlink" to="/services">
        <span>Services</span>
        <div className="navbar_services-dropdown-container">
          <div className="navbar_services-links-container">
            <Link
              className="navbar_services-navlink"
              to="/services/high-reach-demolition"
            >
              High Reach Demolition
            </Link>
            <Link className="navbar_services-navlink">Building Demolition</Link>
            <Link className="navbar_services-navlink">Bridge Demolition</Link>
            <Link className="navbar_services-navlink">
              Overhead Water Tank Demolition
            </Link>
          </div>
        </div>
      </Link>

      <Link className="navbar_navlink">Experties</Link>
      <Link className="navbar_navlink">Contact Us</Link>
    </div>
  );
};

export default NavBar;
