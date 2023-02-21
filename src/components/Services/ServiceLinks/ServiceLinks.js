import "./ServiceLinks.scss";

import { Link as ScrollLink } from "react-scroll";

const ServiceLinks = () => {
  return (
    <div className="service-link_container">
      <ScrollLink className="services_scroll-link" to="">
        DEMOLITION
      </ScrollLink>
      <ScrollLink className="services_scroll-link" to="">
        CUTTING SERVICES
      </ScrollLink>
      <ScrollLink className="services_scroll-link" to="">
        EARTH CUT AND EXCAVATION
      </ScrollLink>
      <ScrollLink className="services_scroll-link" to="">
        SHEET PILE
      </ScrollLink>
      <ScrollLink className="services_scroll-link" to="">
        CONSTRUCTION WASTE MANAGEMENT
      </ScrollLink>
    </div>
  );
};

export default ServiceLinks;
