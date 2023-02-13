import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./NavContactStrip.scss";

const NavContactStrip = () => {
  return (
    <div className="nav-contact-strip">
      <span className="nav-contact-strip_location">
        <FontAwesomeIcon
          className="nav-contact-strip_location-icon"
          icon={faLocationDot}
        />{" "}
        Chennai, Tamil Nadu, India
      </span>
      <div className="nav-contact-strip_social-icons">
        <FontAwesomeIcon
          className="nav-contact-strip_social-icon"
          icon={faFacebook}
        />
        <FontAwesomeIcon
          className="nav-contact-strip_social-icon"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className="nav-contact-strip_social-icon"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="nav-contact-strip_social-icon"
          icon={faYoutube}
        />
      </div>
    </div>
  );
};

export default NavContactStrip;
