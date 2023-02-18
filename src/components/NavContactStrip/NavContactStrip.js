import logo from "../../assets/1.png";

import "./NavContactStrip.scss";

const NavContactStrip = () => {
  return (
    <div className="nav-contact-strip">
      <div className="nav-contact-strip_logo-container">
        <img width={100} height={100} src={logo} alt="logo" />
        <span className="nav-contact-strip_brand-name">DEEPAM ENGINEERING</span>
      </div>
      <div className="nav-contact-strip_contact-info-container">
        <div className="nav-contact-strip_contact-info">
          <span className="nav-contact-strip_contact-info-title">Call Us</span>
          <span className="nav-contact-strip_contact-info-value">
            +91 9942952901
          </span>
        </div>
        <div className="nav-contact-strip_contact-info">
          <span className="nav-contact-strip_contact-info-title">Email Us</span>
          <span className="nav-contact-strip_contact-info-value">
            deepamchennai87@gmail.com
          </span>
        </div>
      </div>
      <button>Contact Us</button>
    </div>
  );
};

export default NavContactStrip;
