import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./NavSocialStrip.scss";

const NavSocialStrip = () => {
  return (
    <div className="nav-social-strip">
      <span className="nav-social-strip_location">
        <FontAwesomeIcon
          className="nav-social-strip_location-icon"
          icon={faLocationDot}
        />{" "}
        Chennai, Tamil Nadu, India
      </span>
      <div className="nav-social-strip_social-icons">
        <FontAwesomeIcon
          className="nav-social-strip_social-icon"
          icon={faFacebook}
        />
        <FontAwesomeIcon
          className="nav-social-strip_social-icon"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className="nav-social-strip_social-icon"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="nav-social-strip_social-icon"
          icon={faYoutube}
        />
      </div>
    </div>
  );
};

export default NavSocialStrip;
